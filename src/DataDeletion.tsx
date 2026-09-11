import "./App.css";

/**
 * Página de Exclusão de Dados da Brand Tech.
 *
 * Esta página explica como o titular pode solicitar
 * exclusão ou revisão de seus dados pessoais.
 *
 * Ela também servirá como URL pública para a configuração
 * de exclusão de dados do aplicativo da Meta.
 */
function DataDeletion() {
  return (
    <div className="site">
      {/* =========================================================
          CABEÇALHO
          ========================================================= */}
      <header className="header">
        <div className="container header-content">
          <a className="brand" href="/" aria-label="Brand Tech">
            <span className="brand-mark">B</span>

            <span className="brand-name">
              Brand<span>Tech</span>
            </span>
          </a>

          <a className="header-button" href="/">
            Voltar ao site
          </a>
        </div>
      </header>

      <main>
        <section className="legal-page">
          <div className="container legal-container">
            {/* =====================================================
                CABEÇALHO DA PÁGINA
                ===================================================== */}
            <div className="legal-heading">
              <span className="section-label">Privacidade</span>

              <h1>Exclusão de Dados</h1>

              <p>
                Esta página explica como solicitar a exclusão de dados pessoais
                tratados por meio dos serviços e soluções da Brand Tech,
                incluindo o Brand CRM.
              </p>

              <span className="legal-update">
                Última atualização: 10 de setembro de 2026
              </span>
            </div>

            {/* =====================================================
                CONTEÚDO
                ===================================================== */}
            <article className="legal-content">
              <section>
                <h2>1. Solicitação de exclusão</h2>

                <p>
                  O titular dos dados pode solicitar a exclusão de informações
                  pessoais tratadas pela Brand Tech quando essa exclusão for
                  aplicável de acordo com a legislação.
                </p>

                <p>
                  A solicitação deve conter informações suficientes para
                  permitir a identificação do solicitante e dos dados
                  relacionados ao pedido.
                </p>
              </section>

              <section>
                <h2>2. Informações que podem ser incluídas no pedido</h2>

                <p>
                  Para facilitar a localização dos registros, o solicitante
                  poderá informar:
                </p>

                <ul>
                  <li>nome utilizado no atendimento;</li>
                  <li>número de telefone utilizado no contato;</li>
                  <li>endereço de e-mail, quando aplicável;</li>
                  <li>empresa relacionada ao atendimento, quando aplicável;</li>
                  <li>canal utilizado para entrar em contato;</li>
                  <li>
                    outras informações que permitam localizar os dados
                    relacionados à solicitação.
                  </li>
                </ul>

                <p>
                  O solicitante não deve enviar senhas, códigos de autenticação,
                  números completos de documentos financeiros ou outras
                  credenciais de acesso.
                </p>
              </section>

              <section>
                <h2>3. Como realizar a solicitação</h2>

                <p>
                  Entre em contato com a Brand Tech por meio de um de seus
                  canais oficiais e informe que deseja realizar uma solicitação
                  relacionada à exclusão de dados pessoais.
                </p>

                <p>
                  No contato, informe os dados necessários para que possamos
                  localizar o registro correspondente.
                </p>

                <p>
                  Instagram:
                  <a
                    className="legal-link inline"
                    href="https://www.instagram.com/brandtechsistem/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @brandtechsistem
                  </a>
                </p>
              </section>

              <section>
                <h2>4. Verificação da solicitação</h2>

                <p>
                  Para proteger os dados contra solicitações fraudulentas, a
                  Brand Tech poderá solicitar informações adicionais para
                  verificar se o pedido está sendo realizado pelo próprio
                  titular ou por pessoa devidamente autorizada.
                </p>

                <p>
                  Somente serão solicitadas informações compatíveis com a
                  finalidade de confirmação da identidade ou da legitimidade do
                  pedido.
                </p>
              </section>

              <section>
                <h2>5. Análise do pedido</h2>

                <p>
                  Após a identificação dos registros relacionados ao
                  solicitante, a Brand Tech analisará o pedido considerando a
                  legislação aplicável e a natureza dos dados envolvidos.
                </p>

                <p>
                  Quando a exclusão for aplicável, serão adotadas as medidas
                  necessárias para remover ou tornar indisponíveis os dados
                  correspondentes nos sistemas sob responsabilidade da Brand
                  Tech.
                </p>
              </section>

              <section>
                <h2>6. Dados que podem precisar ser mantidos</h2>

                <p>
                  Determinados registros poderão ser mantidos quando a
                  conservação for necessária para cumprimento de obrigação
                  legal ou regulatória, exercício regular de direitos,
                  prevenção de fraude, segurança ou outras hipóteses previstas
                  pela legislação.
                </p>

                <p>
                  Nesses casos, os dados serão mantidos somente conforme
                  necessário para a finalidade que justificar sua conservação.
                </p>
              </section>

              <section>
                <h2>7. Dados tratados em nome de empresas clientes</h2>

                <p>
                  Em algumas situações, a Brand Tech poderá tratar dados por
                  meio do Brand CRM em nome de uma empresa cliente que utiliza
                  a plataforma.
                </p>

                <p>
                  Dependendo do contexto, poderá ser necessário direcionar a
                  solicitação para a empresa responsável pelo relacionamento
                  com o titular ou atuar em conjunto com ela para atender ao
                  pedido.
                </p>
              </section>

              <section>
                <h2>8. WhatsApp, Instagram e serviços da Meta</h2>

                <p>
                  Quando o contato tiver ocorrido por serviços da Meta, como
                  WhatsApp ou Instagram, a Brand Tech poderá utilizar as
                  informações disponíveis nesses canais para localizar os
                  registros correspondentes no Brand CRM.
                </p>

                <p>
                  A exclusão de informações armazenadas diretamente pelas
                  próprias plataformas da Meta está sujeita também às políticas
                  e ferramentas disponibilizadas pela Meta.
                </p>
              </section>

              <section>
                <h2>9. Relação com a Política de Privacidade</h2>

                <p>
                  Informações adicionais sobre como os dados pessoais podem ser
                  tratados estão disponíveis na Política de Privacidade da
                  Brand Tech.
                </p>

                <a className="legal-link" href="/politica-de-privacidade">
                  Consultar Política de Privacidade →
                </a>
              </section>

              <section>
                <h2>10. Contato</h2>

                <p>
                  Caso tenha dúvidas sobre uma solicitação de exclusão de dados,
                  utilize os canais oficiais da Brand Tech.
                </p>

                <p>
                  Instagram:
                  <a
                    className="legal-link inline"
                    href="https://www.instagram.com/brandtechsistem/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @brandtechsistem
                  </a>
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      {/* =========================================================
          RODAPÉ
          ========================================================= */}
      <footer className="footer">
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Brand Tech. Todos os direitos
            reservados.
          </span>

          <a href="/">Voltar para Brand Tech</a>
        </div>
      </footer>
    </div>
  );
}

export default DataDeletion;