'use client';

import { useState } from 'react';
import SplashScreen from './SplashScreen';

export default function HomeWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}
      <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}
