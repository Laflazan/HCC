"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/contact-bg.png"
          alt="HCC Avukatlık Bürosu"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-16 bg-gold mb-8" />

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight"
            >
              İletişime Geçin
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-white/80 leading-relaxed"
            >
              Hukuki ihtiyaçlarınız doğrultusunda bizimle iletişime geçebilirsiniz.
              Uzman ekibimiz, size en uygun çözümü sunmak için hazırdır.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Adres</p>
                  <p className="mt-1 text-white">
                    Balmumcu Mah. Gazi Umur Paşa Sok. No:24/7
                    <br />
                    Beşiktaş / İstanbul
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Telefon</p>
                  <p className="mt-1 text-white">0212 216 07 24</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">E-posta</p>
                  <p className="mt-1 text-white">info@hcc.av.tr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/60 uppercase tracking-wider">Çalışma Saatleri</p>
                  <p className="mt-1 text-white">Pazartesi – Cuma, 09:00 – 18:00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 lg:p-12 border border-white/20 rounded-2xl"
          >
            <h3 className="font-serif text-2xl font-medium text-white">
              Bize Mesaj Gönderin
            </h3>

            <p className="mt-2 text-white/70">
              Taleplerinize en kısa sürede dönüş yapılacaktır.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">
                  Ad Soyad
                </label>
                <Input
                  type="text"
                  required
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  E-posta
                </label>
                <Input
                  type="email"
                  required
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Şirket / Kurum (Opsiyonel)
                </label>
                <Input
                  type="text"
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Mesajınız
                </label>
                <Textarea
                  required
                  rows={5}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-black hover:bg-white/90"
              >
                Mesaj Gönder
              </Button>

              <p className="text-xs text-white/50 text-center">
                Bu formu göndererek gizlilik politikamızı kabul etmiş olursunuz.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}