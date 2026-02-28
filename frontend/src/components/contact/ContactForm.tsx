'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const response = await fetch('https://api-marketing-8tfx.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert(`Obrigado, ${formData.name}! Recebemos sua mensagem.`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Erro ao enviar');
      }
    } catch (error) {
      console.error('Erro na submissão:', error);
      alert('Ops! Nossa API está descansando. Tente novamente em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="min-h-screen pt-20 pb-24 md:py-32 bg-[#080808] px-6 md:px-12 lg:px-24 flex items-start md:items-center">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <span className="text-[#0055FF] text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 md:mb-6 block">
            Contact Us
          </span>

          <h2 className="text-[clamp(2.5rem,8vw,5rem)] leading-[1.0] font-black uppercase tracking-tighter text-white mb-8 md:mb-10">
            Let's build <br />
            <span className="text-[#0055FF] italic">something</span> big.
          </h2>

          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 border border-white/10 flex items-center justify-center group-hover:border-[#0055FF] transition-colors">
                <Mail className="text-zinc-500 group-hover:text-white" size={18} />
              </div>
              <p className="text-white text-sm md:text-base font-bold tracking-tight break-all">hello@agencyflow.com</p>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 border border-white/10 flex items-center justify-center group-hover:border-[#0055FF] transition-colors">
                <MapPin className="text-zinc-500 group-hover:text-white" size={18} />
              </div>
              <p className="text-white text-sm md:text-base font-bold tracking-tight">Digital Studio — Global</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] border border-white/5 p-6 md:p-12 relative w-full"
        >
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <label className="text-zinc-500 text-[10px] uppercase font-black tracking-widest block">Name</label>
              <input
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                className="w-full bg-transparent border-b border-white/10 py-2 md:py-3 text-white focus:outline-none focus:border-[#0055FF] transition-colors font-medium rounded-none disabled:opacity-50"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 text-[10px] uppercase font-black tracking-widest block">Email</label>
              <input
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                className="w-full bg-transparent border-b border-white/10 py-2 md:py-3 text-white focus:outline-none focus:border-[#0055FF] transition-colors font-medium rounded-none disabled:opacity-50"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-zinc-500 text-[10px] uppercase font-black tracking-widest block">Message</label>
              <textarea
                name="message"
                rows={3}
                required
                disabled={isSubmitting}
                value={formData.message}
                className="w-full bg-transparent border-b border-white/10 py-2 md:py-3 text-white focus:outline-none focus:border-[#0055FF] transition-colors font-medium resize-none rounded-none disabled:opacity-50"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-4 border border-white text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all duration-500 px-8 py-4 w-full justify-center mt-4 disabled:bg-zinc-800 disabled:border-zinc-800"
            >
              <span className="text-[12px] font-black uppercase tracking-[0.3em]">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};