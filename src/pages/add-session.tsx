import { useState, type ChangeEvent } from "react";

type StudySession = { id: string; subject: string; minutes: number; date: string };

export default function AddSession({ onAdd }: { onAdd: (s: StudySession) => void }) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(60);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onAdd({ id: crypto.randomUUID(), subject, minutes, date });
    setSubject("");
  }

  return (
    <form onSubmit={submit} className="space-y-5 p-6 border rounded-xl bg-white max-w-lg mx-auto shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700">Nova Sessão de Estudo</h2>

      <label className="block text-sm font-medium">
        Assunto
        <input
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={subject}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
          required
        />
      </label>

      <label className="block text-sm font-medium">
        Minutos
        <input
          type="number"
          min={1}
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={minutes}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMinutes(Number(e.target.value))}
        />
      </label>

      <label className="block text-sm font-medium">
        Data
        <input
          type="date"
          className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
        />
      </label>

      <button className="w-full rounded-md bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition">
        Salvar Sessão
      </button>
    </form>
  );
}
