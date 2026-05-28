// src/components/dashboard/PaymentToggle.tsx
// Interactive toggle between Binance Pay and Bank Transfer payment methods
// Includes factura selection for reporting payments and WhatsApp integration
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface FacturaPendiente {
  id: string;
  numero: string;
  concepto: string;
  monto: number;
  fecha_vencimiento: string;
}

interface Props {
  facturasPendientes: FacturaPendiente[];
}

export default function PaymentToggle({ facturasPendientes }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedFacturaId, setSelectedFacturaId] = useState<string>(
    facturasPendientes.length > 0 ? facturasPendientes[0].id : ''
  );
  const [reporting, setReporting] = useState(false);
  const [reportSuccess, setReportSuccess] = useState<string | null>(null);
  const [reportError, setReportError] = useState<string | null>(null);

  const metodos = [
    {
      tipo: 'Binance Pay' as const,
      datos: 'ID de usuario: 87654321\nCorreo: pagos@vortexlm.com\nRed: BEP-20 (USDT)',
      activo: true,
    },
    {
      tipo: 'Transferencia Bancaria' as const,
      datos: 'Banco: BBVA\nIBAN: ES91 2100 0418 4502 0005 1332\nSWIFT: BBVAESMMXXX\nTitular: Vortex Logic LLC',
      activo: true,
    },
  ];

  const activeMethod = metodos[activeIndex];
  const selectedFactura = facturasPendientes.find((f) => f.id === selectedFacturaId);

  const handleReportPayment = async () => {
    if (!selectedFacturaId) return;

    setReporting(true);
    setReportSuccess(null);
    setReportError(null);

    try {
      // Update the factura's comprobante_pago_url with a confirmation hash
      const paymentRef = `PAY-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      const metodoTexto = activeMethod.tipo === 'Binance Pay' ? 'Binance Pay' : 'Transferencia Bancaria';

      const { error } = await supabase
        .from('facturas')
        .update({
          comprobante_pago_url: `reportado:${metodoTexto}:${paymentRef}`,
        })
        .eq('id', selectedFacturaId);

      if (error) throw error;

      setReportSuccess(`Pago reportado con éxito. Referencia: ${paymentRef}`);

      // Open WhatsApp with pre-filled message
      const factura = facturasPendientes.find((f) => f.id === selectedFacturaId);
      if (factura) {
        const message = encodeURIComponent(
          `Hola Vortex Logic, quiero reportar un pago realizado:\n\n` +
          `• Factura: ${factura.numero}\n` +
          `• Concepto: ${factura.concepto}\n` +
          `• Monto: $${Number(factura.monto).toFixed(2)} USD\n` +
          `• Método de pago: ${metodoTexto}\n` +
          `• Referencia: ${paymentRef}\n\n` +
          `Quedo atento a la confirmación. Gracias.`
        );
        window.open(`https://wa.me/15072190951?text=${message}`, '_blank');
      }
    } catch (err: any) {
      setReportError(err.message || 'Error al reportar el pago. Intenta de nuevo.');
    } finally {
      setReporting(false);
    }
  };

  return (
    <div>
      {/* Toggle buttons */}
      <div className="flex gap-2 mb-6">
        {metodos.map((metodo, idx) => (
          <button
            key={metodo.tipo}
            onClick={() => setActiveIndex(idx)}
            className={`px-5 py-2.5 text-xs font-medium rounded-lg transition-all duration-200 ${
              idx === activeIndex
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                : 'bg-[#121216] text-[#8a8a93] border border-[#1f1f24] hover:border-white/20 hover:text-white'
            }`}
          >
            {metodo.tipo === 'Binance Pay' ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Binance Pay
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M7.5 12h4.5m-4.5 3h4.5" /></svg>
                Transferencia Bancaria
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active method details */}
      <div className="bg-[#08080c] border border-[#1f1f24] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-2 h-2 rounded-full ${activeMethod.activo ? 'bg-emerald-500' : 'bg-red-500'}`} />
          <span className="text-sm font-medium text-white">{activeMethod.tipo}</span>
          {activeMethod.activo && (
            <span className="text-[10px] font-label-md text-emerald-500 uppercase tracking-wider">Activo</span>
          )}
        </div>
        <pre className="text-sm text-neutral-400 font-body-md leading-relaxed whitespace-pre-wrap font-mono bg-black/50 rounded-lg p-4 border border-[#1f1f24]">
          {activeMethod.datos}
        </pre>
      </div>

      {/* Report payment section */}
      <div className="mt-6">
        <label className="block text-xs text-neutral-500 font-label-md uppercase tracking-wider mb-3">¿Realizaste un pago?</label>

        {/* Factura selector — only show if there are pending invoices */}
        {facturasPendientes.length > 0 ? (
          <div className="space-y-3">
            {/* Factura dropdown */}
            <div>
              <label htmlFor="factura-select" className="block text-[10px] text-neutral-600 font-label-md uppercase tracking-wider mb-1.5">
                Selecciona la factura
              </label>
              <select
                id="factura-select"
                value={selectedFacturaId}
                onChange={(e) => setSelectedFacturaId(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-[#1f1f24] rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                {facturasPendientes.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.numero} — ${Number(f.monto).toFixed(2)} USD
                  </option>
                ))}
              </select>
            </div>

            {/* Selected factura summary */}
            {selectedFactura && (
              <div className="bg-black/50 border border-[#1f1f24] rounded-lg p-3">
                <p className="text-xs text-neutral-400 font-body-md">
                  <span className="text-white font-medium">{selectedFactura.numero}</span> — {selectedFactura.concepto}
                </p>
                <p className="text-[10px] text-neutral-600 mt-1">Vence: {selectedFactura.fecha_vencimiento}</p>
              </div>
            )}

            {/* Success message */}
            {reportSuccess && (
              <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
                {reportSuccess}
              </div>
            )}

            {/* Error message */}
            {reportError && (
              <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {reportError}
              </div>
            )}

            {/* Report button */}
            <button
              onClick={handleReportPayment}
              disabled={reporting || !selectedFacturaId}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white text-xs font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {reporting ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Reportando...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Reportar Pago por WhatsApp
                </>
              )}
            </button>
          </div>
        ) : (
          /* No pending invoices — show disabled state */
          <div className="bg-black/50 border border-[#1f1f24] rounded-lg p-4 text-center">
            <svg className="w-8 h-8 text-neutral-700 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs text-neutral-500 font-body-md">No tienes facturas pendientes por reportar.</p>
            <p className="text-[10px] text-neutral-700 mt-1">Todas tus facturas están al día.</p>
          </div>
        )}
      </div>
    </div>
  );
}
