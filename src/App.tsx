import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { BlogPage } from "./pages/BlogPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import './App.css'
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Check if current page is a dashboard page
    if (currentPage.startsWith('dashboard')) {
      const dashboardContent = () => {
        switch (currentPage) {
          case 'dashboard':
            return <DashboardHome onNavigate={handleNavigate} />;
          case 'dashboard-subscription':
            return <SubscriptionPage onNavigate={handleNavigate} />;
          case 'dashboard-upgrade':
            return <UpgradePage onNavigate={handleNavigate} />;
          case 'dashboard-cancel':
            return <CancellationPage onNavigate={handleNavigate} />;
          case 'dashboard-settings':
            return <SettingsPage />;
          case 'dashboard-billing':
            return <BillingPage />;
          default:
            return <DashboardHome onNavigate={handleNavigate} />;
        }
      };

      return (
        <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
          {dashboardContent()}
        </DashboardLayout>
      );
    }

    // Public Pages
    return (
      <div className="min-h-screen bg-background">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {(() => {
            switch (currentPage) {
              case 'home':
                return <HomePage />;
              case 'about':
                return <AboutPage />;
              case 'how-it-works':
                return <HowItWorksPage />;
              case 'pricing':
                return <PricingPage />;
              case 'blog':
                return <BlogPage />;
              case 'careers':
                return <CareersPage />;
              case 'contact':
                return <ContactPage />;
              default:
                return <HomePage />;
            }
          })()}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  };

  return renderPage();
}