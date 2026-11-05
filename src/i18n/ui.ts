export const languages = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const links = {
  linkedin: 'https://www.linkedin.com/in/ilmer/',
  github: 'https://github.com/ilmero',
};

type Job = { role: string; org: string; period: string; place: string; note: string; intro: string; bullets: string[]; stack: string };
type Dict = {
  meta: { description: string };
  nav: { writing: string; work: string; about: string; home: string };
  home: {
    h1: string;
    lead: string;
    lineage: [string, string, string, string];
    lineageLabel: string;
    doingTitle: string;
    doing: { t: string; d: string }[];
    workTitle: string;
    workAll: string;
    cols: { name: string; company: string; period: string; title: string; date: string };
    writingTitle: string;
    writingAll: string;
    contactTitle: string;
    contact: string;
  };
  about: {
    title: string;
    bio: string[];
    photoAlt: string;
    expTitle: string;
    expHint: string;
    jobs: Job[];
    eduTitle: string;
    edu: { t: string; s: string; period: string }[];
    langTitle: string;
    langs: { name: string; level: string }[];
  };
  footer: { language: string; englishOnly: string };
  notFound: { title: string; body: string; back: string };
};

export const ui: Record<Lang, Dict> = {
  en: {
    meta: {
      description:
        'Ilmer Oliveira, Analytics Engineer. Financial data, dbt and BigQuery, legacy warehouse cleanup. Based in Brazil, working remotely.',
    },
    nav: { writing: 'Writing', work: 'Work', about: 'About', home: 'Home' },
    home: {
      h1: 'I design finance data marts and clean up the warehouses they sit on.',
      lead: "Analytics Engineer with 8+ years in data, most of them in finance: a brokerage in Brazil, a wealth manager in Berlin, and now P2P.org, a crypto staking company. Day to day that means dbt, BigQuery, Airflow and Python.",
      lineage: ['Raw sources', 'Staging', 'Marts', 'The number finance signs off on'],
      lineageLabel: 'From raw sources, through staging and marts, to the number finance signs off on',
      doingTitle: 'What I usually end up doing',
      doing: [
        {
          t: 'Financial reporting',
          d: "Models that take finance from source data to the numbers they report, and a month-end close that doesn't eat a week.",
        },
        {
          t: 'Legacy cleanup',
          d: "Warehouses with years of history and models nobody owns. Working out what's still used, what can go, and deleting it without breaking anything.",
        },
        {
          t: 'Master data',
          d: 'One source of truth for the reference data everyone argues about, with full change history, built so the business team can maintain it themselves.',
        },
      ],
      workTitle: 'Selected work',
      workAll: 'All work',
      cols: { name: 'Name', company: 'Company', period: 'Period', title: 'Title', date: 'Date' },
      writingTitle: 'Writing',
      writingAll: 'All writing',
      contactTitle: 'Get in touch',
      contact: 'LinkedIn is the fastest way to reach me. Code and side projects are on GitHub.',
    },
    about: {
      title: 'About',
      bio: [
        "I'm an Analytics Engineer with 8+ years in data, most of them in finance. I started in BI consulting, went through a brokerage and a WealthTech in Berlin, and today I'm at P2P.org, a crypto staking company, where I'm rebuilding the financial reporting architecture together with the finance team.",
        "I've been programming since 2014. My technical degree in Informatics was heavy on the fundamentals: OOP, algorithms and data structures, code optimization, all in C/C++ and Java. Then I moved gradually into economics and finance, studying Economics at UFMG with a focus on quantitative methods, without leaving the tech side. That mix is probably why I usually end up in the middle: turning what finance needs into models, and explaining to finance why a number changed.",
        'The part of the job I like most is the one people tend to avoid: warehouses with years of legacy, models nobody owns, and figuring out what can be deleted without breaking anything.',
        'Based in Brazil (UTC-3), working remotely with European teams since 2023.',
      ],
      photoAlt: 'Portrait of Ilmer Oliveira',
      expTitle: 'Experience',
      expHint: "Click a role to see what I did there.",
      jobs: [
        { role: 'Analytics Engineer', org: 'P2P.org', period: '2025 – now', place: 'Remote', note: 'Finance data: month-end close, reporting architecture, master data.', intro: "Analytics Engineer on the data team, working mostly with Finance.", bullets: ["Cut month-end close from a week to two days in my first quarter. With the new reporting architecture it now takes less than one day.", "Working with the finance team to rebuild financial reporting from source data to the final numbers. Wrote the target architecture and I'm rolling it out in phases, starting with moving the finance mart to production.", "Cut about USD 60k a year in data costs: changed how tables are stored and processed together with the data engineering team, and refactored models to stop rebuilding expensive things nobody needed.", "Built in-house tools on AppSheets that give the team one source of truth for master data, first for client reporting and now for finance. A manual process that took over a month now runs in minutes, and we dropped a paid software subscription.", "Own about 10 gold and 30+ silver/bronze dbt models, including the ones behind month-end close, referral revenue share and rebates.", "Use LLMs as part of the job: cleaning up legacy models and lineage, generating dbt tests and docs, AI code review on pull requests, refactoring at scale, LLM steps inside the master data pipeline, and getting data ready for text-to-SQL."], stack: "BigQuery, dbt, Airflow, GitHub, Superset, AppSheets" },
        { role: 'Analytics Engineer', org: 'LIQID', period: 'Dec 2023 – May 2025', place: 'Berlin, remote', note: 'Owned the data stack and the reporting behind the Private Equity NXT launch.', intro: "Digital wealth manager in Berlin, with €4B+ in assets under management and 12,000+ clients.", bullets: ["Took over the data stack: ETL and orchestration with Python, Docker, Airflow and dbt on BigQuery.", "Owned the reporting behind the Private Equity NXT launch. Built the models from scratch, from the raw layer up to the reports used by the C-level, tracking about €120M in allocations.", "Owned about ten models fed by external APIs: Google Search, Google Ads, Meta Ads, LinkedIn, HubSpot and QPlix.", "Built the attribution models and the acquisition, retention and LTV metrics used by Product, Marketing, Finance and Operations.", "Built Looker dashboards and explores so business teams could answer their own questions without opening a ticket."], stack: "BigQuery, dbt, Airflow, Docker, Python, Looker" },
        { role: 'Data Analyst', org: 'Hotmart', period: 'Oct 2022 – Dec 2023', place: 'Belo Horizonte', note: 'Adoption data for the new creator platform, built with the product engineers.', intro: "One of the largest creator economy platforms in Latin America. I was on the Core Product team, in the vertical focused on creators.", bullets: ["Mapped and modeled the adoption data for the new creator platform (opt-in, engagement, retention and profitability) together with the front-end and back-end engineers.", "Built the ETL behind those metrics, modeling new sources in PostgreSQL and MongoDB and plugging them into the analytics layer.", "Added validation and monitoring checks to the reporting pipelines.", "Built an RFM analysis to segment creators, and worked on integrations with the platform's webhooks.", "Used user journey data to find where users got stuck, and built the forecasts used in product planning."], stack: "PostgreSQL, MongoDB, SQL, Python" },
        { role: 'Trainee, then Financial Data Analyst', org: 'Valor Investimentos', period: 'Mar 2021 – Oct 2022', place: 'Belo Horizonte', note: 'Automation on the trading desk and pair-trade monitoring in R.', intro: "Brazilian brokerage. I started as a trainee on the equity trading desk and moved into data from there.", bullets: ["Executed orders for stocks, derivatives and funds, and started bringing data into the desk's routine.", "Automated manual steps in order execution, which cut errors on the trading desk.", "Built a supervised model to match financial products to client segments.", "Monitored long & short pair trades with cointegration models in R.", "Built Power BI visuals for client presentations."], stack: "R, Power BI" },
        { role: 'Intern, then BI Analyst', org: 'IN3 Inteligência de Mercado', period: 'Aug 2018 – Mar 2021', place: 'Belo Horizonte', note: 'ETL, star schemas and Power BI for clients in industry, healthcare and retail.', intro: "BI consultancy. I joined as an intern in 2018 and became a BI Analyst.", bullets: ["Built ETL pipelines in SQL, Python and Power Query.", "Modeled star schemas and built Power BI reports for clients in industry, healthcare and retail.", "Worked directly with clients, presenting the KPIs behind their reports."], stack: "SQL, Python, Power Query M, Power BI" },
      ],
      eduTitle: 'Education',
      edu: [
        { t: 'Bachelor of Economics', s: 'Universidade Federal de Minas Gerais (UFMG), focus on quantitative methods', period: '2017 – 2021' },
        { t: 'Technical degree in Informatics', s: 'UFMG Technical College', period: '2014 – 2016' },
      ],
      langTitle: 'Languages',
      langs: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'C1' },
        { name: 'Spanish', level: 'B2' },
        { name: 'German', level: 'A2' },
      ],
    },
    footer: { language: 'Language', englishOnly: '' },
    notFound: { title: 'Page not found', body: "This page doesn't exist, or it moved when the site was rebuilt.", back: 'Go to the home page' },
  },

  pt: {
    meta: {
      description:
        'Ilmer Oliveira, Analytics Engineer. Dados financeiros, dbt e BigQuery, saneamento de warehouses legados. No Brasil, trabalhando remoto.',
    },
    nav: { writing: 'Artigos', work: 'Projetos', about: 'Sobre', home: 'Início' },
    home: {
      h1: 'Desenho data marts financeiros e arrumo os warehouses em que eles rodam.',
      lead: 'Analytics Engineer com mais de 8 anos em dados, a maior parte em finanças: uma corretora no Brasil, uma gestora de patrimônio em Berlim e hoje a P2P.org, uma empresa de staking de cripto. No dia a dia, isso quer dizer dbt, BigQuery, Airflow e Python.',
      lineage: ['Fontes cruas', 'Staging', 'Marts', 'O número que o financeiro assina'],
      lineageLabel: 'Das fontes cruas, passando por staging e marts, até o número que o financeiro assina',
      doingTitle: 'O que eu acabo fazendo',
      doing: [
        { t: 'Reporting financeiro', d: 'Modelos que levam o financeiro dos dados de origem até os números que ele reporta, e um fechamento do mês que não consome uma semana.' },
        { t: 'Saneamento de legado', d: 'Warehouses com anos de histórico e modelos sem dono. Descobrir o que ainda é usado, o que pode sair, e apagar sem quebrar nada.' },
        { t: 'Dados mestres', d: 'Uma fonte única para os dados de referência sobre os quais todo mundo discorda, com histórico completo de mudanças, feita para o time de negócio manter sozinho.' },
      ],
      workTitle: 'Projetos selecionados',
      workAll: 'Todos os projetos',
      cols: { name: 'Nome', company: 'Empresa', period: 'Período', title: 'Título', date: 'Data' },
      writingTitle: 'Artigos',
      writingAll: 'Todos os artigos',
      contactTitle: 'Contato',
      contact: 'O LinkedIn é o jeito mais rápido de falar comigo. Código e projetos paralelos ficam no GitHub.',
    },
    about: {
      title: 'Sobre',
      bio: [
        'Sou Analytics Engineer com mais de 8 anos em dados, a maior parte em finanças. Comecei em consultoria de BI, passei por uma corretora e por uma WealthTech em Berlim, e hoje estou na P2P.org, uma empresa de staking de cripto, onde estou refazendo a arquitetura de reporting financeiro junto com o time de finanças.',
        'Programo desde 2014. Meu técnico em Informática foi pesado em fundamentos: orientação a objetos, algoritmos e estruturas de dados, otimização de código, tudo em C/C++ e Java. Depois fui migrando aos poucos para economia e finanças, cursando Economia na UFMG com ênfase em métodos quantitativos, sem sair do lado técnico. Essa mistura provavelmente explica por que costumo ficar no meio do caminho: transformando o que o financeiro precisa em modelos, e explicando para o financeiro por que um número mudou.',
        'A parte do trabalho de que mais gosto é a que as pessoas costumam evitar: warehouses com anos de legado, modelos sem dono, e descobrir o que pode ser apagado sem quebrar nada.',
        'Moro no Brasil (UTC-3) e trabalho remoto com times europeus desde 2023.',
      ],
      photoAlt: 'Retrato de Ilmer Oliveira',
      expTitle: 'Experiência',
      expHint: "Clique em um cargo para ver o que eu fiz lá.",
      jobs: [
        { role: 'Analytics Engineer', org: 'P2P.org', period: '2025 – hoje', place: 'Remoto', note: 'Dados financeiros: fechamento do mês, arquitetura de reporting, dados mestres.', intro: "Analytics Engineer no time de dados, trabalhando principalmente com Finanças.", bullets: ["Reduzi o fechamento do mês de uma semana para dois dias no meu primeiro trimestre. Com a nova arquitetura de reporting, hoje ele leva menos de um dia.", "Estou refazendo o reporting financeiro junto com o time de finanças, dos dados de origem até os números finais. Escrevi a arquitetura-alvo e estou implantando em fases, começando pela migração do finance mart para produção.", "Cortei cerca de USD 60 mil por ano em custos de dados: mudamos a forma de armazenar e processar as tabelas junto com o time de engenharia de dados, e refatorei modelos para parar de reconstruir coisas caras que ninguém usava.", "Construí ferramentas internas no AppSheets que dão ao time uma fonte única para os dados mestres, primeiro para o reporting de clientes e agora para o financeiro. Um processo manual que levava mais de um mês hoje roda em minutos, e cancelamos a assinatura de um software pago.", "Sou responsável por cerca de 10 modelos gold e mais de 30 silver/bronze no dbt, incluindo os do fechamento do mês, do revenue share de indicação e dos rebates.", "Uso LLMs no trabalho: limpeza de modelos legados e de linhagem, geração de testes e documentação no dbt, code review com IA nos pull requests, refatoração em escala, etapas com LLM dentro do pipeline de dados mestres e preparação dos dados para text-to-SQL."], stack: "BigQuery, dbt, Airflow, GitHub, Superset, AppSheets" },
        { role: 'Analytics Engineer', org: 'LIQID', period: 'dez 2023 – mai 2025', place: 'Berlim, remoto', note: 'Responsável pelo stack de dados e pelo reporting do lançamento do Private Equity NXT.', intro: "Gestora de patrimônio digital em Berlim, com mais de €4 bi sob gestão e mais de 12 mil clientes.", bullets: ["Assumi o stack de dados: ETL e orquestração com Python, Docker, Airflow e dbt no BigQuery.", "Fui responsável pelo reporting do lançamento do Private Equity NXT. Construí os modelos do zero, da camada crua até os relatórios usados pela diretoria, acompanhando cerca de €120 mi em alocações.", "Fui responsável por cerca de dez modelos alimentados por APIs externas: Google Search, Google Ads, Meta Ads, LinkedIn, HubSpot e QPlix.", "Construí os modelos de atribuição e as métricas de aquisição, retenção e LTV usadas por Produto, Marketing, Finanças e Operações.", "Construí dashboards e explores no Looker para que os times de negócio respondessem as próprias perguntas sem abrir chamado."], stack: "BigQuery, dbt, Airflow, Docker, Python, Looker" },
        { role: 'Analista de Dados', org: 'Hotmart', period: 'out 2022 – dez 2023', place: 'Belo Horizonte', note: 'Dados de adoção da nova plataforma para creators, junto com os engenheiros de produto.', intro: "Uma das maiores plataformas da economia dos criadores na América Latina. Eu estava no time de Core Product, na vertical de creators.", bullets: ["Mapeei e modelei os dados de adoção da nova plataforma para creators (opt-in, engajamento, retenção e rentabilidade) junto com os engenheiros de front-end e back-end.", "Construí o ETL por trás dessas métricas, modelando novas fontes em PostgreSQL e MongoDB e conectando-as à camada analítica.", "Adicionei checagens de validação e monitoramento aos pipelines de reporting.", "Fiz uma análise RFM para segmentar os creators e trabalhei nas integrações com os webhooks da plataforma.", "Usei dados da jornada do usuário para achar onde as pessoas travavam, e construí as projeções usadas no planejamento de produto."], stack: "PostgreSQL, MongoDB, SQL, Python" },
        { role: 'Trainee, depois Analista de Dados Financeiros', org: 'Valor Investimentos', period: 'mar 2021 – out 2022', place: 'Belo Horizonte', note: 'Automação na mesa de operações e monitoramento de long & short em R.', intro: "Corretora brasileira. Comecei como trainee na mesa de renda variável e fui migrando para dados a partir dali.", bullets: ["Executei ordens de ações, derivativos e fundos, e comecei a trazer dados para a rotina da mesa.", "Automatizei etapas manuais da execução de ordens, o que reduziu erros na mesa.", "Construí um modelo supervisionado para casar produtos financeiros com segmentos de clientes.", "Acompanhei operações de long & short com modelos de cointegração em R.", "Montei visuais em Power BI para as apresentações a clientes."], stack: "R, Power BI" },
        { role: 'Estagiário, depois Analista de BI', org: 'IN3 Inteligência de Mercado', period: 'ago 2018 – mar 2021', place: 'Belo Horizonte', note: 'ETL, modelos estrela e Power BI para clientes de indústria, saúde e varejo.', intro: "Consultoria de BI. Entrei como estagiário em 2018 e virei Analista de BI.", bullets: ["Construí pipelines de ETL em SQL, Python e Power Query.", "Modelei esquemas estrela e montei relatórios em Power BI para clientes de indústria, saúde e varejo.", "Trabalhei direto com os clientes, apresentando os KPIs por trás dos relatórios."], stack: "SQL, Python, Power Query M, Power BI" },
      ],
      eduTitle: 'Formação',
      edu: [
        { t: 'Bacharelado em Ciências Econômicas', s: 'Universidade Federal de Minas Gerais (UFMG), ênfase em métodos quantitativos', period: '2017 – 2021' },
        { t: 'Técnico em Informática', s: 'Colégio Técnico da UFMG', period: '2014 – 2016' },
      ],
      langTitle: 'Idiomas',
      langs: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'C1' },
        { name: 'Espanhol', level: 'B2' },
        { name: 'Alemão', level: 'A2' },
      ],
    },
    footer: { language: 'Idioma', englishOnly: 'Os artigos e projetos estão em inglês.' },
    notFound: { title: 'Página não encontrada', body: 'Esta página não existe, ou mudou de lugar quando o site foi refeito.', back: 'Ir para o início' },
  },

  es: {
    meta: {
      description:
        'Ilmer Oliveira, Analytics Engineer. Datos financieros, dbt y BigQuery, limpieza de data warehouses heredados. En Brasil, trabajando en remoto.',
    },
    nav: { writing: 'Artículos', work: 'Proyectos', about: 'Sobre mí', home: 'Inicio' },
    home: {
      h1: 'Diseño data marts financieros y ordeno los warehouses donde viven.',
      lead: 'Analytics Engineer con más de 8 años en datos, casi todos en finanzas: una corredora en Brasil, una gestora patrimonial en Berlín y ahora P2P.org, una empresa de staking de cripto. En el día a día, eso significa dbt, BigQuery, Airflow y Python.',
      lineage: ['Fuentes crudas', 'Staging', 'Marts', 'El número que finanzas firma'],
      lineageLabel: 'De las fuentes crudas, pasando por staging y marts, hasta el número que finanzas firma',
      doingTitle: 'Lo que suelo terminar haciendo',
      doing: [
        { t: 'Reporting financiero', d: 'Modelos que llevan a finanzas de los datos de origen a los números que reporta, y un cierre de mes que no se come una semana.' },
        { t: 'Limpieza de legado', d: 'Warehouses con años de historia y modelos sin dueño. Averiguar qué se sigue usando, qué puede irse, y borrarlo sin romper nada.' },
        { t: 'Datos maestros', d: 'Una fuente única para los datos de referencia sobre los que todos discuten, con historial completo de cambios, hecha para que el equipo de negocio la mantenga solo.' },
      ],
      workTitle: 'Proyectos seleccionados',
      workAll: 'Todos los proyectos',
      cols: { name: 'Nombre', company: 'Empresa', period: 'Periodo', title: 'Título', date: 'Fecha' },
      writingTitle: 'Artículos',
      writingAll: 'Todos los artículos',
      contactTitle: 'Contacto',
      contact: 'LinkedIn es la forma más rápida de contactarme. El código y los proyectos personales están en GitHub.',
    },
    about: {
      title: 'Sobre mí',
      bio: [
        'Soy Analytics Engineer con más de 8 años en datos, la mayoría en finanzas. Empecé en consultoría de BI, pasé por una corredora y por una WealthTech en Berlín, y hoy estoy en P2P.org, una empresa de staking de cripto, donde estoy rehaciendo la arquitectura de reporting financiero junto con el equipo de finanzas.',
        'Programo desde 2014. Mi título técnico en Informática fue fuerte en fundamentos: orientación a objetos, algoritmos y estructuras de datos, optimización de código, todo en C/C++ y Java. Después fui pasando poco a poco a la economía y las finanzas, estudiando Economía en la UFMG con énfasis en métodos cuantitativos, sin dejar el lado técnico. Esa mezcla probablemente explica por qué suelo quedar en el medio: convirtiendo lo que finanzas necesita en modelos, y explicándole a finanzas por qué cambió un número.',
        'La parte del trabajo que más me gusta es la que la gente suele evitar: warehouses con años de legado, modelos sin dueño, y descubrir qué se puede borrar sin romper nada.',
        'Vivo en Brasil (UTC-3) y trabajo en remoto con equipos europeos desde 2023.',
      ],
      photoAlt: 'Retrato de Ilmer Oliveira',
      expTitle: 'Experiencia',
      expHint: "Haz clic en un puesto para ver lo que hice allí.",
      jobs: [
        { role: 'Analytics Engineer', org: 'P2P.org', period: '2025 – hoy', place: 'Remoto', note: 'Datos financieros: cierre de mes, arquitectura de reporting, datos maestros.', intro: "Analytics Engineer en el equipo de datos, trabajando sobre todo con Finanzas.", bullets: ["Reduje el cierre de mes de una semana a dos días en mi primer trimestre. Con la nueva arquitectura de reporting, hoy lleva menos de un día.", "Estoy rehaciendo el reporting financiero junto con el equipo de finanzas, desde los datos de origen hasta los números finales. Escribí la arquitectura objetivo y la estoy implantando por fases, empezando por llevar el finance mart a producción.", "Recorté unos USD 60 mil al año en costes de datos: cambiamos cómo se almacenan y procesan las tablas junto con el equipo de ingeniería de datos, y refactoricé modelos para dejar de reconstruir cosas caras que nadie necesitaba.", "Construí herramientas internas en AppSheets que le dan al equipo una fuente única para los datos maestros, primero para el reporting de clientes y ahora para finanzas. Un proceso manual de más de un mes hoy corre en minutos, y cancelamos la suscripción a un software de pago.", "Soy responsable de unos 10 modelos gold y más de 30 silver/bronze en dbt, incluidos los del cierre de mes, el revenue share de referidos y los rebates.", "Uso LLMs en el trabajo: limpieza de modelos heredados y del lineage, generación de tests y documentación en dbt, code review con IA en los pull requests, refactorización a escala, pasos con LLM dentro del pipeline de datos maestros y preparación de los datos para text-to-SQL."], stack: "BigQuery, dbt, Airflow, GitHub, Superset, AppSheets" },
        { role: 'Analytics Engineer', org: 'LIQID', period: 'dic 2023 – may 2025', place: 'Berlín, remoto', note: 'Responsable del stack de datos y del reporting del lanzamiento de Private Equity NXT.', intro: "Gestora patrimonial digital en Berlín, con más de €4.000 millones bajo gestión y más de 12.000 clientes.", bullets: ["Me hice cargo del stack de datos: ETL y orquestación con Python, Docker, Airflow y dbt sobre BigQuery.", "Fui responsable del reporting del lanzamiento de Private Equity NXT. Construí los modelos desde cero, de la capa cruda a los informes que usaba la dirección, siguiendo unos €120 millones en asignaciones.", "Fui responsable de unos diez modelos alimentados por APIs externas: Google Search, Google Ads, Meta Ads, LinkedIn, HubSpot y QPlix.", "Construí los modelos de atribución y las métricas de adquisición, retención y LTV que usaban Producto, Marketing, Finanzas y Operaciones.", "Construí dashboards y explores en Looker para que los equipos de negocio respondieran sus propias preguntas sin abrir un ticket."], stack: "BigQuery, dbt, Airflow, Docker, Python, Looker" },
        { role: 'Analista de Datos', org: 'Hotmart', period: 'oct 2022 – dic 2023', place: 'Belo Horizonte', note: 'Datos de adopción de la nueva plataforma para creadores, junto con los ingenieros de producto.', intro: "Una de las mayores plataformas de la economía de creadores en América Latina. Estaba en el equipo de Core Product, en la vertical de creadores.", bullets: ["Mapeé y modelé los datos de adopción de la nueva plataforma para creadores (opt-in, engagement, retención y rentabilidad) junto con los ingenieros de front-end y back-end.", "Construí el ETL detrás de esas métricas, modelando nuevas fuentes en PostgreSQL y MongoDB y conectándolas a la capa analítica.", "Añadí controles de validación y monitorización a los pipelines de reporting.", "Hice un análisis RFM para segmentar a los creadores y trabajé en las integraciones con los webhooks de la plataforma.", "Usé datos del recorrido del usuario para encontrar dónde se atascaba la gente, y construí las proyecciones usadas en la planificación de producto."], stack: "PostgreSQL, MongoDB, SQL, Python" },
        { role: 'Trainee, luego Analista de Datos Financieros', org: 'Valor Investimentos', period: 'mar 2021 – oct 2022', place: 'Belo Horizonte', note: 'Automatización en la mesa de operaciones y seguimiento de pares long & short en R.', intro: "Corredora brasileña. Empecé como trainee en la mesa de renta variable y desde ahí me pasé a datos.", bullets: ["Ejecuté órdenes de acciones, derivados y fondos, y empecé a llevar datos a la rutina de la mesa.", "Automaticé pasos manuales en la ejecución de órdenes, lo que redujo errores en la mesa.", "Construí un modelo supervisado para emparejar productos financieros con segmentos de clientes.", "Seguí operaciones de pares long & short con modelos de cointegración en R.", "Preparé visuales en Power BI para las presentaciones a clientes."], stack: "R, Power BI" },
        { role: 'Becario, luego Analista de BI', org: 'IN3 Inteligência de Mercado', period: 'ago 2018 – mar 2021', place: 'Belo Horizonte', note: 'ETL, modelos estrella y Power BI para clientes de industria, salud y retail.', intro: "Consultora de BI. Entré como becario en 2018 y pasé a Analista de BI.", bullets: ["Construí pipelines de ETL en SQL, Python y Power Query.", "Modelé esquemas en estrella y preparé informes en Power BI para clientes de industria, salud y retail.", "Trabajé directamente con los clientes, presentando los KPIs detrás de sus informes."], stack: "SQL, Python, Power Query M, Power BI" },
      ],
      eduTitle: 'Formación',
      edu: [
        { t: 'Grado en Economía', s: 'Universidade Federal de Minas Gerais (UFMG), énfasis en métodos cuantitativos', period: '2017 – 2021' },
        { t: 'Técnico en Informática', s: 'Colegio Técnico de la UFMG', period: '2014 – 2016' },
      ],
      langTitle: 'Idiomas',
      langs: [
        { name: 'Portugués', level: 'Nativo' },
        { name: 'Inglés', level: 'C1' },
        { name: 'Español', level: 'B2' },
        { name: 'Alemán', level: 'A2' },
      ],
    },
    footer: { language: 'Idioma', englishOnly: 'Los artículos y proyectos están en inglés.' },
    notFound: { title: 'Página no encontrada', body: 'Esta página no existe, o cambió de lugar cuando se rehízo el sitio.', back: 'Ir al inicio' },
  },

  de: {
    meta: {
      description:
        'Ilmer Oliveira, Analytics Engineer. Finanzdaten, dbt und BigQuery, Aufräumen gewachsener Data Warehouses. In Brasilien, remote.',
    },
    nav: { writing: 'Artikel', work: 'Projekte', about: 'Über mich', home: 'Start' },
    home: {
      h1: 'Ich entwerfe Finanz-Data-Marts und räume die Warehouses auf, in denen sie liegen.',
      lead: 'Analytics Engineer mit über 8 Jahren in Daten, die meisten davon im Finanzbereich: ein Broker in Brasilien, ein Vermögensverwalter in Berlin und heute P2P.org, ein Krypto-Staking-Unternehmen. Im Alltag heißt das dbt, BigQuery, Airflow und Python.',
      lineage: ['Rohdaten', 'Staging', 'Marts', 'Die Zahl, die das Finance-Team freigibt'],
      lineageLabel: 'Von den Rohdaten über Staging und Marts bis zur Zahl, die das Finance-Team freigibt',
      doingTitle: 'Woran ich meistens arbeite',
      doing: [
        { t: 'Finanzreporting', d: 'Modelle, die das Finance-Team von den Quelldaten zu den berichteten Zahlen bringen, und ein Monatsabschluss, der keine Woche frisst.' },
        { t: 'Altlasten aufräumen', d: 'Warehouses mit jahrelanger Historie und Modellen ohne Verantwortliche. Herausfinden, was noch genutzt wird, was weg kann, und es löschen, ohne etwas kaputt zu machen.' },
        { t: 'Stammdaten', d: 'Eine einzige Quelle für die Referenzdaten, über die alle streiten, mit vollständiger Änderungshistorie, so gebaut, dass das Fachteam sie selbst pflegen kann.' },
      ],
      workTitle: 'Ausgewählte Projekte',
      workAll: 'Alle Projekte',
      cols: { name: 'Name', company: 'Firma', period: 'Zeitraum', title: 'Titel', date: 'Datum' },
      writingTitle: 'Artikel',
      writingAll: 'Alle Artikel',
      contactTitle: 'Kontakt',
      contact: 'Am schnellsten erreichen Sie mich über LinkedIn. Code und Nebenprojekte liegen auf GitHub.',
    },
    about: {
      title: 'Über mich',
      bio: [
        'Ich bin Analytics Engineer mit über 8 Jahren in Daten, die meisten davon im Finanzbereich. Angefangen habe ich in der BI-Beratung, danach kamen ein Broker und eine WealthTech in Berlin. Heute bin ich bei P2P.org, einem Krypto-Staking-Unternehmen, und baue dort zusammen mit dem Finance-Team die Architektur des Finanzreportings neu auf.',
        'Ich programmiere seit 2014. Meine technische Ausbildung in Informatik legte viel Wert auf Grundlagen: objektorientierte Programmierung, Algorithmen und Datenstrukturen, Code-Optimierung, alles in C/C++ und Java. Danach bin ich nach und nach in Richtung Volkswirtschaft und Finanzen gegangen und habe an der UFMG Volkswirtschaftslehre mit Schwerpunkt auf quantitativen Methoden studiert, ohne die technische Seite zu verlassen. Diese Mischung ist wohl der Grund, warum ich meistens in der Mitte lande: Ich übersetze, was das Finance-Team braucht, in Modelle, und erkläre dem Finance-Team, warum sich eine Zahl geändert hat.',
        'Am liebsten mag ich den Teil der Arbeit, den andere gern meiden: Warehouses mit jahrelangen Altlasten, Modelle ohne Verantwortliche, und herausfinden, was man löschen kann, ohne etwas kaputt zu machen.',
        'Ich lebe in Brasilien (UTC-3) und arbeite seit 2023 remote mit europäischen Teams.',
      ],
      photoAlt: 'Porträt von Ilmer Oliveira',
      expTitle: 'Berufserfahrung',
      expHint: "Klicken Sie auf eine Position, um zu sehen, was ich dort gemacht habe.",
      jobs: [
        { role: 'Analytics Engineer', org: 'P2P.org', period: '2025 – heute', place: 'Remote', note: 'Finanzdaten: Monatsabschluss, Reporting-Architektur, Stammdaten.', intro: "Analytics Engineer im Datenteam, vor allem für Finance.", bullets: ["Im ersten Quartal den Monatsabschluss von einer Woche auf zwei Tage verkürzt. Mit der neuen Reporting-Architektur dauert er heute weniger als einen Tag.", "Baue mit dem Finance-Team das Finanzreporting neu auf, von den Quelldaten bis zu den finalen Zahlen. Ich habe die Zielarchitektur geschrieben und führe sie schrittweise ein, angefangen mit dem Umzug des Finance Marts in die Produktion.", "Rund USD 60.000 pro Jahr an Datenkosten eingespart: gemeinsam mit dem Data-Engineering-Team geändert, wie Tabellen gespeichert und verarbeitet werden, und Modelle so refaktoriert, dass keine teuren Dinge mehr neu gebaut werden, die niemand braucht.", "Interne Tools auf AppSheets gebaut, die dem Team eine einzige Quelle für Stammdaten geben, zuerst für das Kundenreporting und jetzt für Finance. Ein manueller Prozess von über einem Monat läuft jetzt in Minuten, und ein kostenpflichtiges Software-Abo ist weggefallen.", "Verantwortlich für rund 10 Gold- und über 30 Silver/Bronze-Modelle in dbt, darunter die für den Monatsabschluss, Referral Revenue Share und Rebates.", "Nutze LLMs im Arbeitsalltag: Aufräumen von Altmodellen und Lineage, Erzeugen von dbt-Tests und -Dokumentation, KI-Code-Review in Pull Requests, Refactoring im großen Stil, LLM-Schritte in der Stammdaten-Pipeline und Daten bereit für Text-to-SQL."], stack: "BigQuery, dbt, Airflow, GitHub, Superset, AppSheets" },
        { role: 'Analytics Engineer', org: 'LIQID', period: 'Dez. 2023 – Mai 2025', place: 'Berlin, remote', note: 'Verantwortlich für den Data Stack und das Reporting zum Launch von Private Equity NXT.', intro: "Digitaler Vermögensverwalter in Berlin mit über 4 Mrd. € verwaltetem Vermögen und über 12.000 Kunden.", bullets: ["Den Data Stack übernommen: ETL und Orchestrierung mit Python, Docker, Airflow und dbt auf BigQuery.", "Verantwortlich für das Reporting zum Launch von Private Equity NXT. Die Modelle von Grund auf gebaut, von der Rohdatenschicht bis zu den Berichten für die Geschäftsführung, mit rund 120 Mio. € an Allokationen.", "Verantwortlich für rund zehn Modelle, die aus externen APIs gespeist werden: Google Search, Google Ads, Meta Ads, LinkedIn, HubSpot und QPlix.", "Die Attributionsmodelle sowie die Kennzahlen zu Akquise, Retention und LTV gebaut, die Product, Marketing, Finance und Operations nutzten.", "Looker-Dashboards und Explores gebaut, damit Fachteams ihre Fragen selbst beantworten konnten, ohne ein Ticket aufzumachen."], stack: "BigQuery, dbt, Airflow, Docker, Python, Looker" },
        { role: 'Data Analyst', org: 'Hotmart', period: 'Okt. 2022 – Dez. 2023', place: 'Belo Horizonte', note: 'Adoptionsdaten der neuen Creator-Plattform, zusammen mit den Produktentwicklern.', intro: "Eine der größten Creator-Economy-Plattformen Lateinamerikas. Ich war im Core-Product-Team, im Bereich für Creator.", bullets: ["Die Adoptionsdaten der neuen Creator-Plattform (Opt-in, Engagement, Retention und Profitabilität) zusammen mit den Front-End- und Back-End-Entwicklern erfasst und modelliert.", "Das ETL hinter diesen Kennzahlen gebaut, neue Quellen in PostgreSQL und MongoDB modelliert und an die Analytics-Schicht angebunden.", "Validierungs- und Monitoring-Checks in die Reporting-Pipelines eingebaut.", "Eine RFM-Analyse zur Segmentierung der Creator erstellt und an Integrationen mit den Webhooks der Plattform gearbeitet.", "Mit Daten zur User Journey herausgefunden, wo Nutzer hängen bleiben, und die Prognosen für die Produktplanung gebaut."], stack: "PostgreSQL, MongoDB, SQL, Python" },
        { role: 'Trainee, dann Financial Data Analyst', org: 'Valor Investimentos', period: 'März 2021 – Okt. 2022', place: 'Belo Horizonte', note: 'Automatisierung am Handelstisch und Überwachung von Long-Short-Paaren in R.', intro: "Brasilianischer Broker. Ich habe als Trainee am Aktienhandelstisch angefangen und bin von dort in die Daten gewechselt.", bullets: ["Orders für Aktien, Derivate und Fonds ausgeführt und begonnen, Daten in den Alltag am Handelstisch zu bringen.", "Manuelle Schritte in der Orderausführung automatisiert, was Fehler am Handelstisch reduziert hat.", "Ein überwachtes Modell gebaut, das Finanzprodukte Kundensegmenten zuordnet.", "Long-Short-Paare mit Kointegrationsmodellen in R überwacht.", "Power-BI-Visuals für Kundenpräsentationen erstellt."], stack: "R, Power BI" },
        { role: 'Praktikant, dann BI Analyst', org: 'IN3 Inteligência de Mercado', period: 'Aug. 2018 – März 2021', place: 'Belo Horizonte', note: 'ETL, Sternschemata und Power BI für Kunden aus Industrie, Gesundheit und Handel.', intro: "BI-Beratung. 2018 als Praktikant eingestiegen und BI Analyst geworden.", bullets: ["ETL-Pipelines in SQL, Python und Power Query gebaut.", "Sternschemata modelliert und Power-BI-Berichte für Kunden aus Industrie, Gesundheit und Handel erstellt.", "Direkt mit Kunden gearbeitet und die KPIs hinter ihren Berichten präsentiert."], stack: "SQL, Python, Power Query M, Power BI" },
      ],
      eduTitle: 'Ausbildung',
      edu: [
        { t: 'Bachelor in Volkswirtschaftslehre', s: 'Universidade Federal de Minas Gerais (UFMG), Schwerpunkt quantitative Methoden', period: '2017 – 2021' },
        { t: 'Technische Ausbildung in Informatik', s: 'Technisches Kolleg der UFMG', period: '2014 – 2016' },
      ],
      langTitle: 'Sprachen',
      langs: [
        { name: 'Portugiesisch', level: 'Muttersprache' },
        { name: 'Englisch', level: 'C1' },
        { name: 'Spanisch', level: 'B2' },
        { name: 'Deutsch', level: 'A2' },
      ],
    },
    footer: { language: 'Sprache', englishOnly: 'Artikel und Projekte sind auf Englisch.' },
    notFound: { title: 'Seite nicht gefunden', body: 'Diese Seite gibt es nicht, oder sie ist beim Umbau der Website umgezogen.', back: 'Zur Startseite' },
  },
};

/** URL prefix for a language: '' for English, '/pt' etc. otherwise. */
export const prefix = (lang: Lang) => (lang === defaultLang ? '' : `/${lang}`);

/** Pages that exist in every language. Anything else falls back to the language's home page. */
const translated = ['/', '/about/'];

export function pathFor(lang: Lang, currentPath: string): string {
  const clean = currentPath.replace(/^\/(pt|es|de)(?=\/|$)/, '') || '/';
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  const base = translated.includes(withSlash) ? withSlash : '/';
  return `${prefix(lang)}${base}`;
}
