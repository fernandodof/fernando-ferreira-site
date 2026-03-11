export type EntryType = "experience" | "education";

export interface ResumeEntry {
  type: EntryType;
  title: { en: string; "pt-BR": string };
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null; // null = present
  description: { en: string[]; "pt-BR": string[] };
}

export const resumeEntries: ResumeEntry[] = [
  // ── Experience ────────────────────────────────────────────────────────────
  {
    type: "experience",
    title: { en: "Staff Frontend Engineer", "pt-BR": "Staff Frontend Engineer" },
    organization: "Every Health (Via Jaya Tech)",
    location: "Cajazeiras, PB – Brazil",
    startDate: "Dec 2020",
    endDate: null,
    description: {
      en: [
        "Architected and built React component libraries from scratch within an NX monorepo, establishing scalable infrastructure that accelerated front-end delivery and enabled code reuse across multiple projects.",
        "Promoted from Senior Frontend Engineer to Staff Engineer in recognition of consistent technical leadership, innovation, and cross-functional impact on high-priority projects.",
        "Guided the development of a scalable design system that improved cross-team collaboration, strengthened UI consistency, and accelerated feature and product delivery.",
        "Improved user experience through A/B testing, boosting conversion rates by 2% to 35% across key customer segments.",
        "Developed a streamlined process that empowered product and marketing teams to create pages independently, eliminating the need for engineering involvement.",
      ],
      "pt-BR": [
        "Arquitetou e desenvolveu bibliotecas de componentes React do zero em um monorepo NX, criando infraestrutura escalável que acelerou a entrega de front-end e permitiu reuso de código entre múltiplos projetos.",
        "Promovido de Senior para Staff Frontend Engineer pelo reconhecimento de liderança técnica consistente, inovação e impacto cross-funcional em projetos de alta prioridade.",
        "Guiou o desenvolvimento de um design system escalável que melhorou a colaboração entre times, reforçou a consistência visual e acelerou a entrega de funcionalidades.",
        "Melhorou a experiência do usuário com testes A/B, aumentando as taxas de conversão de 2% a 35% em segmentos-chave.",
        "Desenvolveu um processo que permitiu aos times de produto e marketing criar páginas de forma independente, eliminando a necessidade de envolvimento da engenharia.",
      ],
    },
  },
  {
    type: "experience",
    title: { en: "Frontend Engineer", "pt-BR": "Frontend Engineer" },
    organization: "Betsson Group",
    location: "Ta'Xbiex, Malta",
    startDate: "Nov 2017",
    endDate: "Dec 2020",
    description: {
      en: [
        "Engineered and improved high-performance Angular apps for a global sports betting platform, enabling smooth user experiences across millions of devices.",
        "Contributed to UI features using WebSockets, ensuring code quality to enhance user engagement, system responsiveness, and overall performance.",
        "Facilitated the creation of a new desktop web application from the ground up while overseeing transition to a server-side rendering architecture.",
      ],
      "pt-BR": [
        "Desenvolveu e melhorou aplicações Angular de alto desempenho para uma plataforma global de apostas esportivas, com experiências fluidas em milhões de dispositivos.",
        "Contribuiu para funcionalidades de UI com WebSockets, garantindo qualidade de código para melhorar o engajamento e a responsividade do sistema.",
        "Liderou a criação de uma nova aplicação web desktop do zero e supervisionou a migração para uma arquitetura de renderização no servidor.",
      ],
    },
  },
  {
    type: "experience",
    title: { en: "Full Stack Developer", "pt-BR": "Desenvolvedor Full Stack" },
    organization: "Virtus",
    location: "Campina Grande, PB – Brazil",
    startDate: "Apr 2016",
    endDate: "Nov 2017",
    description: {
      en: [
        "Developed a marketing campaign platform with Angular and Java that automated email dispatch, real-time reporting, and analytics for enhanced campaign performance.",
        "Converted design concepts into fully functional, responsive web pages ensuring seamless user experience.",
        "Designed, developed, and maintained robust APIs to enhance application performance, improve data flow, and elevate integration capabilities.",
      ],
      "pt-BR": [
        "Desenvolveu uma plataforma de campanhas de marketing com Angular e Java que automatizou o envio de e-mails, relatórios em tempo real e analytics.",
        "Converteu conceitos de design em páginas web funcionais e responsivas, garantindo uma experiência de usuário fluida.",
        "Projetou, desenvolveu e manteve APIs robustas para melhorar o desempenho da aplicação e o fluxo de dados.",
      ],
    },
  },
  {
    type: "experience",
    title: { en: "Full Stack Developer", "pt-BR": "Desenvolvedor Full Stack" },
    organization: "Banco do Brasil (Via Stefanini)",
    location: "Campina Grande, PB – Brazil",
    startDate: "Jan 2014",
    endDate: "Nov 2014",
    description: {
      en: [
        "Upgraded internal banking systems with AngularJS and Java, boosting operational efficiency and reducing customer service response times.",
      ],
      "pt-BR": [
        "Modernizou sistemas internos bancários com AngularJS e Java, aumentando a eficiência operacional e reduzindo o tempo de resposta ao cliente.",
      ],
    },
  },

  // ── Education ─────────────────────────────────────────────────────────────
  {
    type: "education",
    title: {
      en: "Frontend Web Developer Nanodegree",
      "pt-BR": "Nanodegree em Desenvolvimento Web Front-end",
    },
    organization: "Udacity",
    location: "Online",
    startDate: "",
    endDate: "",
    description: { en: [], "pt-BR": [] },
  },
  {
    type: "education",
    title: {
      en: "Analysis & Systems Development",
      "pt-BR": "Análise e Desenvolvimento de Sistemas",
    },
    organization: "Federal Institute of Technology, Science & Education (IFCE)",
    location: "Brazil",
    startDate: "",
    endDate: "",
    description: { en: [], "pt-BR": [] },
  },
];
