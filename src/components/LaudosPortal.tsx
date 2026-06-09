import React, { useState } from "react";
import eduardoDonzelli from "../assets/images/eduardo_donzelli_1780796534839-1.png";
import { 
  Shield, 
  Check, 
  FileText, 
  Award,
  Download,
  UploadCloud,
  FileSpreadsheet,
  Plus,
  ArrowRight,
  Flame,
  Fingerprint,
  TrendingUp,
  Scale,
  Lock,
  ChevronDown,
  Sparkles,
  Zap
} from "lucide-react";

interface Laudo {
  id: string;
  lote: string;
  dataAnalise: string;
  pureza: string;
  maltodextrina: string;
  metaisPesados: string;
  microbiologico: string;
  certificador: string;
  registroProfissional: string;
  certificadoUri: string;
  notas: string;
}

export default function LaudosPortal() {
  const [activeTab, setActiveTab] = useState<"client" | "admin">("client");
  
  // Hardcoded real/premium default reports
  const [laudos, setLaudos] = useState<Laudo[]>([
    {
      id: "lote-04",
      lote: "LOTE: OR-2404/A",
      dataAnalise: "22 de Maio de 2026",
      pureza: "99.87%",
      maltodextrina: "0.00% (ZERO)",
      metaisPesados: "CONFORME (INDETECTÁVEL)",
      microbiologico: "CONFORME (LIVRE DE PATÓGENOS)",
      certificador: "Eduardo Donzelli",
      registroProfissional: "CRQ IV 04268153",
      certificadoUri: "laudo_creatina_orenda_04.pdf",
      notas: "A análise por cromatografia líquida de alta eficiência (HPLC) confirmou pureza estrutural livre de amido, maltodextrina e contaminantes."
    },
    {
      id: "lote-03",
      lote: "LOTE: OR-2403/B",
      dataAnalise: "10 de Abril de 2026",
      pureza: "99.82%",
      maltodextrina: "0.00% (ZERO)",
      metaisPesados: "CONFORME (INDETECTÁVEL)",
      microbiologico: "CONFORME (LIVRE DE PATÓGENOS)",
      certificador: "Eduardo Donzelli",
      registroProfissional: "CRQ IV 04268153",
      certificadoUri: "laudo_creatina_orenda_03.pdf",
      notas: "Lote aprovado para atletas de elite. Parâmetros microbiológicos e físico-químicos rigorosamente alinhados com a RDC da ANVISA."
    }
  ]);

  const [selectedLaudoId, setSelectedLaudoId] = useState<string>("lote-04");

  // Admin form state
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [formLote, setFormLote] = useState<string>("");
  const [formPureza, setFormPureza] = useState<string>("99.90%");
  const [formMaltodextrina, setFormMaltodextrina] = useState<string>("0.00% (ZERO)");
  const [formMetais, setFormMetais] = useState<string>("CONFORME (INDETECTÁVEL)");
  const [formMicro, setFormMicro] = useState<string>("CONFORME (LIVRE DE PATÓGENOS)");
  const [formNotas, setFormNotas] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgressText, setUploadProgressText] = useState<string>("");
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Admin authentication state
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>("");

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Premium restricted password check: orenda2026
    if (adminPassword.trim().toLowerCase() === "orenda2026") {
      setIsAuthorized(true);
      setAuthError("");
    } else {
      setAuthError("Assinatura técnica inválida ou Código de Acesso Incorreto.");
    }
  };

  const selectedLaudo = laudos.find(l => l.id === selectedLaudoId) || laudos[0];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFileName(file.name);
      if (!formLote) {
        // Auto-extract or suggest LOTE
        const cleanName = file.name.replace(/\.[^/.]+$/, "");
        setFormLote(`LOTE: OR-${cleanName.substring(0, 8).toUpperCase()}`);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      if (!formLote) {
        const cleanName = file.name.replace(/\.[^/.]+$/, "");
        setFormLote(`LOTE: OR-${cleanName.substring(0, 8).toUpperCase()}`);
      }
    }
  };

  const executeSimulatedUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formLote) {
      alert("Por favor, preencha o número do Lote.");
      return;
    }
    
    setIsUploading(true);
    const steps = [
      "Iniciando leitura espectrométrica do arquivo...",
      "Processando análise física cromatográfica (HPLC)...",
      "Validando assinatura digital CRQ do Eduardo Donzelli...",
      "Sincronizando laudo técnico na base criptografada Orenda...",
      "Pronto! Certificado registrado com sucesso."
    ];

    let currentStep = 0;
    setUploadProgressText(steps[0]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setUploadProgressText(steps[currentStep]);
      } else {
        clearInterval(interval);
        
        // Add to laudos state
        const newId = `lote-${Date.now()}`;
        const newLaudo: Laudo = {
          id: newId,
          lote: formLote.toUpperCase().startsWith("LOTE:") ? formLote : `LOTE: ${formLote}`,
          dataAnalise: new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          }),
          pureza: formPureza,
          maltodextrina: formMaltodextrina,
          metaisPesados: formMetais,
          microbiologico: formMicro,
          certificador: "Eduardo Donzelli",
          registroProfissional: "CRQ IV 04268153",
          certificadoUri: uploadedFileName || "laudo_enviado.pdf",
          notas: formNotas || "O lote foi submetido a rigorosa testagem em laboratório associado e auditado por engenharia química industrial. Padrão estrito de pureza comprovado."
        };

        setLaudos([newLaudo, ...laudos]);
        setSelectedLaudoId(newId);
        setIsUploading(false);
        setUploadedFileName("");
        setFormLote("");
        setFormNotas("");
        
        // Show Toast
        setToastMessage(`Laudo do Lote registrado com sucesso!`);
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 4000);
        
        // Switch back to client view to admire the published report!
        setActiveTab("client");
      }
    }, 900);
  };

  const handleDownload = (laudo: Laudo) => {
    setDownloadingId(laudo.id);
    setTimeout(() => {
      setDownloadingId(null);
      // Create a simulated PDF download
      const element = document.createElement("a");
      const fileContent = `CERTIFICADO DE PUREZA ESTRETA - ORENDA PERFORMANCE\n` +
                          `======================================================\n` +
                          `Lote verificado: ${laudo.lote}\n` +
                          `Data da análise: ${laudo.dataAnalise}\n` +
                          `Pureza verificada: ${laudo.pureza}\n` +
                          `Maltodextrina/Amido: ${laudo.maltodextrina}\n` +
                          `Metais Pesados: ${laudo.metaisPesados}\n` +
                          `Microbiologia: ${laudo.microbiologico}\n` +
                          `Responsável Técnico: ${laudo.certificador} (${laudo.registroProfissional})\n` +
                          `======================================================\n` +
                          `Assinado digitalmente por Engenharia Química Orenda Performance.\n` +
                          `Notas Técnicas: ${laudo.notas}`;
      const file = new Blob([fileContent], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `LAUDO_PUREZA_ORENDA_${laudo.lote.replace(/[^a-zA-Z0-9]/g, "_")}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0e0e11] relative overflow-hidden border-t border-white/5" id="portaldelaudos">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-orenda-red/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-orenda-red/10 text-orenda-red px-3 py-1.5 rounded-full" id="purity-shield-badge">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] tracking-widest uppercase font-bold">TRANSPARÊNCIA E RESPONSABILIDADE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Portal de Autenticidade <br className="hidden sm:inline" />
            <span className="text-[#ff474e]">&amp; Laudos de Pureza de Lote</span>
          </h2>
          <p className="text-base text-orenda-gray-medium max-w-2xl mx-auto">
            Não acredite apenas em palavras e slogans de marketing. Aqui você acompanha em tempo real o controle cromatográfico, as assinaturas profissionais de responsabilidade técnica e pode conferir ou anexar laudos.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#16161a] p-1 border border-white/10 rounded-xl flex">
            <button
              onClick={() => setActiveTab("client")}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-extrabold transition-all flex items-center gap-2 ${
                activeTab === "client" 
                  ? "bg-orenda-red text-white shadow-lg" 
                  : "text-orenda-gray-medium hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Ver Laudos Ativos
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-extrabold transition-all flex items-center gap-2 ${
                activeTab === "admin" 
                  ? "bg-[#ff474e]/20 text-[#ff474e] border border-[#ff474e]/30 shadow-lg" 
                  : "text-orenda-gray-medium hover:text-white"
              }`}
            >
              <UploadCloud className="w-3.5 h-3.5" />
              Anexar Novo Laudo (Eduardo)
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="fixed bottom-5 right-5 bg-emerald-950 border border-emerald-500 text-white rounded-xl p-4 shadow-2xl z-50 flex items-center gap-3 animate-fade-in max-w-sm">
            <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
              <Check className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <p className="font-bold text-sm">Operação Concluída!</p>
              <p className="text-xs text-emerald-300/80">{toastMessage}</p>
            </div>
          </div>
        )}

        {/* Tab Contents */}
        <div id="purity-portal-container">
          {activeTab === "client" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Lotes List Sidebar */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono text-orenda-gray-medium uppercase tracking-widest pl-2 mb-2 block">Selecione o Lote do Produto</p>
                <div className="space-y-2">
                  {laudos.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLaudoId(l.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                        selectedLaudoId === l.id 
                          ? "bg-gradient-to-r from-orenda-red/10 to-[#ff474e]/5 border-orenda-red/50 text-white" 
                          : "bg-[#141417]/80 border-white/5 text-orenda-gray-medium hover:border-white/10 hover:text-white"
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">{l.lote}</span>
                        <span className="text-[10px] text-orenda-gray-medium block">Análise: {l.dataAnalise}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-extrabold text-[#ff474e]">{l.pureza}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${selectedLaudoId === l.id ? "-rotate-90 text-orenda-red" : "text-white/20 group-hover:text-white/40"}`} />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-gradient-to-b from-[#18181b] to-[#121215] border border-white/5 rounded-xl space-y-3">
                  <div className="flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 text-orenda-red shrink-0" />
                    <span className="font-mono text-[10px] text-white uppercase font-bold tracking-wider">Assinatura Digital de Pureza</span>
                  </div>
                  <p className="text-[11px] text-orenda-gray-medium leading-relaxed">
                    Cada lote de creatina sai de nossa expedição atrelado ao laudo individual analítico verificado, assinado pelo responsável técnico e disponibilizado para consulta de atletas e biomédicos.
                  </p>
                </div>
              </div>

              {/* Selected Laudo Analysis Sheet */}
              <div className="lg:col-span-8">
                <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
                  
                  {/* Decorative background watermark */}
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-white pointer-events-none">
                    <Shield className="w-64 h-64" />
                  </div>

                  <div>
                    {/* Header Sheet Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
                      <div className="space-y-1">
                        <span className="bg-orenda-red/10 text-[#ff474e] font-mono text-[10px] uppercase font-bold px-2 py-1 rounded block w-max">
                          LAUDO FISICO-QUÍMICO HOMOLOGADO
                        </span>
                        <h3 className="font-display text-2xl font-black text-white">{selectedLaudo.lote}</h3>
                        <p className="text-xs text-orenda-gray-medium">Data de Emissão do Certificado: {selectedLaudo.dataAnalise}</p>
                      </div>
                      
                      <button
                        onClick={() => handleDownload(selectedLaudo)}
                        disabled={downloadingId === selectedLaudo.id}
                        className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white px-5 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2 transition-all self-start sm:self-center shrink-0 disabled:opacity-50"
                      >
                        <Download className={`w-3.5 h-3.5 text-orenda-red ${downloadingId === selectedLaudo.id ? "animate-bounce" : ""}`} />
                        <span>{downloadingId === selectedLaudo.id ? "Baixando..." : "Baixar Laudo Técnico"}</span>
                      </button>
                    </div>

                    {/* Critical Chemical Constants Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      
                      {/* Constant 1: Pureza */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:border-orenda-red/20 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-orenda-red/10 flex items-center justify-center text-orenda-red font-mono shrink-0">
                          <Zap className="w-5 h-5 col-span-2 text-orenda-red" />
                        </div>
                        <div>
                          <span className="text-[10px] text-orenda-gray-medium uppercase block font-mono">Teor de Pureza</span>
                          <span className="text-lg font-mono font-extrabold text-white">{selectedLaudo.pureza}</span>
                          <span className="text-[10px] text-emerald-400 block font-semibold">Excede padrão de mercado</span>
                        </div>
                      </div>

                      {/* Constant 2: Maltodextrina */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:border-orenda-red/20 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white font-mono shrink-0">
                          <Check className="w-5 h-5 text-[#ff474e]" />
                        </div>
                        <div>
                          <span className="text-[10px] text-orenda-gray-medium uppercase block font-mono">Aditivos, Amido e Malto</span>
                          <span className="text-lg font-mono font-extrabold text-white">{selectedLaudo.maltodextrina}</span>
                          <span className="text-[10px] text-[#ff474e] block font-semibold">Zero contaminantes de volume</span>
                        </div>
                      </div>

                      {/* Constant 3: Heavy metals */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:border-orenda-red/20 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
                          <Scale className="w-5 h-5 text-orenda-gray-medium" />
                        </div>
                        <div>
                          <span className="text-[10px] text-orenda-gray-medium uppercase block font-mono">Metais Pesados</span>
                          <span className="text-sm font-mono font-bold text-white uppercase">{selectedLaudo.metaisPesados}</span>
                          <span className="text-[9px] text-[#ff474e] block font-mono block">Rigidez absoluta</span>
                        </div>
                      </div>

                      {/* Constant 4: Microbiologico */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex items-center gap-3 hover:border-orenda-red/20 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0">
                          <Award className="w-5 h-5 text-orenda-gray-medium" />
                        </div>
                        <div>
                          <span className="text-[10px] text-orenda-gray-medium uppercase block font-mono">Controle Microbiológico</span>
                          <span className="text-sm font-mono font-bold text-white uppercase">{selectedLaudo.microbiologico}</span>
                          <span className="text-[9px] text-emerald-400 block font-mono">Qualidade biológica total</span>
                        </div>
                      </div>

                    </div>

                    {/* Report Notes */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-xs text-orenda-gray-medium leading-relaxed mb-6">
                      <p className="font-bold text-white mb-1">Notas da Engenharia:</p>
                      {selectedLaudo.notas}
                    </div>
                  </div>

                  {/* Certification Signature Section */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#1c1c22] border border-white/10 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                        <img 
                          src={eduardoDonzelli} 
                          alt="Eduardo Donzelli" 
                          className="w-full h-full object-cover scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-orenda-gray-medium uppercase block">Auditor Químico Responsável</span>
                        <p className="text-xs font-bold text-white block leading-tight">{selectedLaudo.certificador}</p>
                        <p className="text-[10px] text-[#ff474e] font-mono leading-none block mt-0.5">{selectedLaudo.registroProfissional}</p>
                      </div>
                    </div>

                    <div className="border border-white/10 border-dashed rounded-xl px-4 py-3 bg-[#111114] flex items-center gap-2 self-start sm:self-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <div className="text-left">
                        <span className="font-mono text-[9px] uppercase text-emerald-400 font-extrabold block">LAUDO AUTENTICADO</span>
                        <span className="font-mono text-[8px] text-orenda-gray-medium font-bold uppercase block">CERTIFICADO ATIVO E CONFORME</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              
              {/* Backlit card container */}
              <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 sm:p-8 relative">
                
                {/* Simulated lock banner */}
                <div className="flex items-center justify-between bg-[#ff474e]/10 border border-[#ff474e]/20 p-4 rounded-xl mb-6 gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <Lock className="w-5 h-5 text-[#ff474e] shrink-0" />
                    <div>
                      <p className="text-xs font-mono font-extrabold text-white uppercase tracking-wider">Acesso Restrito ao Profissional</p>
                      <p className="text-[11px] text-orenda-gray-medium">Este painel permite que Eduardo Donzelli (Engenheiro Químico) insira e registre novos laudos de pureza no sistema.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#ff474e] uppercase bg-[#ff474e]/15 px-2.5 py-1 rounded font-bold shrink-0">ADMIN</span>
                </div>

                {!isAuthorized ? (
                  <div className="py-8 text-center max-w-md mx-auto space-y-6">
                    <div className="w-12 h-12 rounded-full bg-[#ff474e]/10 flex items-center justify-center text-[#ff474e] mx-auto border border-[#ff474e]/20">
                      <Lock className="w-5 h-5 text-orenda-red animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-white text-lg">Assinatura Digital Requerida</h4>
                      <p className="text-xs text-orenda-gray-medium leading-relaxed">
                        Este painel é protegido por criptografia de controle. Para simular a postagem de novos laudos, valide seu registro com o seu código profissional.
                      </p>
                      <p className="text-[10px] text-orenda-red font-mono font-bold">
                        CÓDIGO DE ACESSO EXCLUSIVO: orenda2026
                      </p>
                    </div>
                    
                    <form onSubmit={handleAuthSubmit} className="space-y-4">
                      <div>
                        <input 
                          type="password"
                          required
                          placeholder="Senha de Acesso Técnico"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          className="w-full text-center bg-[#0c0c0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-orenda-red focus:outline-none"
                        />
                        {authError && (
                          <p className="text-[11px] text-[#ff474e] font-mono mt-2 font-bold">{authError}</p>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          type="button"
                          onClick={() => setActiveTab("client")}
                          className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                        >
                          Voltar
                        </button>
                        <button 
                          type="submit"
                          className="flex-1 bg-[#ff474e] hover:bg-red-600 text-white py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-black transition-all cursor-pointer"
                        >
                          Desbloquear
                        </button>
                      </div>
                    </form>
                  </div>
                ) : isUploading ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-orenda-red animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Flame className="w-6 h-6 text-orenda-red animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="font-mono text-sm text-white font-extrabold uppercase tracking-widest">{uploadProgressText}</p>
                      <p className="text-xs text-orenda-gray-medium mt-1">Garantindo auditoria microbiológica e química...</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={executeSimulatedUpload} className="space-y-6 text-left">
                    
                    {/* Drag and Drop Zone */}
                    <div 
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer relative min-h-[160px] flex flex-col justify-center items-center ${
                        dragActive 
                          ? "border-orenda-red bg-orenda-red/5" 
                          : uploadedFileName 
                            ? "border-emerald-500/50 bg-emerald-500/[0.02]" 
                            : "border-white/10 bg-[#0c0c0f] hover:border-white/20"
                      }`}
                    >
                      <input 
                        type="file" 
                        id="laudo-file-upload" 
                        onChange={handleFileChange}
                        accept=".pdf,.png,.jpg,.jpeg"
                        className="hidden" 
                      />
                      
                      <label htmlFor="laudo-file-upload" className="cursor-pointer space-y-3 flex flex-col items-center">
                        <div className={`p-3 rounded-xl ${uploadedFileName ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-orenda-gray-medium"}`}>
                          {uploadedFileName ? <FileSpreadsheet className="w-8 h-8" /> : <UploadCloud className="w-8 h-8" />}
                        </div>
                        <div>
                          {uploadedFileName ? (
                            <>
                              <p className="text-sm font-bold text-white uppercase tracking-wide">Arquivo Selecionado</p>
                              <p className="font-mono text-[11px] text-emerald-400 max-w-md truncate mt-0.5">{uploadedFileName}</p>
                            </>
                          ) : (
                            <>
                              <p className="text-sm font-bold text-white">Arraste o arquivo do laudo técnico PDF ou clique para buscar</p>
                              <p className="text-[10px] text-orenda-gray-medium mt-1">Formatos aceitos: PDF, PNG, JPG (Máx 15MB)</p>
                            </>
                          )}
                        </div>
                      </label>
                    </div>

                    {/* Inputs Row 1: Lote & Pureza */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-xs font-mono text-orenda-gray-medium uppercase tracking-wider mb-2 block font-extrabold">Identificação do Lote *</label>
                        <input 
                          type="text" 
                          required
                          value={formLote}
                          onChange={(e) => setFormLote(e.target.value)}
                          placeholder="EX: OR-2405/A" 
                          className="w-full bg-[#0c0c0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-orenda-red focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-orenda-gray-medium uppercase tracking-wider mb-2 block font-extrabold">Teor de Pureza Comprovado *</label>
                        <input 
                          type="text" 
                          required
                          value={formPureza}
                          onChange={(e) => setFormPureza(e.target.value)}
                          placeholder="EX: 99.85%" 
                          className="w-full bg-[#0c0c0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-orenda-red focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Inputs Row 2: Malta & Metais */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div>
                        <label className="text-xs font-mono text-orenda-gray-medium uppercase tracking-wider mb-2 block">Teor de Carboidratos/Malto *</label>
                        <input 
                          type="text"
                          required
                          value={formMaltodextrina}
                          onChange={(e) => setFormMaltodextrina(e.target.value)}
                          placeholder="EX: 0.00% (ZERO)" 
                          className="w-full bg-[#0c0c0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-orenda-red focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-orenda-gray-medium uppercase tracking-wider mb-2 block">Metais Pesados *</label>
                        <input 
                          type="text" 
                          required
                          value={formMetais}
                          onChange={(e) => setFormMetais(e.target.value)}
                          placeholder="EX: CONFORME (INDETECTÁVEL)" 
                          className="w-full bg-[#0c0c0f] border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-orenda-red focus:outline-none"
                        />
                      </div>

                    </div>

                    {/* Control 3: Notas */}
                    <div>
                      <label className="text-xs font-mono text-orenda-gray-medium uppercase tracking-wider mb-2 block">Notas Analíticas Auxiliares</label>
                      <textarea 
                        rows={3}
                        value={formNotas}
                        onChange={(e) => setFormNotas(e.target.value)}
                        placeholder="Insira detalhes adicionais sobre a testagem ou cromatografia líquida de alta eficiência (HPLC)..." 
                        className="w-full bg-[#0c0c0f] border border-white/10 rounded-xl p-4 font-sans text-xs text-white focus:border-orenda-red focus:outline-none leading-relaxed"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button 
                        type="submit"
                        className="bg-orenda-red hover:bg-orenda-red-hover text-white flex-1 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-black transition-all flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-orenda-red/30 cursor-pointer active:scale-98"
                      >
                        <Plus className="w-4 h-4 text-white" />
                        <span>Publicar Laudo na Plataforma</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          setUploadedFileName("");
                          setFormLote("");
                          setFormNotas("");
                          setActiveTab("client");
                        }}
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/5 px-6 py-4 rounded-xl font-mono text-xs uppercase tracking-widest transition-all"
                      >
                        Cancelar
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
