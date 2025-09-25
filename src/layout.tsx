import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="max-w-4xl mx-auto p-4 flex gap-6">
          <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
          <Link to="/add" className="text-blue-600 font-semibold hover:underline">Nova Sessão</Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
