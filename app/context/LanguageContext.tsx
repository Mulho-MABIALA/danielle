'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { fr } from '../translations/fr';
import { it } from '../translations/it';
import type { Translations } from '../translations/fr';

export type Language = 'fr' | 'it';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  t: fr,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');
  const t = lang === 'fr' ? fr : it;
  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
