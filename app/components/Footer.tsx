'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Accueil', href: '#accueil' },
      { name: 'À propos', href: '#apropos' },
      { name: 'Formations', href: '#formations' },
      { name: 'Compétences', href: '#competences' },
      { name: 'Expériences', href: '#experiences' },
      { name: 'Projets', href: '#projets' },
      { name: 'Veille', href: '#veille' },
      { name: 'Technologies', href: '#technologies' },
    ],
    contact: [
      { name: 'Email', href: 'mailto:vhanndanielle@gmail.com', icon: '📧' },
      { name: 'Téléphone', href: 'tel:+33771898971', icon: '📱' },
      { name: 'Localisation', href: '#', icon: '📍', text: 'Limoges, France' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )
      },
      {
        name: 'GitHub',
        href: 'https://github.com',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        )
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-950 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Danielle
            </h3>
            <p className="text-slate-400 dark:text-slate-500 mb-6 leading-relaxed">
              Administratrice systèmes et réseaux passionnée par les nouvelles technologies et l'infrastructure IT.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 dark:text-slate-500 hover:text-slate-200 dark:hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-slate-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus de liens */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sections</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 dark:text-slate-500 hover:text-slate-200 dark:hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-slate-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:vhanndanielle@gmail.com"
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300 flex items-start gap-2"
                >
                  <span className="text-lg">📧</span>
                  <span className="break-all">vhanndanielle@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33771898971"
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-lg">📱</span>
                  <span>+33 7 71 89 89 71</span>
                </a>
              </li>
              <li className="text-slate-400 flex items-start gap-2">
                <span className="text-lg">📍</span>
                <span>Limoges, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-slate-800 dark:border-slate-900 my-8"></div>

        {/* Section bas */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 dark:text-slate-500 text-sm text-center md:text-left">
            <p>
              &copy; {currentYear} Danielle. Tous droits réservés.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-slate-200 dark:hover:text-slate-300 transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-slate-200 dark:hover:text-slate-300 transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>

        {/* Message de crédit */}
        {/* <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Conçu et développé avec <span className="text-red-500">♥</span> par Danielle
          </p>
        </div> */}
      </div>
    </footer>
  );
}
