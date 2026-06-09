/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Shield, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  Layers, 
  Award, 
  ArrowRight, 
  Check, 
  X, 
  Plus, 
  Minus, 
  FileText, 
  Flame, 
  Menu, 
  HelpCircle, 
  Maximize2,
  Lock,
  ChevronDown,
  Scale,
  Zap,
  Sparkle,
  Instagram,
  ExternalLink
} from "lucide-react";
import LaudosPortal from "./components/LaudosPortal";
import creatinaTub from "./assets/images/creatina_tub_1780796520936.png";
import eduardoDonzelli from "./assets/images/eduardo_donzelli_1780796534839-1.png";

// Interactive Dose Calculator Component to add elite visual engagement
function DoseCalculator() {
  const [weight, setWeight] = useState<number>(75);
  const [goal, setGoal] = useState<string>("performance"); // maintenance vs loading vs performance

  const calculateDose = () => {
    let base = weight * 0.07; // standard recommendation
    if (goal === "loading") {
      base = weight * 0.3; // loading phase
    }
    return base.toFixed(1);
  };

  const calculateWater = () => {
    return Math.round(weight * 35); // 35ml per kg
  };

  return (
    <div id="dose-calculator-widget" className="bg-[#141416] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-orenda-red/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
      
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-orenda-red/10 text-orenda-red p-2 rounded-lg">
          <Scale className="w-5 h-5" id="scale-icon" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-orenda-red font-bold">Cálculo Científico</span>
      </div>

      <h4 className="font-display text-xl font-bold text-white mb-2">Calculadora de Consumo Diário</h4>
      <p className="text-sm text-orenda-gray-medium mb-6">
        Insira seu peso para obter a dosagem ideal recomendada de creatina baseada em parâmetros químicos de assimilação celular.
      </p>

      {/* Weight Input slider */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-white/80">Seu Peso Corporal</span>
          <span className="font-mono text-lg font-bold text-orenda-red">{weight} kg</span>
        </div>
        
        <input 
          type="range" 
          min="45" 
          max="130" 
          value={weight} 
          onChange={(e) => setWeight(parseInt(e.target.value) || 75)}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orenda-red focus:outline-none"
        />
        <div className="flex justify-between text-[11px] text-orenda-gray-medium font-mono">
          <span>45 kg</span>
          <span>85 kg</span>
          <span>130 kg</span>
        </div>
      </div>

      {/* Goal Selecion */}
      <div className="mb-6">
        <label className="text-xs text-orenda-gray-medium uppercase tracking-wider mb-2 block">Protocolo de Uso</label>
        <div className="grid grid-cols-2 gap-2">
          <button 
            type="button"
            onClick={() => setGoal("performance")}
            className={`p-3 rounded-lg text-xs font-mono font-bold transition-all border ${
              goal === "performance" 
                ? "bg-orenda-red border-orenda-red text-white" 
                : "bg-white/5 border-white/5 text-orenda-gray-medium hover:border-white/10"
            }`}
          >
            Manutenção / Regular (0.07g/kg)
          </button>
          <button 
            type="button"
            onClick={() => setGoal("loading")}
            className={`p-3 rounded-lg text-xs font-mono font-bold transition-all border ${
              goal === "loading" 
                ? "bg-orenda-red border-orenda-red text-white" 
                : "bg-white/5 border-white/5 text-orenda-gray-medium hover:border-white/10"
            }`}
          >
            Estratégia Saturação (0.3g/kg)
          </button>
        </div>
      </div>

      {/* Calculated Result banner */}
      <div className="bg-black/40 border border-white/5 rounded-xl p-4 grid grid-cols-2 gap-4">
        <div>
          <span className="text-[10px] text-orenda-gray-medium uppercase block">Dosagem Diária</span>
          <span className="font-mono text-2xl font-bold text-white">{calculateDose()} <span className="text-xs text-orenda-red">g</span></span>
          <span className="text-[10px] text-orenda-gray-medium/80 block mt-1">Dissolver em água</span>
        </div>
        <div className="border-l border-white/10 pl-4">
          <span className="text-[10px] text-orenda-gray-medium uppercase block">Meta de Água recomendada</span>
          <span className="font-mono text-2xl font-bold text-white">{(calculateWater() / 1000).toFixed(1)} <span className="text-xs text-orenda-red">L</span></span>
          <span className="text-[10px] text-orenda-gray-medium/80 block mt-1">Ao longo do dia</span>
        </div>
      </div>

      {/* Chemical Assimilation Breakdown Guide */}
      <div className="mt-6 pt-5 border-t border-white/5 space-y-3.5 text-left">
        <h5 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Como funciona a assimilação celular?</h5>
        <div className="space-y-2">
          <p className="text-[11px] text-orenda-gray-medium leading-relaxed">
            1. <strong className="text-white/90">Fórmula de Saturação (0.3g/kg):</strong> Ingerir esta quantidade diária por 5 a 7 dias divide-se em 4 tomadas de 5g, maximizando a fosfocreatina muscular até 4 vezes mais rapidamente.
          </p>
          <p className="text-[11px] text-orenda-gray-medium leading-relaxed">
            2. <strong className="text-white/90">Manutenção Contínua (0.07g/kg):</strong> Garante a ressíntese contínua de ATP no treino, mantendo as reservas intracelulares totalmente carregadas.
          </p>
          <p className="text-[11px] text-orenda-gray-medium leading-relaxed">
            3. <strong className="text-white/90">Coeficiente Osmótico de Hidratação (35ml/kg):</strong> A reposição celular atrai moléculas de água de forma intramuscular (hipertrofia celular real), de onde provém a importância crítica de manter-se sob forte hidratação de L/dia.
          </p>
        </div>
      </div>

      <div className="mt-4 text-[10px] text-orenda-gray-medium/60 italic text-center">
        *Orientações baseadas em dados médios de metabolização. Consulte seu profissional de saúde.
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const menuItems = [
    { label: "Produto", id: "#produto" },
    { label: "Por que Orenda", id: "#por-que-orenda" },
    { label: "Dose Ideal", id: "#dose-calculator" },
    { label: "Como Usar", id: "#como-usar" },
    { label: "Laudos de Pureza", id: "#portaldelaudos" },
    { label: "Dúvidas", id: "#duvidas" },
    { label: "Conhecer Linha", id: "#conhecer-linha" }
  ];

  const packages = [
    {
      id: "150g",
      name: "Creatina Orenda Performance 150g",
      tagline: "Praticidade e foco para quem quer iniciar com precisão.",
      description: "Ideal para começar sua rotina com uma opção prática e acessível.",
      features: [
        "100% Pura Creatina Monohidratada",
        "Até 50 doses regulares",
        "Sabor neutro altamente solúvel",
        "Embalagem premium com lacre duplo",
        "Formulado sob supervisão química"
      ],
      whatsappLink: "https://wa.me/5516997457085?text=Ol%C3%A1%2C%20quero%20comprar%20a%20Creatina%20Orenda%20Performance%20150g.%20Pode%20me%20passar%20o%20valor%20e%20forma%20de%20pagamento%3F",
      buttonText: "Comprar 150g",
      popular: false
    },
    {
      id: "300g",
      name: "Creatina Orenda Performance 300g",
      tagline: "Melhor rendimento histórico para consistência total.",
      description: "Melhor opção para quem já usa creatina todos os dias e quer mais rendimento por pote.",
      features: [
        "100% Pura Creatina Monohidratada",
        "Até 100 doses diárias regulares",
        "Ideal para treinos focados em explosão",
        "Rendimento máximo por pote",
        "Suporte técnico incluso pelo WhatsApp",
        "Supervisão direta do Engenheiro Químico"
      ],
      whatsappLink: "https://wa.me/5516997457085?text=Ol%C3%A1%2C%20quero%20comprar%20a%20Creatina%20Orenda%20Performance%20300g.%20Pode%20me%20passar%20o%20valor%20e%20forma%20de%20pagamento%3F",
      buttonText: "Comprar 300g",
      popular: true
    },
    {
      id: "kit",
      name: "Kit Performance Orenda",
      tagline: "Combinação sob medida para atletas de performance.",
      description: "Creatina + outro suplemento da linha para montar uma rotina mais completa.",
      features: [
        "Pote Creatina (Peso a escolher)",
        "Combinação com linha de energia/foco",
        "Mentoria de dosagem para treinos",
        "Prioridade de suporte com Fundador",
        "Frete facilitado ou atendimento personalizado"
      ],
      whatsappLink: "https://wa.me/5516997457085?text=Ol%C3%A1%2C%20quero%20montar%20um%20Kit%20Performance%20com%20Creatina%20Orenda.%20Pode%20me%20ajudar%20a%20escolher%3F",
      buttonText: "Montar meu kit",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "A Creatina Orenda Performance realmente dá resultado?",
      answer: "Sim. A creatina é o suplemento mais estudado pela ciência esportiva mundial. O efeito de ganho de desempenho e aumento de força não ocorre imediatamente após tomar, mas sim de forma acumulativa conforme você mantém a constância do consumo diário, saturando seus estoques musculares de fosfocreatina."
    },
    {
      question: "Eu realmente preciso treinar pesado para poder tomar?",
      answer: "A Creatina serve como matéria-prima para a reciclagem do ATP (energia rápida). Portanto, ela se mostra mais eficiente em exercícios repetidos de curta duração e alta intensidade. Embora beneficie a cognição e a saúde muscular em geral, o foco principal é o ganho de rendimento real no treinamento físico."
    },
    {
      question: "Posso e devo tomar todos os dias, mesmo em dias de descanso?",
      answer: "Sim. O consumo de creatina deve ser diário e ininterrupto para manter os estoques musculares saturados. Em dias onde você não treina, basta consumir a mesma dose regular de manhã ou em qualquer horário de sua preferência junto de uma fonte de carboidratos para otimizar a absorção celular."
    },
    {
      question: "Por que escolher a Creatina Orenda e não uma de preço mais baixo?",
      answer: "A Orenda Performance foi fundada pelo Engenheiro Químico Eduardo Donzelli (Mestre em Ciências Exatas e especialista em fabricação). Diferente de marcas sem rosto que vendem commodities baratas ou misturas aditivadas, cada lote Orenda passa por supervisão técnica estrita de procedência da matéria-prima, assegurando que o pó no seu pote seja exclusivamente creatina de altíssima pureza, sem misturas."
    },
    {
      question: "Como faço para comprar e receber?",
      answer: "Nosso canal de atendimento oficial e especializado é o WhatsApp. Ao clicar nos botões de compra, você falará diretamente com nossa equipe. Isso permite um atendimento humano, seguro, onde você pode esclarecer todas as dúvidas sobre frete, prazos e métodos de pagamento."
    }
  ];

  return (
    <div className="min-h-screen bg-orenda-dark text-orenda-gray-light font-sans relative antialiased overflow-x-hidden selection:bg-orenda-red selection:text-white">
      {/* 1. Header Fixo — Foco Total em Conversão, Zero Distrações */}
      <header className="sticky top-0 z-50 bg-orenda-dark/95 backdrop-blur-md border-b border-white/5 py-4 transition-all" id="landing-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" id="header-logo-container">
            {/* Minimalist Tech Vector Logo */}
            <div className="w-8 h-8 rounded-lg bg-orenda-red flex items-center justify-center font-display font-black text-white text-lg tracking-wider" id="logo-badge">
              O
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-tight text-white leading-none text-base sm:text-lg">
                ORENDA <span className="text-orenda-red">PERFORMANCE</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-orenda-red leading-none mt-0.5 font-bold">
                100% PURA • SUPERVISÃO QUÍMICA
              </span>
            </div>
          </a>

          {/* Direct CTA Buttons representing Social Proof and Purchase channels */}
          <div className="flex items-center gap-2 sm:gap-4" id="header-ctas">
            <a 
              href="https://www.instagram.com/orendabiotech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-orenda-red/30 px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all"
              id="header-instagram-link"
            >
              <Instagram className="w-3.5 h-3.5 text-orenda-red font-bold" />
              <span className="hidden sm:inline">Siga no Instagram</span> <span className="text-[#ff474e] font-bold">@orendabiotech</span>
            </a>

            <a 
              href="https://wa.me/5516997457085?text=Olá,%20gostaria%20de%20garantir%20um%20lote%20especial%20da%20Creatina%20Orenda%20Performance!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orenda-red hover:bg-orenda-red-hover text-white px-4 py-2 sm:py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-orenda-red/20 border border-transparent active:scale-95 flex items-center gap-1"
              id="header-cta-btn"
            >
              <Flame className="w-3.5 h-3.5 fill-white hidden xs:inline" />
              <span>Comprar Agora</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-12 pb-20 md:py-28 overflow-hidden" id="hero">
        {/* Abstract Red Atmospheric Ambient Glow Background */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[80vw] h-[400px] bg-orenda-red/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[25%] right-[5%] w-[300px] h-[300px] bg-orenda-red/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Text details */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 flex flex-col text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 px-3 py-1.5 rounded-full" id="hero-tag">
                <Shield className="w-3.5 h-3.5 text-orenda-red" id="badge-shield" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/95 font-semibold">
                  DECISÃO SEGURA • RIGOR BIOMÉDICO E LAUDO DE PUREZA
                </span>
              </div>

              {/* Major Main Headline */}
              <h1 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05]" id="hero-title">
                Seu corpo absorve tudo o que você ingere. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff474e]">
                  Não coloque seus treinos e sua saúde na sorte.
                </span>
              </h1>

              {/* Subheadline and Claim */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-orenda-gray-light font-medium leading-relaxed max-w-2xl" id="hero-subheadline">
                  A Creatina Orenda Performance é desenvolvida sob rigorosa supervisão técnica de um engenheiro químico especialista. Zero maltodextrina, zero amido, zero aditivos ocultos. Apenas creatina monohidratada de altíssima pureza estrutural.
                </p>
                <div className="border-l-2 border-orenda-red pl-4 py-1" id="hero-support-box">
                  <p className="text-sm font-mono tracking-wider text-[#ff474e] uppercase font-bold" id="hero-support-text">
                    “Creatina você encontra em qualquer lugar. Confiança técnica, não.”
                  </p>
                </div>
              </div>

              {/* Dual Action & Social Trust Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2" id="hero-actions-container">
                <a 
                  href="https://wa.me/5516997457085?text=Olá,%20quero%20comprar%20a%20Creatina%20Orenda%20Performance.%20Quero%20aproveitar%20o%20lote%20especial%20com%20laudo%20de%2520pureza!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orenda-red hover:bg-orenda-red-hover text-white font-mono font-extrabold uppercase text-xs sm:text-sm tracking-widest px-8 py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-orenda-red/40 flex items-center justify-center gap-2 relative overflow-hidden group active:scale-98 shrink-0 min-w-[280px]"
                  id="hero-buy-btn"
                >
                  <Flame className="w-5 h-5 text-white fill-white group-hover:animate-bounce" />
                  <span>COMPRAR AGORA (GARANTIR LOTE)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a 
                    href="https://www.orendaperformance.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-mono font-bold text-xs tracking-widest px-5 py-4 sm:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
                    id="hero-visit-btn"
                  >
                    <span>VISITAR SITE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-orenda-gray-medium" />
                  </a>

                  <a 
                    href="https://www.instagram.com/orendabiotech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-gradient-to-r from-purple-900/40 to-pink-900/40 hover:from-purple-800/50 hover:to-pink-800/50 text-white border border-white/10 hover:border-[#ff474e]/40 font-mono font-bold text-xs tracking-widest px-5 py-4 sm:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
                    id="hero-instagram-btn"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>@ORENDABIOTECH</span>
                  </a>
                </div>
              </div>

              {/* Key Brand Signals below CTA Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5" id="hero-badges-row">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orenda-red"></div>
                  <span className="text-xs font-mono text-white/90">Monohidratada 100% Pura</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orenda-red"></div>
                  <span className="text-xs font-mono text-white/90">Laudos de Pureza Ativos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orenda-red"></div>
                  <span className="text-xs font-mono text-white/90">Engenharia Química</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orenda-red"></div>
                  <span className="text-xs font-mono text-white/90">Origem Totalmente Segura</span>
                </div>
              </div>
            </div>

            {/* Premium product render with layout container */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative group max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full" id="hero-image-frame">
                {/* Visual backlighting halo */}
                <div className="absolute inset-0 bg-gradient-to-t from-orenda-red/45 to-transparent blur-[120px] opacity-75 rounded-full scale-110 pointer-events-none"></div>
                
                {/* Rounded dark technical platform card */}
                <div className="relative bg-gradient-to-tr from-[#16161a] to-[#22222a] p-6 sm:p-8 rounded-3xl border border-white/15 hover:border-orenda-red/30 shadow-[0_0_50px_rgba(255,71,78,0.15)] transition-all duration-500 overflow-hidden self-center w-full">
                  <img 
                    src={creatinaTub} 
                    alt="Pote de Creatina Orenda Performance de Altíssima Qualidade" 
                    className="w-full h-auto object-cover rounded-2xl relative z-10 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    id="hero-creatina-image"
                  />
                  
                  {/* Floating performance stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20 flex items-center justify-between" id="hero-image-overlay">
                    <div>
                      <span className="text-[10px] font-mono text-orenda-red tracking-wider uppercase font-bold">Concentração</span>
                      <p className="text-lg font-display font-extrabold text-white leading-none">100% PURA</p>
                    </div>
                    <div className="h-8 w-px bg-white/15"></div>
                    <div>
                      <span className="text-[10px] font-mono text-orenda-red tracking-wider uppercase font-bold">Lote Especial</span>
                      <p className="text-lg font-display font-extrabold text-white leading-none">LIMITADO</p>
                    </div>
                    <div className="h-8 w-px bg-white/15"></div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-orenda-red tracking-wider uppercase font-bold">Procedência</span>
                      <p className="text-lg font-display font-semibold text-white leading-none">SUPERVISADA</p>
                    </div>
                  </div>
                </div>

                {/* Floating micro badges around the jar frame */}
                <div className="absolute -top-4 -right-4 bg-orenda-red text-white p-3 rounded-2xl font-mono text-center shadow-lg transform rotate-6 z-20 border border-white/10 border-dashed" id="glow-badge">
                  <p className="text-xs font-black uppercase">Pureza</p>
                  <p className="text-[10px] tracking-tight">Sob Laudo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção de Dor */}
      <section className="py-20 md:py-28 bg-orenda-graphite relative border-y border-white/5" id="por-que-orenda">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Central Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="font-mono text-xs text-orenda-red uppercase tracking-[0.2em] font-bold">A Realidade do Mercado</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight" id="section-dor-title">
              O mercado está inundado de marcas genéricas. <br />
              <span className="text-orenda-red">Mas você sabe o que realmente vai dentro do seu corpo?</span>
            </h2>
            <p className="text-base sm:text-lg text-orenda-gray-medium leading-relaxed" id="section-dor-text">
              Qualquer marca consegue criar um rótulo chamativo no Instagram. No entanto, por trás de preços baixos demais, escondem-se misturas indesejadas (como amido e maltodextrina), ausência de controle sanitário e laudos laboratoriais duvidosos. Ingerir suplementação é lidar diretamente com a sua biologia celular. Nós transformamos o invisível em decisão segura.
            </p>
          </div>

          {/* Side-by-side Comparison Matrix (Pain vs Solution) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 pt-2" id="comparison-matrix">
            {/* Common Market Pain points */}
            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden" id="common-market-pain">
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-white/5 border-b border-l border-white/10 rounded-bl-xl font-mono text-[9px] uppercase text-white/45 tracking-widest font-semibold">Mercado Comum</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                O Perigo Oculto do Baixo Custo
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                Marcas genéricas focam apenas em disputar centavos sacrificando a pureza. Insumos industriais sem refino adequado, procedência asiática desconhecida e fracionamento em locais sem supervisão profissional.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50"><strong className="text-white/80">Adulteradores Ocultos:</strong> Misturas com Maltodextrina ou amido para render o pote, causando picos glicêmicos indesejados e distensão abdominal.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50"><strong className="text-white/80">Ausência de Laudos:</strong> Marcas que se escondem de fiscalização, ou que mostram laudos de laboratório duplicados de anos atrás.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50"><strong className="text-white/80">Metais Pesados e Impurezas:</strong> Processos industriais rudimentares sem validação molecular, expondo os consumidores a substâncias nocivas.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50"><strong className="text-white/80">Falta de Rosto Técnico:</strong> Donos de marca que de fato apenas terceirizam o produto e de modo algum entendem de bioquímica ou refino industrial.</p>
                </div>
              </div>
            </div>

            {/* Orenda Standard Solution */}
            <div className="bg-gradient-to-br from-[#1c1214] to-[#121215] border border-orenda-red/30 rounded-2xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden shadow-2xl" id="orenda-standard-solution">
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-orenda-red/20 border-b border-l border-orenda-red/30 rounded-bl-xl font-mono text-[9px] uppercase text-[#ff474e] tracking-widest font-extrabold">Padrão Orenda</div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orenda-red animate-ping"></span>
                A Certeza do Controle Químico
              </h3>
              <p className="text-xs sm:text-sm text-[#ff474e] leading-relaxed font-bold">
                Assinado sob supervisão direta de Eduardo Donzelli (Engenheiro Químico e Mestre em Ciências Exatas). Cada lote é periciado sob rigorosos critérios científicos.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff474e] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/80"><strong className="text-white">100% Pura e Monohidratada:</strong> Sem diluentes, sem adição oculta de carboidratos. Pureza química real e biodisponibilidade muscular máxima.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff474e] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/80"><strong className="text-white">Rastreamento Vital por Laudos:</strong> Portal de laudos atualizado frequentemente. O código no seu pote é a porta para o laudo preciso do lote.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff474e] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/80"><strong className="text-white">Filtro Bioquímico Rigoroso:</strong> Prevenção ativa de subprodutos indesejados (como dicianodiamida), assegurando sua saúde renal de longo prazo.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#ff474e] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/80"><strong className="text-white">Garantia Científica:</strong> Uma marca nascida da engenharia, formulada por cientistas exatos, para quem leva o corpo e os resultados a sério.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-10 max-w-2xl mx-auto" id="dor-middle-banner">
            <p className="text-xs font-mono text-orenda-red uppercase font-bold tracking-wider">Como Fazemos a Diferença:</p>
            <p className="text-sm text-orenda-gray-light mt-1">Conheça os 4 pilares inegociáveis que estabelecem o Padrão Orenda Performance:</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="dor-cards-grid">
            
            {/* Card 1: Procedência */}
            <div className="bg-[#1a1a1d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orenda-red/30 transition-all group animate-fade-in" id="dor-card-procedencia">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white font-mono font-bold group-hover:bg-orenda-red/10 group-hover:text-orenda-red transition-all">
                  01
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-orenda-red transition-colors">Laudo de Pureza Real</h3>
                <p className="text-sm text-orenda-gray-medium leading-relaxed">
                  Loteamento com absoluto controle cromatográfico. Você sabe exatamente a procedência da matéria-prima, eliminando qualquer risco de alteração estrutural ou adulteração de lote.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#ff474e] tracking-wider uppercase font-semibold">100% RASTREADO</div>
            </div>

            {/* Card 2: Clareza */}
            <div className="bg-[#1a1a1d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orenda-red/30 transition-all group" id="dor-card-clareza">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white font-mono font-bold group-hover:bg-orenda-red/10 group-hover:text-orenda-red transition-all">
                  02
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-orenda-red transition-colors">Zero Aditivos Ocultos</h3>
                <p className="text-sm text-orenda-gray-medium leading-relaxed">
                  Sem adição de carboidratos baratos ou agentes espessantes que causam picos glicêmicos ou distensão abdominal. Apenas creatina monohidratada de altíssima absorção.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#ff474e] tracking-wider uppercase font-semibold font-bold">ZERO CARBOIDRATOS</div>
            </div>

            {/* Card 3: Atendimento humano */}
            <div className="bg-[#1a1a1d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orenda-red/30 transition-all group" id="dor-card-humanidade">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white font-mono font-bold group-hover:bg-orenda-red/10 group-hover:text-orenda-red transition-all">
                  03
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-orenda-red transition-colors">Canal de Atendimento Humano</h3>
                <p className="text-sm text-orenda-gray-medium leading-relaxed">
                  Sem robôs automatizados de SAC ou FAQs frios. Damos mentoria direta no WhatsApp para você sanar suas dúvidas sobre dosagem, horários e sinergia de suplementos.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#ff474e] tracking-wider uppercase font-semibold">SUPORTE ADVISORY</div>
            </div>

            {/* Card 4: Autoridade técnica */}
            <div className="bg-[#1a1a1d] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orenda-red/30 transition-all group" id="dor-card-autoridade">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white font-mono font-bold group-hover:bg-orenda-red/10 group-hover:text-orenda-red transition-all">
                  04
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-orenda-red transition-colors">Decisão Certificada</h3>
                <p className="text-sm text-orenda-gray-medium leading-relaxed">
                  Nossos lotes são controlados e analisados minuciosamente por engenharia química industrial de ponta. Nada é deixado ao acaso quando se trata da sua saúde.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#ff474e] tracking-wider uppercase font-semibold">CHIEF CHEMIST CONTROL</div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Seção Autoridade - Founder Spotlight */}
      <section className="py-20 md:py-28 bg-[#0e0e10] relative overflow-hidden" id="sobre-o-fundador">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orenda-red/5 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Professional Founder portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative group max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full" id="founder-image-frame">
                {/* Red outline hover accent effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orenda-red to-[#ff474e] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                
                <div className="relative bg-[#16161a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl w-full">
                  <img 
                    src={eduardoDonzelli} 
                    alt="Eduardo Donzelli - Fundador e Especialista Químico Orenda Performance" 
                    className="w-full h-auto object-cover rounded-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id="founder-image"
                  />
                  
                  {/* Image info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 sm:p-8 z-20 text-left">
                    <p className="font-display text-xl sm:text-2xl font-black text-white">Eduardo Donzelli</p>
                    <p className="text-xs sm:text-sm text-orenda-red font-mono font-semibold tracking-wide">Engenheiro Químico &amp; Mestre em Ciências Exatas (Área de Química)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Credentials details and vision */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 flex flex-col text-left">
              <div className="space-y-3">
                <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold">Produção e Conhecimento</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight" id="founder-title">
                  Criada com visão técnica. <br />
                  <span className="text-[#ff474e]">Não por modinha de rede social.</span>
                </h2>
              </div>

              <div className="space-y-4 text-orenda-gray-light text-base sm:text-lg leading-relaxed">
                <p>
                  A <strong className="text-white font-bold">Orenda Performance</strong> é conduzida de perto por <strong className="text-white font-bold">Eduardo Donzelli</strong>, engenheiro químico e mestre em ciências exatas (área da química), com atuação direta no desenvolvimento, produção e posicionamento técnico-científico de suplementos alimentares de alta performance.
                </p>
                <p className="text-orenda-gray-medium text-sm sm:text-base">
                  Isso muda tudo: no lugar de apenas revender insumos terceirizados genéricos sem controle de laudo técnico, cada passo do design à testagem de nossos produtos recebe a curadoria química de quem conhece formulação de ponta de maneira profunda e rigorosa.
                </p>
              </div>

              {/* Founder quote bubble */}
              <div className="bg-[#1a1a1d] border-l-4 border-orenda-red p-6 rounded-r-xl relative" id="founder-quote-box">
                <p className="font-display text-base sm:text-lg text-white font-bold tracking-wide italic">
                  “Você não está comprando apenas creatina. Está comprando confiança técnica.”
                </p>
                <p className="text-xs font-mono text-orenda-red mt-2">— Eduardo Donzelli, Fundador</p>
              </div>

              {/* Mini technical credentials breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-white/5" id="founder-credentials-grid">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orenda-red shrink-0" id="cred-award-1" />
                  <div>
                    <span className="text-[10px] text-orenda-gray-medium font-mono uppercase block">Formação</span>
                    <span className="text-xs font-bold text-white leading-tight">Engenheiro Químico</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orenda-red shrink-0" id="cred-award-2" />
                  <div>
                    <span className="text-[10px] text-orenda-gray-medium font-mono uppercase block">Titulação</span>
                    <span className="text-xs font-bold text-white leading-tight">Mestre Ciências Exatas</span>
                    <span className="text-[9px] text-[#ff474e] block font-semibold leading-none mt-0.5">Área de Química</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                  <Award className="w-5 h-5 text-orenda-red shrink-0" id="cred-award-3" />
                  <div>
                    <span className="text-[10px] text-orenda-gray-medium font-mono uppercase block">Lotes</span>
                    <span className="text-xs font-bold text-white leading-tight">100% Supervisionados</span>
                  </div>
                </div>
              </div>

              {/* Direct Social connection CTA */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" id="founder-social-ctas">
                <a 
                  href="https://www.instagram.com/orendabiotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-orenda-red/30 px-6 py-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all duration-300"
                  id="founder-instagram-btn"
                >
                  <Instagram className="w-4 h-4 text-[#ff474e]" />
                  <span>Siga @orendabiotech no Instagram</span>
                </a>
                
                <a 
                  href="https://wa.me/5516997457085?text=Olá,%20tenho%20interesse%20na%20Creatina%20Orenda%20Performance%20supervisionada%20por%20você!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orenda-red hover:bg-orenda-red-hover text-white px-6 py-4 rounded-xl text-xs font-mono font-extrabold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 transition-all duration-300"
                  id="founder-buy-btn"
                >
                  <Flame className="w-4 h-4 text-white fill-white" />
                  <span>Garantir Lote de Pureza</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Seção Produto - Details and Calculator widget */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] border-t border-white/5" id="produto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Product Specifications and Bullet Benefits */}
            <div className="lg:col-span-7 space-y-8 flex flex-col text-left">
              <div className="space-y-4">
                <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold">Apoio e Ciência</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight" id="produto-section-title">
                  A Creatina Orenda Performance
                </h2>
                <p className="text-base sm:text-lg text-orenda-gray-medium leading-relaxed" id="produto-section-text">
                  A Creatina Orenda Performance é um suplemento alimentar puro em pó à base de creatina monohidratada premium, desenvolvido para auxiliar diretamente na melhora da hidratação celular e renovação curta de energia de explosão.
                </p>
              </div>

              {/* Benefits visual breakdown */}
              <div className="space-y-4" id="produto-benefits-list">
                
                {/* Bullet 1 */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all">
                  <div className="bg-orenda-red/10 text-orenda-red p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">Aumento do Desempenho Físico</h4>
                    <p className="text-xs text-orenda-gray-medium">
                      Auxilia no aumento do desempenho físico durante exercícios repetidos de curta duração e alta intensidade. (Consumo diário recomendado).
                    </p>
                  </div>
                </div>

                {/* Bullet 2 */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all">
                  <div className="bg-orenda-red/10 text-orenda-red p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">Extrema Praticidade Diária</h4>
                    <p className="text-xs text-orenda-gray-medium">
                      Rápida dissolução, fácil de ingerir e de mensurar. Perfeita para caber na sua rotina corrida com total constância.
                    </p>
                  </div>
                </div>

                {/* Bullet 3 */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all">
                  <div className="bg-orenda-red/10 text-orenda-red p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">Sabor Absolutamente Neutro</h4>
                    <p className="text-xs text-orenda-gray-medium">
                      Facilidade total: não altera o sabor da sua bebida, tornando-a ideal para misturar com água pura, sucos, shakes proteicos ou pré-treinos.
                    </p>
                  </div>
                </div>

                {/* Bullet 4 */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all">
                  <div className="bg-orenda-red/10 text-orenda-red p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">Máxima Versatilidade de Absorção</h4>
                    <p className="text-xs text-orenda-gray-medium">
                      O pó da Orenda possui tamanho de grânulo calibrado quimicamente, o que diminui sensivelmente o desconforto estomacal comum em creatinas de baixa qualidade comercial.
                    </p>
                  </div>
                </div>

                {/* Bullet 5 */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all">
                  <div className="bg-orenda-red/10 text-orenda-red p-1 rounded-md mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-0.5">Consistência e Foco de Verdade</h4>
                    <p className="text-xs text-orenda-gray-medium">
                      Perfeita para rotinas constantes de treinamento de força, musculação, corrida e levantamento de peso.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Dose calculator interactive widget */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full" id="dose-calculator">
              <div className="sticky top-28 w-full flex justify-center">
                <DoseCalculator />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Seção Comparação - Orenda vs Commum Creatine */}
      <section className="py-20 md:py-28 bg-[#121215] border-y border-white/5" id="como-usar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header area */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold font-semibold">Tabela Comparativa</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight" id="comparison-section-title">
              Por que escolher Orenda <br />
              <span className="text-orenda-red">e não qualquer creatina genérica barata?</span>
            </h2>
            <p className="text-sm sm:text-base text-orenda-gray-medium" id="comparison-section-text">
              Veja a diferença estrutural e profissional entre a nossa abordagem sob responsabilidade química e suplementos tratados como commodities baratas em larga escala.
            </p>
          </div>

          {/* Comparison Table Desktop view & simple card view on mobile */}
          <div className="hidden md:block overflow-hidden border border-white/10 rounded-2xl shadow-2xl bg-black/40" id="desktop-comparison-table-container">
            <table className="w-full text-left border-collapse" id="comparison-table">
              <thead>
                <tr className="bg-[#18181b] border-b border-white/10">
                  <th className="p-6 text-sm font-mono text-white tracking-wider uppercase font-extrabold w-[30%]">Diferenciais</th>
                  <th className="p-6 text-sm font-mono text-orenda-gray-medium tracking-wider uppercase font-semibold">Creatina Genérica Comum</th>
                  <th className="p-6 text-sm font-mono text-orenda-red tracking-wider uppercase font-extrabold bg-orenda-red/5">Creatina Orenda Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                
                {/* Row 1: Compra */}
                <tr className="hover:bg-[#18181b]/30">
                  <td className="p-6 font-display font-bold text-white">Abordagem de Compra</td>
                  <td className="p-6 text-orenda-gray-medium">Foco absoluto em apenas encontrar o preço mais baixo, correndo riscos de falsificação.</td>
                  <td className="p-6 text-white font-medium bg-orenda-red/5">Compra baseada em laudo, confiança química e segurança integral de lote.</td>
                </tr>

                {/* Row 2: Rosto */}
                <tr className="hover:bg-[#18181b]/30">
                  <td className="p-6 font-display font-bold text-white">Rosto por Trás</td>
                  <td className="p-6 text-orenda-gray-medium">Marca sem rosto conhecido, sem e-mail de suporte técnico ou atendimento especializado.</td>
                  <td className="p-6 text-white font-medium bg-orenda-red/5">Fundada por Engenheiro Químico Mestre visível e comprometido diretamente.</td>
                </tr>

                {/* Row 3: Posicionamento */}
                <tr className="hover:bg-[#18181b]/30">
                  <td className="p-6 font-display font-bold text-white">Posicionamento Técnico</td>
                  <td className="p-6 text-orenda-gray-medium">Marketing em massa sobre futilidades de instagram sem responder dúvidas sobre o pó.</td>
                  <td className="p-6 text-white font-medium bg-orenda-red/5">Posicionamento técnico de alta pureza fundamentado na ciência aplicada.</td>
                </tr>

                {/* Row 4: Produto */}
                <tr className="hover:bg-[#18181b]/30">
                  <td className="p-6 font-display font-bold text-white">Método Comercial</td>
                  <td className="p-6 text-orenda-gray-medium">Commodity fria, estocado sem critérios químicos precisos em grandes armazéns quentes.</td>
                  <td className="p-6 text-white font-medium bg-orenda-red/5">Ferramenta real de performance com armazenamento e controle calibrados.</td>
                </tr>

                {/* Row 5: Atendimento */}
                <tr className="hover:bg-[#18181b]/30">
                  <td className="p-6 font-display font-bold text-white">Atendimento</td>
                  <td className="p-6 text-orenda-gray-medium">Autoatendimento burocrático ou robôs de SAC complicados em caso de dúvidas.</td>
                  <td className="p-6 text-white font-medium bg-orenda-red/5">Atendimento humano especializado, direto pelo WhatsApp da equipe.</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Simple Grid Comparison for Mobile Devices */}
          <div className="grid grid-cols-1 gap-6 md:hidden" id="mobile-comparison-container">
            
            {/* Genérica barata */}
            <div className="bg-[#16161a] border border-white/5 rounded-2xl p-6" id="mobile-comp-generic">
              <span className="font-mono text-[10px] text-orenda-gray-medium uppercase tracking-wider block mb-2">Padrão Mercado</span>
              <h3 className="font-display text-lg font-bold text-white/70 mb-4">Creatina Genérica Comum</h3>
              
              <ul className="space-y-3 text-xs text-orenda-gray-medium">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Compra focada unicamente no preço mais baixo (riscos elevados).</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Marca sem figura técnica identificada ou mestre químico de suporte.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Atendimento feito por caminhos difíceis e robôs automáticos de SAC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Tratado apenas como uma commodity industrial sem responsabilidade.</span>
                </li>
              </ul>
            </div>

            {/* Orenda Performance */}
            <div className="bg-[#1e1a1d] border border-orenda-red/30 rounded-2xl p-6 relative overflow-hidden" id="mobile-comp-orenda">
              <div className="absolute top-0 right-0 bg-orenda-red text-white font-mono text-[9px] px-3 py-1 uppercase rounded-bl-xl font-bold tracking-wider">
                Exclusivo Orenda
              </div>
              
              <span className="font-mono text-[10px] text-orenda-red uppercase tracking-wider block mb-2 font-bold">Foco Científico</span>
              <h3 className="font-display text-lg font-bold text-white mb-4">Creatina Orenda Performance</h3>
              
              <ul className="space-y-3 text-xs text-orenda-gray-light">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Garantia estrita de pureza absoluta respaldada em laudos químicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Supervisão total do engenheiro químico Eduardo Donzelli.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Suporte e consultoria rápidos de dosagem diretamente no WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orenda-red shrink-0 mt-0.5" />
                  <span>Insumos nobres mantidos sob os melhores padrões de estocagem.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Seção "Para quem é" */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] relative" id="para-quem-e">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box: motivated list */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col text-left" id="para-quem-benefits">
              <div className="space-y-3">
                <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold">Foco no Praticante</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight" id="para-quem-title">
                  Essa Creatina é para você se…
                </h2>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-4" id="para-quem-bullets-container">
                
                {/* Bullet 1 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orenda-red p-1 rounded-full shrink-0 text-white mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-base text-orenda-gray-light leading-relaxed">
                    Você treina musculação ou cross training de forma consistente e sente que falta força nas séries finais de maior fadiga.
                  </p>
                </div>

                {/* Bullet 2 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orenda-red p-1 rounded-full shrink-0 text-white mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-base text-orenda-gray-light leading-relaxed">
                    Você quer melhorar a sua rotina diária de rendimento esportivo através de um suplemento clássico altamente embasado.
                  </p>
                </div>

                {/* Bullet 3 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orenda-red p-1 rounded-full shrink-0 text-white mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-base text-orenda-gray-light leading-relaxed">
                    Você está cansado de comprar suplementos baratos de marcas genéricas que trazem pouca ou nenhuma segurança real.
                  </p>
                </div>

                {/* Bullet 4 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orenda-red p-1 rounded-full shrink-0 text-white mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-base text-orenda-gray-light leading-relaxed">
                    Você valoriza o trabalho de uma empresa brasileira independente desenvolvida diretamente por um especialista químico.
                  </p>
                </div>

                {/* Bullet 5 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orenda-red p-1 rounded-full shrink-0 text-white mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-base text-orenda-gray-light leading-relaxed">
                    Você prefere falar direto com profissionais humanos no WhatsApp antes de fechar sua compra.
                  </p>
                </div>

              </div>
              
              {/* WhatsApp direct contact trigger */}
              <div className="pt-4">
                <a 
                  href="https://wa.me/5516997457085?text=Olá,%20vi%20a%20página%20da%20Creatina%20Orenda%20Performance%20e%20quero%20saber%20qual%20opção%20é%20melhor%20para%20mim."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-orenda-red hover:bg-orenda-red-hover text-white font-mono font-extrabold uppercase text-xs sm:text-sm tracking-wider px-8 py-4.5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orenda-red/25 items-center gap-2 group"
                  id="para-quem-whatsapp-btn"
                >
                  <span>FALAR COM A ORENDA NO WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right graphic box */}
            <div className="lg:col-span-5 relative" id="para-quem-visual">
              <div className="bg-gradient-to-tr from-[#16161a] to-[#202025] border border-white/10 rounded-3xl p-8 space-y-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orenda-red/10 rounded-full blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-orenda-red/10 flex items-center justify-center text-orenda-red">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">Posicionamento Real</h4>
                <blockquote className="text-sm sm:text-base text-orenda-gray-light font-medium italic">
                  “Orenda é força de transformação. Performance é o caminho.”
                </blockquote>
                <div className="h-px bg-white/10"></div>
                <p className="text-xs text-orenda-gray-medium leading-relaxed">
                  Para nós, performance não se trata apenas de bater recordes na academia — mas do alinhamento diário entre esforço sincero, pureza química e resultados consistentes.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Seção de Opções de Compra - Product Cards */}
      <section className="py-20 md:py-28 bg-[#121215] border-y border-white/5" id="conhecer-linha">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold">Faça Sua Escolha</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight" id="compra-cards-title">
              Escolha Sua Ferramenta de Performance
            </h2>
            <p className="text-sm sm:text-base text-orenda-gray-medium leading-relaxed" id="compra-cards-text">
              Compre com segurança. Adquira no tamanho perfeito para a sua atual rotina de treino ou monte seu kit.
            </p>
          </div>

          {/* 3 Option cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-cards-container">
            {packages.map((pkg, idx) => (
              <div 
                key={pkg.id} 
                className={`bg-[#17171a] border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative overflow-hidden ${
                  pkg.popular 
                    ? "border-orenda-red/60 shadow-2xl shadow-orenda-red/10 scale-100 lg:scale-[1.03] z-10" 
                    : "border-white/5 hover:border-white/10"
                }`}
                id={`pricing-card-${pkg.id}`}
              >
                {/* Popularity Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-orenda-red text-white text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 shadow-sm" id="popular-badge">
                    Mais Recomendado
                  </div>
                )}

                {/* Card Top Information */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-orenda-red uppercase tracking-widest block font-bold">Produto Oficial</span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-orenda-gray-medium font-mono font-medium leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="h-px bg-white/5"></div>

                  <p className="text-sm text-orenda-gray-light leading-relaxed font-medium">
                    {pkg.description}
                  </p>

                  <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-3">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block font-bold">Incluso no Pote</span>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-orenda-gray-light">
                          <Check className="w-3.5 h-3.5 text-orenda-red shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Active Buying/Call WhatsApp Button */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                  <a 
                    href={pkg.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-mono font-extrabold text-xs sm:text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                      pkg.popular 
                        ? "bg-orenda-red hover:bg-orenda-red-hover text-white shadow-lg shadow-orenda-red/20 active:scale-98" 
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 active:scale-98"
                    }`}
                    id={`pricing-buy-btn-${pkg.id}`}
                  >
                    <span>{pkg.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-[9px] text-orenda-gray-medium text-center font-mono uppercase tracking-wider">
                    Sujeito a frete • Fale com nossos consultores
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-channel Navigation & Social Hub */}
          <div className="mt-16 text-center space-y-6" id="direct-store-link-box">
            <p className="text-xs sm:text-sm text-orenda-gray-medium max-w-md mx-auto">
              Garanta sua Creatina Pura Orenda hoje, ou conecte-se aos nossos canais oficiais para acompanhar novidades Científicas e novos Lotes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <a 
                href="https://www.orendaperformance.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-mono font-bold text-xs tracking-wider px-6 py-4 rounded-xl transition-all duration-300"
                id="direct-store-web-btn"
              >
                <span>Acessar Loja Oficial</span>
                <ExternalLink className="w-4 h-4 text-orenda-gray-medium" />
              </a>

              <a 
                href="https://www.instagram.com/orendabiotech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 hover:from-purple-900/30 hover:to-pink-900/30 text-white border border-white/10 hover:border-[#ff474e]/30 font-mono font-bold text-xs tracking-wider px-6 py-4 rounded-xl transition-all duration-300"
                id="direct-store-insta-btn"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Seguir no Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8.5 Portal de Laudos Técnicos */}
      <LaudosPortal />

      {/* 9. FAQ Section */}
      <section className="py-20 md:py-28 bg-[#0a0a0c] relative" id="duvidas">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono text-xs text-orenda-red uppercase tracking-widest font-bold">Central de Suporte</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight" id="faq-title">
              Perguntas Frequentes
            </h2>
            <p className="text-sm sm:text-base text-orenda-gray-medium leading-relaxed">
              Consulte orientações diretas, seguras e baseadas em dados químicos para a sua rotina diária de creatina.
            </p>
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-4" id="faq-accordion-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#141416] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                id={`faq-item-${index}`}
              >
                {/* Accordion Trigger Header */}
                <button 
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.01] focus:outline-none"
                  aria-expanded={activeFaq === index}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus or Arrow icon with rotation */}
                  <div className={`p-1.5 rounded-lg bg-white/5 text-orenda-red transition-transform duration-300 ${
                    activeFaq === index ? "rotate-180 bg-orenda-red/10" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4 text-orenda-red" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-orenda-gray-medium leading-relaxed border-t border-white/5" id={`faq-content-${index}`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Support call action link */}
          <div className="mt-12 text-center bg-white/[0.01] border border-white/5 p-6 rounded-2xl" id="faq-support-box">
            <p className="text-sm text-orenda-gray-light leading-relaxed mb-4">
              Ainda tem alguma dúvida química ou nutricional de como tomar a creatina?
            </p>
            <a 
              href="https://wa.me/5516997457085?text=Olá,%20vi%20a%20página%20da%20Creatina%20Orenda%20Performance%20e%20ainda%20tenho%20dúvidas%20técnicas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-orenda-red hover:bg-orenda-red-hover text-white font-mono font-bold uppercase text-[11px] tracking-wider px-5 py-3 rounded-lg border border-transparent transition-all active:scale-95 items-center gap-1.5"
              id="faq-support-whatsapp"
            >
              <span>Conversar com nossa equipe técnica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 10. CTA Final */}
      <section className="py-20 md:py-28 bg-[#121215] relative overflow-hidden border-t border-white/5" id="cta-final">
        {/* Glowing circle ambient accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[300px] bg-orenda-red/5 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
          
          <div className="inline-flex items-center gap-1.5 bg-orenda-red/10 text-orenda-red px-3 py-1.5 rounded-full" id="cta-final-brand-shield">
            <Sparkles className="w-4 h-4 text-orenda-red" />
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-orenda-red">Consistência • Rigor • Atitude</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight" id="cta-final-title">
            Seu treino já começou antes de você chegar na academia. <br />
            <span className="text-orenda-red">Começa na escolha do que você digere todos os dias.</span>
          </h2>

          <p className="text-base sm:text-lg text-orenda-gray-medium leading-relaxed max-w-2xl mx-auto" id="cta-final-text">
            Não comprometa seus resultados em troca de marcas genéricas focadas apenas em disputar centavos. Escolha o rigor, a ciência aplicada e a certeza de pureza estrita.
          </p>

          {/* Majestic Bold Campaign Signature Card Layout */}
          <div className="border border-white/10 hover:border-orenda-red/30 transition-all duration-500 p-8 sm:p-12 rounded-3xl bg-black/60 relative overflow-hidden my-8" id="signature-statement-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orenda-red/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
            
            <p className="font-mono text-[10px] text-[#ff474e] uppercase tracking-[0.25em] font-extrabold mb-4">Assinatura de Campanha</p>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight uppercase font-semibold">
              “Creatina você encontra em qualquer lugar. <br className="hidden sm:inline" />
              <span className="text-[#ff474e]">Confiança técnica, não.”</span>
            </h3>
            <p className="text-[10px] text-orenda-gray-medium font-mono uppercase tracking-[0.2em] mt-5">
              ORENDA PERFORMANCE • CONTROLE E PUREZA RIGOROSA EM CADA GRAMA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/5516997457085?text=Olá,%20quero%20comprar%20a%20Creatina%20Orenda%20Performance.%20Pode%20me%20atender?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orenda-red hover:bg-orenda-red-hover text-white font-mono font-extrabold uppercase text-xs sm:text-sm tracking-widest px-8 py-4.5 sm:py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orenda-red/30 flex items-center justify-center gap-2 group active:scale-98"
              id="cta-final-whatsapp-btn"
            >
              <Flame className="w-4 h-4 text-white fill-white group-hover:animate-bounce" />
              <span>GARANTIR MINHA CREATINA PURA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://www.orendaperformance.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-mono font-bold text-xs sm:text-sm tracking-widest px-6 py-4.5 sm:py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-98"
              id="cta-final-site-btn"
            >
              <span>CONHECER A LINHA ORENDA</span>
            </a>
          </div>

        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-orenda-dark border-t border-white/5 py-12 md:py-16 text-left" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
            
            {/* Logo and brief info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2" id="footer-logo-container">
                <div className="w-8 h-8 rounded-lg bg-orenda-red flex items-center justify-center font-display font-black text-white text-base tracking-wider" id="footer-logo-badge">
                  O
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold tracking-tight text-white leading-none text-base">
                    ORENDA <span className="text-orenda-red">PERFORMANCE</span>
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-orenda-gray-medium leading-none mt-0.5">
                    CIÊNCIA • FORÇA • PERFORMANCE
                  </span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-orenda-gray-medium max-w-sm leading-relaxed" id="footer-summary-text">
                Orenda é força de transformação. Performance é o caminho. Do laboratório de formulação química à excelência física de seus resultados.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-mono text-xs text-white uppercase tracking-wider font-extrabold pb-1">Seções da Página</h4>
              <ul className="space-y-2 text-xs">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.id} className="text-orenda-gray-medium hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scientific Credentials Box */}
            <div className="md:col-span-4 space-y-3 bg-[#131315] p-5 rounded-xl border border-white/5" id="footer-credentials-box">
              <h4 className="font-mono text-xs text-white uppercase tracking-wider font-extrabold">Responsável Técnico</h4>
              
              <div className="space-y-1.5 text-xs text-orenda-gray-medium">
                <p className="text-white font-semibold">Eduardo Donzelli</p>
                <p>• Engenheiro Químico credenciado</p>
                <p>• Mestre em Ciências Exatas</p>
                <p>• Especialista em Produção e Pureza de Suplementos</p>
              </div>
            </div>

          </div>

          {/* Compliance Safe and Legal claim text wrapper */}
          <div className="pt-8 space-y-6">
            
            {/* Legal Claim prominent display */}
            <div className="bg-[#18181a] border border-white/5 p-4 sm:p-6 rounded-2xl" id="legal-claim-banner">
              <div className="flex gap-3 items-start">
                <FileText className="w-5 h-5 text-orenda-red shrink-0 mt-0.5" />
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/55 block">Informativo Obrigatório de Agência Reguladora</span>
                  <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                    “A creatina auxilia no aumento do desempenho físico durante exercícios repetidos de curta duração e alta intensidade.”
                  </p>
                </div>
              </div>
            </div>

            {/* Core footer info & copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-orenda-gray-medium" id="footer-bottom-row">
              <p className="text-center md:text-left text-[10px] sm:text-[11px]">
                &copy; {new Date().getFullYear()} Orenda Performance. Todos os direitos reservados. Landing Page produzida com rigor técnico e conformidade.
              </p>
              
              {/* Link directly to central site */}
              <a 
                href="https://www.orendaperformance.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-mono tracking-wider font-bold uppercase text-[10px]"
                id="footer-store-direct-btn"
              >
                Website Oficial
              </a>
            </div>

          </div>

        </div>
      </footer>

      {/* 12. Floating WhatsApp and dynamic mobile-footer bar */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block" id="desktop-whatsapp-float">
        <a 
          href="https://wa.me/5516997457085?text=Olá,%20quero%20comprar%20a%20Creatina%20Orenda%20Performance.%20Pode%20me%20enviar%20valores%20e%20opções%20de%20150g%20e%20300g?"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group font-mono text-xs font-bold uppercase tracking-wider"
          id="desktop-whatsapp-float-link"
        >
          {/* Custom vector WhatsApp style representation icon */}
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </div>
          <span>Comprar via WhatsApp</span>
        </a>
      </div>

      {/* Sticky persistent action footer for mobile devices only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-orenda-graphite/95 backdrop-blur-md border-t border-white/10 p-4 flex sm:hidden items-center justify-between" id="mobile-persistent-footer">
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-mono text-orenda-red uppercase font-bold tracking-wider leading-none">Orenda Performance</span>
          <span className="text-xs font-display font-extrabold text-white leading-none mt-1">Creatina Pura</span>
        </div>
        <a 
          href="https://wa.me/5516997457085?text=Olá,%20quero%20comprar%20a%20Creatina%20Orenda%20Performance.%20Pode%20me%20enviar%20valores%20e%20opções%20de%20150g%20e%20300g?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orenda-red hover:bg-orenda-red-hover text-white px-5 py-3 rounded-lg text-xs font-mono font-black uppercase tracking-wider shadow-lg active:scale-95 flex items-center gap-1.5"
          id="mobile-persistent-whatsapp-btn"
        >
          <span>QUERO COMPRAR</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
