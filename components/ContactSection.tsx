"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="max-w-7xl mx-auto p-6 md:p-12 mb-20 relative z-10 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black mb-12 pixel-text cursor-blink fluid-h2"
            >
                SECURE_COMM_CHANNEL
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 md:space-y-8"
                >
                    <p className="font-mono text-lg md:text-xl leading-relaxed">
                        ESTABLISHING SECURE CONNECTION PROTOCOLS. CHOOSE YOUR PREFERRED METHOD OF INTERACTION:
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="bg-black text-white p-2 font-mono text-sm leading-none flex items-center justify-center">
                                <User size={16} />
                            </span>
                            <span className="font-mono text-lg md:text-xl">RIJO VARUGHESE</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="bg-black text-white p-2 font-mono text-sm leading-none flex items-center justify-center">
                                <MapPin size={16} />
                            </span>
                            <span className="font-mono text-lg md:text-xl">KOCHI, INDIA</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-4">
                    <motion.a
                        href="mailto:rijovarghese450@gmail.com"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="retro-border invert-hover p-6 md:p-8 flex flex-col justify-center items-center transition-all bg-white"
                    >
                        <Mail className="mb-2" size={24} />
                        <span className="font-mono text-[10px] md:text-sm opacity-50">PROTOCOL://SMTP</span>
                        <span className="text-lg md:text-2xl font-black mt-2 break-all text-center">rijovarghese450@gmail.com</span>
                        <span className="mt-4 border border-black px-4 py-1 font-mono text-xs">INITIATE_ENVOY</span>
                    </motion.a>

                    <motion.a
                        href="tel:+919605718477"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="retro-border invert-hover p-6 md:p-8 flex flex-col justify-center items-center transition-all bg-white"
                    >
                        <Phone className="mb-2" size={24} />
                        <span className="font-mono text-[10px] md:text-sm opacity-50">PROTOCOL://VOIP</span>
                        <span className="text-lg md:text-2xl font-black mt-2">+91 9605718477</span>
                        <span className="mt-4 border border-black px-4 py-1 font-mono text-xs">OPEN_VOICE_BRIDGE</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
