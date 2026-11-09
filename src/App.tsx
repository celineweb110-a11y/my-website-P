import React, { useState, useEffect } from 'react';
import { Language, ProductPillar } from './types';
import { products } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstantEstimator } from './components/InstantEstimator';
import { ProductGrid } from './components/ProductGrid';
import { ProductConfiguratorModal } from './components/ProductConfiguratorModal';
import { WhyPixora } from './components/WhyPixora';
import { GeoTrustCasablanca } from './components/GeoTrustCasablanca';
import { CaseStudies } from './components/CaseStudies';
import { QuoteModal } from './components/QuoteModal';
import { SampleKitModal } from './components/SampleKitModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [selectedProductForConfig, setSelectedProductForConfig] = useState<ProductPillar | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);
  const [activeQuoteConfig, setActiveQuoteConfig] = useState<{
    productId?: string;
    formatId?: string;
    paperId?: string;
    finishes?: string[];
    quantity?: number;
    turnaround?: 'standard' | 'express';
  }>({});

  // Sync HTML lang and dir attribute for Arabic RTL
  useEffect(() => {
    const isRtl = currentLang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang === 'fr' ? 'fr-MA' : currentLang === 'ar' ? 'ar-MA' : 'en';
  }, [currentLang]);

  // Open quote with specific pre-filled configuration
  const handleOpenQuoteWithConfig = (config: {
    productId: string;
    formatId: string;
    paperId: string;
    finishes: string[];
    quantity: number;
    turnaround: 'standard' | 'express';
  }) => {
    setActiveQuoteConfig(config);
    setQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = (productId?: string) => {
    setActiveQuoteConfig({
      productId: productId || 'chemises-rabat',
    });
    setQuoteModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setSelectedProductForConfig(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Global Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenQuoteModal={handleOpenGeneralQuote}
        onOpenSampleModal={() => setSampleModalOpen(true)}
        onSelectProduct={handleSelectProduct}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenGeneralQuote()}
          onOpenSampleModal={() => setSampleModalOpen(true)}
        />

        {/* Instant Price Estimator & Quote Calculator Widget */}
        <InstantEstimator
          currentLang={currentLang}
          onOpenQuoteWithConfig={handleOpenQuoteWithConfig}
          onOpenConfigurator={handleSelectProduct}
        />

        {/* 8 Product Pillars Grid */}
        <ProductGrid
          currentLang={currentLang}
          onSelectProduct={handleSelectProduct}
          onOpenQuoteModal={handleOpenGeneralQuote}
        />

        {/* Why PIXORA Section */}
        <WhyPixora
          currentLang={currentLang}
          onOpenSampleModal={() => setSampleModalOpen(true)}
        />

        {/* Local SEO Casablanca & Morocco Hub Section */}
        <GeoTrustCasablanca
          currentLang={currentLang}
          onOpenQuoteModal={() => handleOpenGeneralQuote()}
        />

        {/* Moroccan Corporate Case Studies */}
        <CaseStudies currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onSelectProduct={handleSelectProduct}
        onOpenQuoteModal={() => handleOpenGeneralQuote()}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Floating Localized WhatsApp Contact */}
      <WhatsAppButton currentLang={currentLang} />

      {/* Dedicated Interactive Product Configurator Modal */}
      {selectedProductForConfig && (
        <ProductConfiguratorModal
          product={selectedProductForConfig}
          currentLang={currentLang}
          onClose={() => setSelectedProductForConfig(null)}
          onProceedToQuote={handleOpenQuoteWithConfig}
        />
      )}

      {/* Multi-step B2B Quote Modal with Artwork Preflight */}
      {quoteModalOpen && (
        <QuoteModal
          initialConfig={activeQuoteConfig}
          currentLang={currentLang}
          onClose={() => setQuoteModalOpen(false)}
        />
      )}

      {/* Sample Box Request Modal */}
      {sampleModalOpen && (
        <SampleKitModal
          currentLang={currentLang}
          onClose={() => setSampleModalOpen(false)}
        />
      )}

    </div>
  );
}
