// src/components/dashboard/CreateProjectModal.tsx
// Modal for creating a new project — inserts into Supabase proyectos table
// Supports both controlled (open/onClose props) and self-managed (via CustomEvent) modes
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function CreateProjectModal({ open: controlledOpen, onClose: controlledOnClose }: Props) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tipo: 'web',
    urgencia: 'normal',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Determine if we're in controlled mode (props passed) or self-managed mode
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
    setStep(1);
    setFormData({ titulo: '', descripcion: '', tipo: 'web', urgencia: 'normal' });
    setSubmitError(null);
  };

  // Listen for custom event in self-managed mode
  useEffect(() => {
    if (isControlled) return;
    const handler = () => setInternalOpen(true);
    window.addEventListener('open-create-project', handler);
    return () => window.removeEventListener('open-create-project', handler);
  }, [isControlled]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      // Get the current authenticated user
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;
      if (!sessionData?.session?.user) {
        throw new Error('No hay sesión activa. Inicia sesión nuevamente.');
      }

      const userId = sessionData.session.user.id;

      // Insert into proyectos table
      const { error: insertError } = await supabase.from('proyectos').insert({
        user_id: userId,
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        tipo: formData.tipo,
        urgencia: formData.urgencia,
        estado: 'En Cola',
        progreso: 0,
        archivos: [],
        notas: [],
        tareas_experto: [],
      });

      if (insertError) throw insertError;

      // Dispatch refresh event so the project list page reloads
      window.dispatchEvent(new CustomEvent('proyectos-refresh'));

      // Close the modal
      handleClose();
    } catch (err: any) {
      setSubmitError(err.message || 'Error al crear el proyecto. Intenta de nuevo.');
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#08080c] border border-[#1f1f24] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f24]">
          <h2 className="text-base font-medium text-white">Nuevo Proyecto</h2>
          <button onClick={handleClose} className="text-[#8a8a93] hover:text-white transition-colors p-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex px-6 pt-4 gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex-1 h-1 rounded-full transition-colors duration-300 ${s <= step ? 'bg-white' : 'bg-[#1f1f24]'}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-6 py-6">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-500 font-label-md uppercase tracking-wider mb-4">Paso 1 · Información básica</p>
                <div>
                  <label className="block text-xs text-neutral-400 font-body-md mb-1.5">Nombre del proyecto</label>
                  <input
                    type="text"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    placeholder="Ej: Rediseño de tienda online"
                    className="w-full px-4 py-2.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-body-md mb-1.5">Descripción breve</label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe el alcance general del proyecto..."
                    className="w-full px-4 py-2.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-500 font-label-md uppercase tracking-wider mb-4">Paso 2 · Tipo y urgencia</p>
                <div>
                  <label className="block text-xs text-neutral-400 font-body-md mb-1.5">Tipo de proyecto</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="web">Desarrollo Web (Astro/Next.js)</option>
                    <option value="wordpress">WordPress Corporativo</option>
                    <option value="automation">Automatización / Webhooks</option>
                    <option value="mobile">App Móvil</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 font-body-md mb-1.5">Nivel de urgencia</label>
                  <div className="flex gap-3">
                    {[
                      { value: 'baja', label: 'Baja', color: 'bg-blue-500' },
                      { value: 'normal', label: 'Normal', color: 'bg-yellow-500' },
                      { value: 'alta', label: 'Alta', color: 'bg-red-500' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, urgencia: opt.value }))}
                        className={`flex-1 px-4 py-2.5 text-xs font-medium rounded-lg border transition-all duration-200 ${
                          formData.urgencia === opt.value
                            ? 'border-white/40 bg-white/10 text-white'
                            : 'border-[#1f1f24] text-[#8a8a93] hover:border-white/20'
                        }`}
                      >
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${opt.color} mr-1.5`} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-500 font-label-md uppercase tracking-wider mb-4">Paso 3 · Confirmación</p>
                <div className="bg-black/50 border border-[#1f1f24] rounded-xl p-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Proyecto</span>
                    <span className="text-white font-medium">{formData.titulo || 'Sin título'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Tipo</span>
                    <span className="text-white">{formData.tipo}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Urgencia</span>
                    <span className="text-white capitalize">{formData.urgencia}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-500">
                  Al enviar, nuestro equipo revisará los requisitos y te asignará un experto en menos de 24 horas hábiles.
                </p>

                {/* Submit error message */}
                {submitError && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {submitError}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#1f1f24]">
            <button
              type="button"
              onClick={() => step > 1 ? setStep(step - 1) : handleClose()}
              className="text-xs text-[#8a8a93] hover:text-white transition-colors"
              disabled={submitting}
            >
              {step > 1 ? '← Anterior' : 'Cancelar'}
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-5 py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-neutral-200 transition-all"
              >
                Siguiente →
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 bg-white text-black text-xs font-medium rounded-lg hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creando...
                  </>
                ) : (
                  'Crear Proyecto'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
