import { Suspense } from "react";
import AgendamentoConcluido from "./AgendamentoConcluido";

export const metadata = {
    title: "Agendamento Recebido — Fly Up Paraquedismo",
    description: "Sua solicitação foi recebida! Nossa equipe entrará em contato em instantes.",
};

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <AgendamentoConcluido />
        </Suspense>
    );
}
