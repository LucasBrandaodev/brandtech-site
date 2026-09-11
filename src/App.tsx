import "./App.css";

/**
 * Site institucional da Brand Tech.
 *
 * Nesta primeira etapa, o App.tsx contém a estrutura principal da landing page.
 * Depois criaremos, separadamente, as páginas:
 *
 * /politica-de-privacidade
 * /termos-de-servico
 * /exclusao-de-dados
 *
 * Essas páginas serão usadas também na configuração do aplicativo da Meta.
 */

function App() {
  return (
    <div className="site">
      {/* =========================================================
          CABEÇALHO
          ========================================================= */}
      <header className="header">
        <div className="container header-content">
          <a className="brand" href="#inicio" aria-label="Brand Tech">
            <span className="brand-mark">B</span>

            <span className="brand-name">
              Brand<span>Tech</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#brand-crm">Brand CRM</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="header-button" href="#brand-crm">
            Conheça o Brand CRM
          </a>
        </div>
      </header>

      <main>
        {/* =========================================================
            HERO / APRESENTAÇÃO PRINCIPAL
            ========================================================= */}
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Tecnologia, automação e inteligência artificial
              </div>

              <h1>
                Tecnologia que transforma
                <span> conversas em oportunidades.</span>
              </h1>

              <p className="hero-description">
                A Brand Tech desenvolve soluções para ajudar empresas a
                organizar seus leads, automatizar atendimentos e tornar o
                processo comercial mais inteligente.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#brand-crm">
                  Conheça o Brand CRM
                  <span aria-hidden="true">→</span>
                </a>

                <a className="secondary-button" href="#como-funciona">
                  Veja como funciona
                </a>
              </div>

              <div className="hero-highlights">
                <div>
                  <strong>IA</strong>
                  <span>Pré-vendas inteligentes</span>
                </div>

                <div>
                  <strong>CRM</strong>
                  <span>Gestão de oportunidades</span>
                </div>

                <div>
                  <strong>Leads</strong>
                  <span>Centralização comercial</span>
                </div>
              </div>
            </div>

            {/* Painel visual do produto */}
            <div className="hero-visual">
              <div className="crm-window">
                <div className="crm-window-top">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>Brand CRM</span>
                </div>

                <div className="crm-layout">
                  <aside className="crm-sidebar">
                    <div className="mini-logo">B</div>

                    <div className="sidebar-line active" />
                    <div className="sidebar-line" />
                    <div className="sidebar-line" />
                    <div className="sidebar-line" />
                  </aside>

                  <div className="crm-dashboard">
                    <div className="dashboard-heading">
                      <div>
                        <small>Visão comercial</small>
                        <h3>Pipeline de Leads</h3>
                      </div>

                      <div className="status-badge">
                        <span />
                        IA ativa
                      </div>
                    </div>

                    <div className="metric-grid">
                      <div className="metric-card">
                        <small>Novos leads</small>
                        <strong>+24</strong>
                        <span>Captação</span>
                      </div>

                      <div className="metric-card">
                        <small>Qualificados</small>
                        <strong>18</strong>
                        <span>Pré-venda</span>
                      </div>

                      <div className="metric-card">
                        <small>Oportunidades</small>
                        <strong>11</strong>
                        <span>Comercial</span>
                      </div>
                    </div>

                    <div className="pipeline-preview">
                      <div className="pipeline-column">
                        <span className="column-title">Novo</span>

                        <div className="lead-card">
                          <strong>Lead recebido</strong>
                          <small>WhatsApp</small>
                        </div>

                        <div className="lead-card">
                          <strong>Nova conversa</strong>
                          <small>Instagram</small>
                        </div>
                      </div>

                      <div className="pipeline-column">
                        <span className="column-title">Qualificação</span>

                        <div className="lead-card highlighted">
                          <strong>Lead qualificado</strong>
                          <small>IA • Score alto</small>
                        </div>
                      </div>

                      <div className="pipeline-column">
                        <span className="column-title">Negociação</span>

                        <div className="lead-card">
                          <strong>Atendimento humano</strong>
                          <small>Handoff</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-ai">
                <div className="floating-icon">AI</div>

                <div>
                  <strong>Agente inteligente</strong>
                  <span>Lead sendo qualificado</span>
                </div>
              </div>

              <div className="floating-card floating-card-lead">
                <div className="lead-indicator" />

                <div>
                  <strong>Novo lead</strong>
                  <span>Entrada registrada no CRM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRODUTO: BRAND CRM
            ========================================================= */}
        <section className="product-section" id="brand-crm">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">Brand CRM</span>

              <h2>
                Atendimento, leads e vendas
                <span> em um único fluxo.</span>
              </h2>

              <p>
                Uma plataforma criada para centralizar oportunidades e apoiar
                equipes comerciais durante a jornada do lead.
              </p>
            </div>

            <div className="product-grid">
              <article className="feature-card feature-card-large">
                <div className="feature-icon">✦</div>

                <span className="feature-tag">Inteligência artificial</span>

                <h3>Pré-venda automatizada com IA</h3>

                <p>
                  O agente pode conduzir os primeiros contatos, entender a
                  necessidade do potencial cliente e apoiar o processo de
                  qualificação.
                </p>

                <div className="chat-example">
                  <div className="chat-message customer">
                    Olá, gostaria de conhecer melhor a solução.
                  </div>

                  <div className="chat-message ai">
                    Claro. Posso fazer algumas perguntas para entender o que sua
                    empresa precisa?
                  </div>
                </div>
              </article>

              <article className="feature-card">
                <div className="feature-icon">◎</div>

                <h3>Gestão de leads</h3>

                <p>
                  Organize contatos, origem, status, classificação e histórico
                  comercial em uma única plataforma.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">↗</div>

                <h3>Handoff para humano</h3>

                <p>
                  Quando a oportunidade estiver pronta, o atendimento pode ser
                  direcionado para a equipe comercial continuar a negociação.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">◇</div>

                <h3>Pipeline comercial</h3>

                <p>
                  Visualize a evolução das oportunidades e acompanhe as etapas
                  do processo comercial.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">⌁</div>

                <h3>Integrações</h3>

                <p>
                  Estrutura preparada para conectar canais digitais ao fluxo de
                  atendimento e captação de leads.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            COMO FUNCIONA
            ========================================================= */}
        <section className="flow-section" id="como-funciona">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Como funciona</span>

              <h2>
                Da primeira mensagem
                <span> à oportunidade comercial.</span>
              </h2>

              <p>
                O Brand CRM foi pensado para conectar atendimento, qualificação
                e equipe comercial em uma jornada organizada.
              </p>
            </div>

            <div className="flow">
              <div className="flow-item">
                <div className="flow-number">01</div>
                <div className="flow-icon">💬</div>
                <h3>Mensagem</h3>
                <p>O potencial cliente entra em contato por um canal conectado.</p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-item">
                <div className="flow-number">02</div>
                <div className="flow-icon">✦</div>
                <h3>IA</h3>
                <p>O agente inicia o atendimento e coleta informações.</p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-item">
                <div className="flow-number">03</div>
                <div className="flow-icon">◎</div>
                <h3>Lead</h3>
                <p>O contato é centralizado e organizado dentro do CRM.</p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-item">
                <div className="flow-number">04</div>
                <div className="flow-icon">↗</div>
                <h3>Qualificação</h3>
                <p>A oportunidade é analisada antes do avanço comercial.</p>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-item">
                <div className="flow-number">05</div>
                <div className="flow-icon">👤</div>
                <h3>Humano</h3>
                <p>A equipe assume quando chega o momento da negociação.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RECURSOS
            ========================================================= */}
        <section className="resources-section" id="recursos">
          <div className="container resources-layout">
            <div className="section-heading">
              <span className="section-label">Tecnologia comercial</span>

              <h2>
                Menos tarefas dispersas.
                <span> Mais visão do processo.</span>
              </h2>

              <p>
                A proposta da Brand Tech é utilizar tecnologia para simplificar
                atividades operacionais e ajudar empresas a manter o processo
                comercial organizado.
              </p>

              <a className="primary-button" href="#contato">
                Fale com a Brand Tech
                <span>→</span>
              </a>
            </div>

            <div className="resource-list">
              <div className="resource-item">
                <span>01</span>

                <div>
                  <h3>Centralização</h3>
                  <p>
                    Leads, conversas e oportunidades reunidos dentro da mesma
                    operação.
                  </p>
                </div>
              </div>

              <div className="resource-item">
                <span>02</span>

                <div>
                  <h3>Automação</h3>
                  <p>
                    Redução de tarefas repetitivas durante as etapas iniciais do
                    atendimento.
                  </p>
                </div>
              </div>

              <div className="resource-item">
                <span>03</span>

                <div>
                  <h3>Qualificação</h3>
                  <p>
                    Organização das informações necessárias para priorizar
                    oportunidades.
                  </p>
                </div>
              </div>

              <div className="resource-item">
                <span>04</span>

                <div>
                  <h3>Continuidade</h3>
                  <p>
                    Transição do atendimento automatizado para o atendimento
                    humano quando necessário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTATO / CTA
            ========================================================= */}
        <section className="cta-section" id="contato">
          <div className="container">
            <div className="cta-box">
              <div className="cta-glow" />

              <span className="section-label">Brand Tech</span>

              <h2>
                O futuro das vendas começa
                <span> com uma conversa.</span>
              </h2>

              <p>
                Tecnologia para transformar atendimento em processo comercial e
                oportunidades em negócios.
              </p>

              <div className="cta-actions">
                <a
                  className="primary-button"
                  href="https://www.instagram.com/brandtechsistem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com a Brand Tech
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          RODAPÉ
          ========================================================= */}
      <footer className="footer">
        <div className="container footer-top">
          <div>
            <a className="brand footer-brand" href="#inicio">
              <span className="brand-mark">B</span>

              <span className="brand-name">
                Brand<span>Tech</span>
              </span>
            </a>

            <p>
              Soluções em tecnologia, automação e inteligência artificial para
              negócios.
            </p>
          </div>

          <div className="footer-column">
            <strong>Empresa</strong>
            <a href="#inicio">Início</a>
            <a href="#brand-crm">Brand CRM</a>
            <a href="#como-funciona">Como funciona</a>
          </div>

          <div className="footer-column">
            <strong>Legal</strong>

            {/*
             * Os endereços já estão definidos.
             * Criaremos o conteúdo dessas páginas nas próximas etapas.
             */}
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termos-de-servico">Termos de Serviço</a>
            <a href="/exclusao-de-dados">Exclusão de Dados</a>
          </div>

          <div className="footer-column">
            <strong>Contato</strong>

            <a
              href="https://www.instagram.com/brandtechsistem/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Brand Tech. Todos os direitos
            reservados.
          </span>

          <span>Brand CRM • Tecnologia para negócios</span>
        </div>
      </footer>
    </div>
  );
}

export default App;