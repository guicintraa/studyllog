import { Link } from "react-router-dom";

type StudySession = { id: string; subject: string; minutes: number; date: string };
type Summary = { total: number; totalMinutes: number; avgMinutes: string };

export default function Home({
  sessions,
  removeSession,
  summary,
}: {
  sessions: StudySession[];
  removeSession: (id: string) => void;
  summary: Summary;
}) {
  return (
    <div className="space-y-8">
      <section className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Resumo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 rounded-lg p-4"><span className="text-3xl font-bold">{summary.total}</span><p className="text-sm">Sessões</p></div>
          <div className="bg-white/10 rounded-lg p-4"><span className="text-3xl font-bold">{summary.totalMinutes}</span><p className="text-sm">Minutos Totais</p></div>
          <div className="bg-white/10 rounded-lg p-4"><span className="text-3xl font-bold">{summary.avgMinutes}</span><p className="text-sm">Média por Sessão</p></div>
        </div>
      </section>

      {sessions.length === 0 ? (
        <div className="p-6 border-2 border-dashed rounded-xl text-center text-gray-500 bg-gray-50 shadow-sm">
          Nenhuma sessão cadastrada.
          <Link to="/add" className="ml-2 text-blue-600 font-semibold hover:underline">Adicionar agora</Link>
        </div>
      ) : (
        <ul className="space-y-4">
          {sessions.map((s) => (
            <li key={s.id} className="flex justify-between items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div>
                <h3 className="font-semibold text-lg text-blue-700">{s.subject}</h3>
                <p className="text-sm text-gray-600">{s.minutes} min · {s.date}</p>
              </div>
              <div className="flex gap-3">
                <Link to={`/session/${s.id}`} className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Detalhes</Link>
                <button onClick={() => removeSession(s.id)} className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 transition">Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
