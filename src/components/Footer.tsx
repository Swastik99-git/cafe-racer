import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const socials = [
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Youtube, label: "YouTube", href: "#" },
    { Icon: Facebook, label: "Facebook", href: "#" },
  ];

  return (
    <footer className="bg-[#060606] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-widest text-off-white">
              VANTA MOTORCYCLES
            </h3>
            <p className="text-xs tracking-[0.3em] text-neutral-600 mt-2">
              CUSTOM BUILT TO RIDE
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 hover:text-accent hover:border-accent/40 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600 tracking-wide">
            © 2026 VANTA MOTORCYCLES
          </p>
          <div className="flex gap-6 text-xs tracking-[0.2em] text-neutral-600">
            <a href="#" className="hover:text-neutral-400 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">TERMS</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">PRESS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
