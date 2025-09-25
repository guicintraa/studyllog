export default function Fallback({ error }: { error: unknown }) {
  console.error(error);
  return (
    <div className="text-center p-10 text-red-600">
      <h1 className="text-2xl font-bold mb-4">Ocorreu um erro </h1>
      <p>Tente recarregar a pagina.</p>
    </div>
  );
}
