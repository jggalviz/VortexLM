// src/components/dashboard/ProjectTabs.tsx
// Interactive tab system for project detail view (Archivos, Notas, Tareas)
// Fetches data from Supabase relational tables: proyectos_archivos, proyectos_notas, proyectos_tareas
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Props {
  proyectoId: string;
}

interface Archivo {
  id: string;
  nombre: string;
  tamano: string;
  subido_por: string;
  created_at: string;
}

interface Nota {
  id: string;
  contenido: string;
  autor: string;
  created_at: string;
}

interface Tarea {
  id: string;
  tarea: string;
  completada: boolean;
  fecha: string;
  created_at: string;
}

type TabId = 'archivos' | 'notas' | 'tareas';

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'archivos', label: 'Archivos', icon: 'M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32a1.5 1.5 0 01-2.122-2.122L16.5 6' },
  { id: 'notas', label: 'Notas y Bitácora', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { id: 'tareas', label: 'Tareas del Experto', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export default function ProjectTabs({ proyectoId }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>('archivos');

  // Archivos state
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [archivosLoading, setArchivosLoading] = useState(true);
  const [archivosError, setArchivosError] = useState<string | null>(null);

  // Notas state
  const [notas, setNotas] = useState<Nota[]>([]);
  const [notasLoading, setNotasLoading] = useState(true);
  const [notasError, setNotasError] = useState<string | null>(null);

  // Tareas state
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [tareasLoading, setTareasLoading] = useState(true);
  const [tareasError, setTareasError] = useState<string | null>(null);

  // Nota input state
  const [nuevaNota, setNuevaNota] = useState('');
  const [notaSubmitting, setNotaSubmitting] = useState(false);
  const [notaSubmitError, setNotaSubmitError] = useState<string | null>(null);

  // Archivo upload state
  const [archivoSubmitting, setArchivoSubmitting] = useState(false);
  const [archivoSubmitError, setArchivoSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch archivos
  const fetchArchivos = async () => {
    setArchivosLoading(true);
    setArchivosError(null);
    try {
      const { data, error } = await supabase
        .from('proyectos_archivos')
        .select('*')
        .eq('proyecto_id', proyectoId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setArchivos(data || []);
    } catch (err: any) {
      setArchivosError(err.message || 'Error al cargar archivos.');
    } finally {
      setArchivosLoading(false);
    }
  };

  // Fetch notas
  const fetchNotas = async () => {
    setNotasLoading(true);
    setNotasError(null);
    try {
      const { data, error } = await supabase
        .from('proyectos_notas')
        .select('*')
        .eq('proyecto_id', proyectoId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setNotas(data || []);
    } catch (err: any) {
      setNotasError(err.message || 'Error al cargar notas.');
    } finally {
      setNotasLoading(false);
    }
  };

  // Fetch tareas
  const fetchTareas = async () => {
    setTareasLoading(true);
    setTareasError(null);
    try {
      const { data, error } = await supabase
        .from('proyectos_tareas')
        .select('*')
        .eq('proyecto_id', proyectoId)
        .order('created_at', { ascending: true });
      if (error) throw error;
      setTareas(data || []);
    } catch (err: any) {
      setTareasError(err.message || 'Error al cargar tareas.');
    } finally {
      setTareasLoading(false);
    }
  };

  // Fetch all data on mount
  useEffect(() => {
    fetchArchivos();
    fetchNotas();
    fetchTareas();
  }, [proyectoId]);

  // Handle file upload (simulated via click + prompt)
  const handleFileUpload = async () => {
    const fileName = prompt('Nombre del archivo (ej: documento.pdf):');
    if (!fileName || !fileName.trim()) return;

    setArchivoSubmitting(true);
    setArchivoSubmitError(null);
    try {
      const { error } = await supabase.from('proyectos_archivos').insert({
        proyecto_id: proyectoId,
        nombre: fileName.trim(),
        tamano: '—',
        subido_por: 'Cliente',
      });
      if (error) throw error;
      await fetchArchivos();
    } catch (err: any) {
      setArchivoSubmitError(err.message || 'Error al subir archivo.');
    } finally {
      setArchivoSubmitting(false);
    }
  };

  // Handle new nota submission
  const handleNotaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevaNota.trim()) return;

    setNotaSubmitting(true);
    setNotaSubmitError(null);
    try {
      const { error } = await supabase.from('proyectos_notas').insert({
        proyecto_id: proyectoId,
        contenido: nuevaNota.trim(),
        autor: 'Cliente',
      });
      if (error) throw error;
      setNuevaNota('');
      await fetchNotas();
    } catch (err: any) {
      setNotaSubmitError(err.message || 'Error al publicar nota.');
    } finally {
      setNotaSubmitting(false);
    }
  };

  // Update header stats counts
  useEffect(() => {
    const archivosEl = document.getElementById('archivos-count');
    const notasEl = document.getElementById('notas-count');
    const tareasEl = document.getElementById('tareas-count');
    if (archivosEl) archivosEl.textContent = String(archivos.length);
    if (notasEl) notasEl.textContent = String(notas.length);
    if (tareasEl) tareasEl.textContent = `${tareas.filter((t) => t.completada).length}/${tareas.length}`;
  }, [archivos.length, notas.length, tareas]);

  // --- Render helpers ---

  const renderSpinner = () => (
    <div className="flex items-center justify-center py-16">
      <svg className="w-8 h-8 text-neutral-600 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </div>
  );

  const renderError = (message: string, onRetry: () => void) => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <svg className="w-8 h-8 text-red-500/50 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <p className="text-sm text-neutral-400 font-body-md mb-3">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:text-neutral-300 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
        </svg>
        Intentar de nuevo
      </button>
    </div>
  );

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex border-b border-[#1f1f24] mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3.5 text-xs font-medium whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'text-white border-white'
                : 'text-[#8a8a93] border-transparent hover:text-white hover:border-white/30'
            }`}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d={tab.icon} />
            </svg>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[300px]">
        {/* ==================== ARCHIVOS TAB ==================== */}
        {activeTab === 'archivos' && (
          <div>
            {/* Dropzone / Upload area */}
            <div
              onClick={handleFileUpload}
              className="border-2 border-dashed border-[#1f1f24] rounded-xl p-10 mb-8 text-center hover:border-white/20 transition-colors duration-300 cursor-pointer group"
            >
              {archivoSubmitting ? (
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-neutral-600 animate-spin mb-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <p className="text-sm text-neutral-400 font-body-md">Subiendo archivo...</p>
                </div>
              ) : (
                <>
                  <svg className="w-10 h-10 mx-auto mb-4 text-[#8a8a93] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="text-sm text-neutral-400 font-body-md mb-1">Arrastra tus archivos aquí</p>
                  <p className="text-xs text-neutral-600 font-body-md">o haz clic para seleccionar (PDF, CSV, Figma, imágenes)</p>
                </>
              )}
            </div>

            {/* Upload error */}
            {archivoSubmitError && (
              <div className="mb-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {archivoSubmitError}
              </div>
            )}

            {/* File list */}
            {archivosLoading ? (
              renderSpinner()
            ) : archivosError ? (
              renderError(archivosError, fetchArchivos)
            ) : archivos.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-sm text-neutral-500 font-body-md">No hay archivos compartidos aún.</p>
              </div>
            ) : (
              <div className="space-y-2">
                <h4 className="text-xs text-neutral-500 font-label-md uppercase tracking-wider mb-4">Archivos compartidos</h4>
                {archivos.map((archivo) => (
                  <div key={archivo.id} className="flex items-center justify-between px-4 py-3 bg-[#08080c] border border-[#1f1f24] rounded-lg hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#8a8a93] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <div>
                        <p className="text-sm text-white font-medium">{archivo.nombre}</p>
                        <p className="text-xs text-neutral-500">
                          {archivo.tamano} · {archivo.created_at ? new Date(archivo.created_at).toLocaleDateString('es-ES') : '—'} · {archivo.subido_por}
                        </p>
                      </div>
                    </div>
                    <button className="text-[#8a8a93] hover:text-white transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== NOTAS TAB ==================== */}
        {activeTab === 'notas' && (
          <div className="space-y-6">
            {/* New nota form */}
            <form onSubmit={handleNotaSubmit} className="bg-[#08080c] border border-[#1f1f24] rounded-xl p-5">
              <label className="block text-xs text-neutral-400 font-body-md mb-2">Agregar comentario o nota</label>
              <textarea
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
                rows={3}
                placeholder="Escribe tu comentario aquí..."
                className="w-full px-4 py-2.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none mb-3"
                required
              />
              {notaSubmitError && (
                <div className="mb-3 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {notaSubmitError}
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600 font-body-md">Publicando como <strong className="text-neutral-400">Cliente</strong></span>
                <button
                  type="submit"
                  disabled={notaSubmitting || !nuevaNota.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {notaSubmitting ? (
                    <>
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Publicando...
                    </>
                  ) : (
                    'Publicar Nota'
                  )}
                </button>
              </div>
            </form>

            {/* Notas list */}
            {notasLoading ? (
              renderSpinner()
            ) : notasError ? (
              renderError(notasError, fetchNotas)
            ) : notas.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-sm text-neutral-500 font-body-md">No hay notas aún. ¡Sé el primero en comentar!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {notas.map((nota) => (
                  <div key={nota.id} className="bg-[#08080c] border border-[#1f1f24] rounded-xl p-5 hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-xs font-medium text-white">{nota.autor?.charAt(0) || '?'}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{nota.autor || 'Anónimo'}</span>
                      </div>
                      <span className="text-xs text-neutral-500">
                        {nota.created_at ? new Date(nota.created_at).toLocaleString('es-ES') : '—'}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 font-body-md leading-relaxed">{nota.contenido}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== TAREAS TAB ==================== */}
        {activeTab === 'tareas' && (
          <div className="relative">
            {tareasLoading ? (
              renderSpinner()
            ) : tareasError ? (
              renderError(tareasError, fetchTareas)
            ) : tareas.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-sm text-neutral-500 font-body-md">No hay tareas registradas para este proyecto.</p>
              </div>
            ) : (
              <>
                {/* Vertical timeline line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#1f1f24]" aria-hidden="true" />

                <div className="space-y-6">
                  {tareas.map((tarea) => (
                    <div key={tarea.id} className="relative flex gap-4 pl-8">
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                        tarea.completada
                          ? 'bg-emerald-500/20 border-emerald-500'
                          : 'bg-[#121216] border-[#1f1f24]'
                      }`}>
                        {tarea.completada ? (
                          <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-[#8a8a93]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${tarea.completada ? 'text-white' : 'text-neutral-400'}`}>
                          {tarea.tarea}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-[11px] font-label-md ${tarea.completada ? 'text-emerald-500' : 'text-neutral-600'}`}>
                            {tarea.completada ? 'Completada' : 'Pendiente'}
                          </span>
                          <span className="text-[11px] text-neutral-600">
                            {tarea.fecha || (tarea.created_at ? new Date(tarea.created_at).toLocaleDateString('es-ES') : '—')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
