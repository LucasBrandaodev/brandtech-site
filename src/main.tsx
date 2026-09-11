import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import TermsOfService from "./TermsOfService.tsx";
import DataDeletion from "./DataDeletion.tsx";

/**
 * Roteamento simples do site institucional da Brand Tech.
 *
 * Rotas disponíveis:
 *
 * /                         -> Site principal
 * /politica-de-privacidade -> Política de Privacidade
 * /termos-de-servico       -> Termos de Serviço
 * /exclusao-de-dados       -> Instruções de Exclusão de Dados
 *
 * Por enquanto não precisamos instalar React Router.
 * O pathname atual do navegador determina qual página será exibida.
 */
function Router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <App />;

    case "/politica-de-privacidade":
    case "/politica-de-privacidade/":
      return <PrivacyPolicy />;

    case "/termos-de-servico":
    case "/termos-de-servico/":
      return <TermsOfService />;

    case "/exclusao-de-dados":
    case "/exclusao-de-dados/":
      return <DataDeletion />;

    default:
      return <App />;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);