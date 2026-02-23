"use client";

export default function ContactSection() {
    return (
        <section className="max-w-7xl mx-auto p-6 md:p-12 mb-20 relative z-10">
            <h2 className="text-4xl font-black mb-12 pixel-text cursor-blink">SECURE_COMM_CHANNEL</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <p className="font-mono text-xl leading-relaxed">
                        ESTABLISHING SECURE CONNECTION PROTOCOLS. CHOOSE YOUR PREFERRED METHOD OF INTERACTION:
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="bg-black text-white px-3 py-1 font-mono text-sm leading-none">[ID]</span>
                            <span className="font-mono text-xl">RIJO VARUGHESE</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="bg-black text-white px-3 py-1 font-mono text-sm leading-none">[LOC]</span>
                            <span className="font-mono text-xl">KOCHI, INDIA</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <a
                        href="mailto:rijovarghese450@gmail.com"
                        className="retro-border p-8 flex flex-col justify-center items-center group hover:bg-black transition-colors"
                    >
                        <span className="font-mono text-sm opacity-50 group-hover:text-white transition-colors">PROTOCOL://SMTP</span>
                        <span className="text-2xl font-black group-hover:text-white transition-colors mt-2">rijovarghese450@gmail.com</span>
                        <span className="mt-4 border border-black group-hover:border-white group-hover:text-white px-4 py-1 font-mono text-xs transition-colors">INITIATE_ENVOY</span>
                    </a>

                    <a
                        href="tel:+919605718477"
                        className="retro-border p-8 flex flex-col justify-center items-center group hover:bg-black transition-colors"
                    >
                        <span className="font-mono text-sm opacity-50 group-hover:text-white transition-colors">PROTOCOL://VOIP</span>
                        <span className="text-2xl font-black group-hover:text-white transition-colors mt-2">+91 9605718477</span>
                        <span className="mt-4 border border-black group-hover:border-white group-hover:text-white px-4 py-1 font-mono text-xs transition-colors">OPEN_VOICE_BRIDGE</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
