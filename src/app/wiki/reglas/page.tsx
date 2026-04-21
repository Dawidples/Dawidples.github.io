export default function ReglasPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Reglas del Servidor</h1>
      <p className="text-lg text-muted mb-8">
        Para mantener un entorno geopolítico justo y divertido para todos, es obligatorio cumplir las normativas del servidor. El desconocimiento de las reglas no exime de su cumplimiento.
      </p>

      <div className="glass-panel p-10 rounded-3xl text-center border border-dashed border-white/20">
        <div className="text-4xl mb-4">📜</div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Normativa en Revisión</h3>
        <p className="text-muted max-w-md mx-auto">
          El documento completo de reglas está siendo actualizado y trasladado a esta sección de la Wiki. Por favor, consulta nuestro servidor de Discord para ver las normativas vigentes temporalmente.
        </p>
      </div>
    </div>
  );
}