import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  PhoneCall, 
  CheckCheck,
  ChevronDown
} from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LiveChatWidgetProps {
  lang: Language;
  onOpenRFQ: () => void;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ lang, onOpenRFQ }) => {
  const t = TRANSLATIONS[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: t.chat.welcome,
      timestamp: 'Baru saja',
      options: [
        { label: lang === 'id' ? '💧 Info Sistem MBBR' : '💧 MBBR Systems Info', action: 'mbbr' },
        { label: lang === 'id' ? '🛡️ Keamanan Tabung Klorin' : '🛡️ Chlorine Gas Safety', action: 'chlorine' },
        { label: lang === 'id' ? '💨 Sizing Wet Scrubber' : '💨 Wet Scrubber Sizing', action: 'scrubber' },
        { label: lang === 'id' ? '🌱 Ekonomi Sirkular Kompos' : '🌱 Circular Composting', action: 'compost' },
        { label: lang === 'id' ? '📞 Hubungi Insinyur Ahli' : '📞 Contact Process Lead', action: 'engineer' },
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate smart engineering response
    setTimeout(() => {
      let botReply = '';
      const lower = text.toLowerCase();

      if (lower.includes('mbbr') || lower.includes('ipal') || lower.includes('limbah')) {
        botReply = lang === 'id'
          ? 'Teknologi MBBR Berkat Air Teknika menggunakan media HDPE berluas permukaan >1200 m²/m³. Mampu meningkatkan kapasitas reduksi COD/BOD hingga 300% pada tangki eksisting tanpa perluasan lahan. Apakah Anda ingin tim kami mengestimasi kebutuhan media untuk IPAL Anda?'
          : 'Berkat Air Teknika MBBR utilizes virgin HDPE bio-carriers with >1200 m²/m³ protected area, tripling COD/BOD removal capacity inside existing basins without land expansion. Would you like a custom sizing estimate?';
      } else if (lower.includes('klorin') || lower.includes('chlorin') || lower.includes('tabung') || lower.includes('gas')) {
        botReply = lang === 'id'
          ? 'Sistem Klorinasi kami beroperasi 100% pada prinsip All-Vacuum dengan Vacuum Regulator bersertifikat The Chlorine Institute (USA). Tekanan positif gas terisolir langsung pada valve tabung silinder, sehingga seluruh pipa di gedung beroperasi dalam kondisi aman.'
          : 'Our gas chlorination skids operate strictly under the All-Vacuum principle with Chlorine Institute certified regulators. Positive pressure is isolated directly at cylinder valves, ensuring all indoor piping operates in complete negative pressure safety.';
      } else if (lower.includes('scrubber') || lower.includes('bau') || lower.includes('asam') || lower.includes('emisi')) {
        botReply = lang === 'id'
          ? 'Wet Packed Bed Scrubber kami dirancang khusus menggunakan material FRP / PP tahan korosi, dengan efisiensi penyerapan gas asam (HCl, SO2, Cl2) dan bau busuk hingga >99.8% sesuai standar Permen LHK No. 17/2019.'
          : 'Our FRP/PP Wet Packed Bed Scrubbers achieve >99.8% gas absorption efficiency for acid fumes (HCl, SO2, Cl2) and industrial odors, fully compliant with environmental emission regulations.';
      } else if (lower.includes('kompos') || lower.includes('sirkular') || lower.includes('sludge') || lower.includes('lumpur')) {
        botReply = lang === 'id'
          ? 'Fasilitas bioreaktor ekonomi sirkular kami mengonversi lumpur IPAL biologis dan limbah organik menjadi kompos hayati kaya hara dalam 7-14 hari, mengeliminasi biaya hauling ke TPA dan membuka pendapatan baru.'
          : 'Our circular composting bioreactors convert biological WWTP sludge into nutrient-dense bio-fertilizer in just 7-14 days, eliminating tipping fees and generating revenue from certified compost.';
      } else if (lower.includes('insinyur') || lower.includes('kontak') || lower.includes('engineer') || lower.includes('harga') || lower.includes('rfq')) {
        botReply = lang === 'id'
          ? 'Tentu! Anda dapat langsung mengisi Formulir RFQ atau menghubungi CS Siaga 24 Jam kami via WhatsApp di 6289627209809 atau email ke sales@berkatairteknika.my.id.'
          : 'Certainly! You can submit our RFQ form or connect with our 24/7 CS via WhatsApp at +62 896-2720-9809 or email sales@berkatairteknika.my.id.';
      } else {
        botReply = lang === 'id'
          ? 'Terima kasih atas pertanyaannya. Tim spesialis rekayasa proses Berkat Air Teknika siap membantu solusi WTP, IPAL MBBR, Klorinasi, Scrubber, maupun Pabrik Garam. Silakan gunakan menu opsi di bawah atau tinggalkan nomor kontak Anda.'
          : 'Thank you for your inquiry. Our process engineering team is standing by to assist with WTP, MBBR WWTP, Chlorination, Scrubbers, or Salt Refineries. Feel free to use the quick options or leave your contact number.';
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          sender: 'bot',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            { label: lang === 'id' ? '📝 Ajukan RFQ Sekarang' : '📝 Submit RFQ Now', action: 'rfq' },
            { label: lang === 'id' ? '💬 Tanya Topik Lain' : '💬 Inquire Another Topic', action: 'reset' }
          ]
        }
      ]);
    }, 900);
  };

  const handleOptionClick = (action: string, label: string) => {
    if (action === 'rfq') {
      setIsOpen(false);
      onOpenRFQ();
      return;
    }
    handleSendMessage(label);
  };

  return (
    <div id="live-chat-floating-widget" className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="btn-open-live-chat"
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-600/50 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Open live technical chat"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div 
          id="live-chat-window"
          className="bg-slate-900 border border-slate-800 rounded-3xl w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  {t.chat.title}
                </h4>
                <span className="text-[11px] font-mono text-emerald-400">
                  ● {t.chat.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-slate-950/60 text-xs">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-1`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      isBot
                        ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-sm'
                        : 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>

                  <span className="text-[9px] font-mono text-slate-500 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Quick option pills if available */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 max-w-[90%]">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt.action, opt.label)}
                          className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-blue-950 border border-slate-800 hover:border-blue-700 text-[11px] text-blue-300 font-medium transition-colors cursor-pointer text-left"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] p-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce delay-200" />
                <span>Insinyur sedang mengetik...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder={t.chat.placeholder}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
