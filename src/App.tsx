import { lazy, Suspense, useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Layout from "./components/layout";
import Loading from "./components/loading";
import Fallback from "./components/fallback";

type StudySession = {
  id: string;
  subject: string;
  minutes: number;
  date: string;
};

const Home = lazy(() => import("./pages/home"));
const AddSession = lazy(() => import("./pages/add-session"));
const SessionDetails = lazy(() => import("./pages/session-details"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {

  const [sessions, setSessions] = useState<StudySession[]>([]);


  const addSession = useCallback((s: StudySession) => {
    setSessions((prev) => [s, ...prev]);
  }, []);

  const removeSession = useCallback((id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }, []);


  const total = sessions.length;
  const totalMinutes = useMemo(
    () => sessions.reduce((acc, s) => acc + s.minutes, 0),
    [sessions]
  );
  const avgMinutes = useMemo(
    () => (total ? (totalMinutes / total).toFixed(1) : "0"),
    [totalMinutes, total]
  );

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home
                    sessions={sessions}
                    removeSession={removeSession}
                    summary={{ total, totalMinutes, avgMinutes }}
                  />
                }
              />
              <Route path="/add" element={<AddSession onAdd={addSession} />} />
              <Route path="/session/:id" element={<SessionDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
