
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-brand-primary" />
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text-primary">TruthLens</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
