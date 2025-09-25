import { Link } from "react-router-dom";
import NotFoundImage from "../assets/imageerror.jpg";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto text-center bg-white rounded-2xl shadow p-8">
        <img
        src={NotFoundImage}
        alt="Página não encontrada"
        className="mx-auto mb-6 w-60 max-w-full rounded"
      />    
      <h1 className="text-4xl font-bold text-gray-800 mb-3">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Página não encontrada
      </h2>
      <p className="text-gray-600 mb-6">
        O endereço acessado não existe. Verifique a URL ou volte para a página inicial.
      </p>
      <Link
        to="/"
        className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
