import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FlyUp Ads Intelligence | FlyUp Paraquedismo",
  description:
    "Ferramenta interna da FlyUp Paraquedismo para análise e otimização de campanhas de publicidade digital.",
};

export default function FlyUpAdsIntelligencePage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "64px 24px",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
        color: "#1a1a1a",
        background: "#ffffff",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
        FlyUp Ads Intelligence
      </h1>

      <p>
        O FlyUp Ads Intelligence é uma ferramenta interna da FlyUp
        Paraquedismo desenvolvida para auxiliar na análise e otimização das
        campanhas de publicidade digital da empresa.
      </p>

      <p>
        A ferramenta conecta contas Google Ads autorizadas a sistemas de
        análise assistidos por inteligência artificial, permitindo que
        usuários autorizados analisem o desempenho das campanhas e
        identifiquem oportunidades de otimização.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
        Finalidade
      </h2>

      <p>
        O FlyUp Ads Intelligence é utilizado para analisar dados de
        publicidade, incluindo campanhas, grupos de anúncios, anúncios,
        palavras-chave, termos de pesquisa, impressões, cliques, custos,
        conversões, orçamentos e outras métricas relacionadas ao desempenho
        das campanhas.
      </p>

      <p>
        A ferramenta também pode utilizar informações disponibilizadas pelas
        APIs do Google Ads para auxiliar em pesquisas de palavras-chave,
        planejamento, diagnóstico de campanhas e tomada de decisões
        relacionadas às campanhas publicitárias da FlyUp Paraquedismo.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
        Como funciona
      </h2>

      <p>
        O acesso às informações de uma conta Google ocorre somente após
        autorização através do sistema OAuth do Google por um usuário
        autorizado.
      </p>

      <p>
        O FlyUp Ads Intelligence não solicita nem armazena a senha da Conta
        Google do usuário.
      </p>

      <p>
        A autenticação e a autorização são realizadas utilizando os
        mecanismos oficiais disponibilizados pelo Google.
      </p>

      <p>
        As informações acessadas são utilizadas exclusivamente para análise,
        monitoramento, planejamento e otimização das campanhas autorizadas.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
        Quem utiliza
      </h2>

      <p>
        O FlyUp Ads Intelligence é destinado à equipe e aos profissionais
        autorizados responsáveis pelas atividades de marketing, análise e
        gestão de mídia da FlyUp Paraquedismo.
      </p>

      <h2 style={{ fontSize: 22, fontWeight: 700, marginTop: 40, marginBottom: 16 }}>
        Privacidade
      </h2>

      <p>
        <Link
          href="/flyup-ads-intelligence/privacy"
          style={{ color: "#0b5fff", textDecoration: "underline" }}
        >
          Política de Privacidade
        </Link>
      </p>

      <hr style={{ margin: "48px 0 24px", border: 0, borderTop: "1px solid #e5e5e5" }} />

      <p style={{ fontSize: 14, color: "#555" }}>
        FlyUp Paraquedismo
        <br />
        Aplicação: FlyUp Ads Intelligence
        <br />
        Contato: projetoflyup@gmail.com
      </p>
    </main>
  );
}
