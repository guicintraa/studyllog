import { useParams, Link } from "react-router-dom";

export default function SessionDetails() {
  const { id } = useParams();
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Sessão #{id}</h2>
      <p className="text-gray-600 mb-6">
        Aqui você poderia exibir os detalhes completos da sessão selecionada.
      </p>
      <Link to="/" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
        Voltar para Home
      </Link>
    </div>
  );
}
