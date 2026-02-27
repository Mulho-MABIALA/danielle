'use client';

import { createContext, useContext, ReactNode } from 'react';
import { fr } from '../translations/fr';
import type { Translations } from '../translations/fr';

interface LanguageContextType {
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({ t: fr });

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ t: fr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
