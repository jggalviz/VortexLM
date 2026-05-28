// src/components/dashboard/AdminActions.tsx
// Interactive React component for the internal admin panel
// Provides: project status update, task injection, invoice validation
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

/* ─── Cliente Row ─── */
interface ClienteRow {
  id: string;
  user_id: string;
  empresa: string;
  email: string;
  vcredits_actuales: number;
}

export function ClienteSaldoEditor({ cliente, onSaldoUpdated }: { cliente: ClienteRow; onSaldoUpdated: () => void }) {
  const [open, setOpen] = useState(false);
  const [nuevoSaldo, setNuevoSaldo] = useState(cliente.vcredits_actuales.toString());
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    const val = parseInt(nuevoSaldo, 10);
    if (isNaN(val) || val < 0) {
      setError('Ingresa un número válido mayor o igual a 0.');
      return;
    }
    setUpdating(true);
    setError(null);
    const { error: err } = await supabase
      .from('perfiles_clientes')
      .update({ vcredits_actuales: val })
      .eq('id', cliente.id);
    if (err) {
      setError(err.message);
    } else {
      setOpen(false);
      onSaldoUpdated();
    }
    setUpdating(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-white/30 transition-all"
      >
        Modificar Saldo
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-64 bg-[#0c0c12] border border-[#1f1f24] rounded-xl p-4 shadow-2xl">
          <p className="text-xs text-white font-medium mb-3">Ajustar saldo de {cliente.empresa}</p>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="number"
              min={0}
              value={nuevoSaldo}
              onChange={(e) => setNuevoSaldo(e.target.value)}
              className="flex-1 px-3 py-1.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30"
            />
            <span className="text-[10px] text-neutral-500">vCredits</span>
          </div>
          {error && <p className="text-[10px] text-red-400 mb-2">{error}</p>}
          <div className="flex gap-2">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 px-3 py-1.5 text-[10px] text-neutral-500 border border-[#1f1f24] rounded-lg hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              disabled={updating}
              className="flex-1 px-3 py-1.5 text-[10px] bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all disabled:opacity-50"
            >
              {updating ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Proyecto Row ─── */
interface ProyectoRow {
  id: string;
  titulo: string;
  estado: string;
  progreso: number;
  empresa?: string;
}

export function ProyectoEstadoEditor({ proyecto, onEstadoUpdated }: { proyecto: ProyectoRow; onEstadoUpdated: () => void }) {
  const [updating, setUpdating] = useState(false);

  const estados = ['En Cola', 'En Desarrollo', 'Pruebas', 'Completado'];

  const handleChange = async (nuevoEstado: string) => {
    setUpdating(true);
    const { error } = await supabase
      .from('proyectos')
      .update({ estado: nuevoEstado })
      .eq('id', proyecto.id);
    if (!error) {
      onEstadoUpdated();
    }
    setUpdating(false);
  };

  const badgeColor = (estado: string) => {
    switch (estado) {
      case 'Completado': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'En Desarrollo': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Pruebas': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      default: return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-label-md border ${badgeColor(proyecto.estado)}`}>
        <span className={`w-1 h-1 rounded-full ${
          proyecto.estado === 'Completado' ? 'bg-emerald-500' :
          proyecto.estado === 'En Desarrollo' ? 'bg-blue-500' :
          proyecto.estado === 'Pruebas' ? 'bg-purple-500' : 'bg-neutral-500'
        }`} />
        {proyecto.estado}
      </span>
      <select
        value={proyecto.estado}
        onChange={(e) => handleChange(e.target.value)}
        disabled={updating}
        className="text-[10px] bg-black border border-[#1f1f24] rounded-lg px-2 py-1 text-neutral-400 focus:outline-none focus:border-white/30 disabled:opacity-50 appearance-none cursor-pointer hover:text-white transition-colors"
      >
        {estados.map((est) => (
          <option key={est} value={est}>{est}</option>
        ))}
      </select>
      {updating && (
        <svg className="w-3 h-3 text-neutral-500 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
    </div>
  );
}

/* ─── Inyectar Tarea ─── */
interface TareaInjectionProps {
  proyectoId: string;
  proyectoNombre: string;
  onTareaCreada: () => void;
}

export function InyectarTarea({ proyectoId, proyectoNombre, onTareaCreada }: TareaInjectionProps) {
  const [open, setOpen] = useState(false);
  const [tarea, setTarea] = useState('');
  const [completada, setCompletada] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tarea.trim()) return;
    setSubmitting(true);
    setError(null);
    const { error: err } = await supabase
      .from('proyectos_tareas')
      .insert({
        proyecto_id: proyectoId,
        tarea: tarea.trim(),
        completada,
        fecha: new Date().toISOString().split('T')[0],
      });
    if (err) {
      setError(err.message);
    } else {
      setTarea('');
      setCompletada(false);
      setOpen(false);
      onTareaCreada();
    }
    setSubmitting(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-[10px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-white/30 transition-all"
      >
        + Tarea
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 w-72 bg-[#0c0c12] border border-[#1f1f24] rounded-xl p-4 shadow-2xl">
          <p className="text-xs text-white font-medium mb-3">Nueva tarea para: {proyectoNombre}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder="Describe la tarea..."
              rows={2}
              className="w-full px-3 py-1.5 bg-black border border-[#1f1f24] rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 resize-none"
            />
            <label className="flex items-center gap-2 text-[10px] text-neutral-400 cursor-pointer">
              <input
                type="checkbox"
                checked={completada}
                onChange={(e) => setCompletada(e.target.checked)}
                className="accent-white"
              />
              Marcar como completada
            </label>
            {error && <p className="text-[10px] text-red-400">{error}</p>}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 px-3 py-1.5 text-[10px] text-neutral-500 border border-[#1f1f24] rounded-lg hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting || !tarea.trim()}
                className="flex-1 px-3 py-1.5 text-[10px] bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-all disabled:opacity-50"
              >
                {submitting ? 'Creando...' : 'Crear Tarea'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

/* ─── Factura Row ─── */
interface FacturaRow {
  id: string;
  numero: string;
  concepto: string;
  monto: number;
  estado: string;
  comprobante_pago_url: string | null;
  fecha_vencimiento: string;
  cliente_email?: string;
}

export function FacturaValidar({ factura, onValidada }: { factura: FacturaRow; onValidada: () => void }) {
  const [updating, setUpdating] = useState(false);

  const handleMarcarPagada = async () => {
    setUpdating(true);
    const { error } = await supabase
      .from('facturas')
      .update({ estado: 'Pagada' })
      .eq('id', factura.id);
    if (!error) {
      onValidada();
    }
    setUpdating(false);
  };

  const tieneComprobante = factura.comprobante_pago_url && factura.comprobante_pago_url.startsWith('reportado:');

  return (
    <div className="flex items-center gap-2">
      {tieneComprobante ? (
        <>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
            Reportado
          </span>
          <button
            onClick={handleMarcarPagada}
            disabled={updating}
            className="text-[10px] px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full hover:bg-emerald-500/30 transition-all disabled:opacity-50"
          >
            {updating ? 'Validando...' : '✓ Validar Pago'}
          </button>
        </>
      ) : (
        <span className="text-[10px] text-neutral-600">Sin reporte</span>
      )}
    </div>
  );
}
