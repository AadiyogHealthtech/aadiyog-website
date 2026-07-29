import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { BlogPage } from "./pages/BlogPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { SubscriptionPage } from "./pages/dashboard/SubscriptionPage";
import { UpgradePage } from "./pages/dashboard/UpgradePage";
import { CancellationPage } from "./pages/dashboard/CancellationPage";
import { SettingsPage } from "./pages/dashboard/SettingsPage";
import { BillingPage } from "./pages/dashboard/BillingPage";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import './App.css'

function pageIdFromPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, "") || "/";

  switch (path) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/how-it-works":
      return "how-it-works";
    case "/pricing":
      return "pricing";
    case "/blog":
      return "blog";
    case "/careers":
      return "careers";
    case "/contact":
      return "contact";
    case "/privacy-policy":
      return "privacy-policy";

    case "/dashboard":
      return "dashboard";
    case "/dashboard/subscription":
      return "dashboard-subscription";
    case "/dashboard/upgrade":
      return "dashboard-upgrade";
    case "/dashboard/cancel":
      return "dashboard-cancel";
    case "/dashboard/settings":
      return "dashboard-settings";
    case "/dashboard/billing":
      return "dashboard-billing";

    default: {
      if (path.startsWith("/dashboard")) return "dashboard";
      return "home";
    }
  }
}

function pathFromPageId(page: string): string {
  switch (page) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "how-it-works":
      return "/how-it-works";
    case "pricing":
      return "/pricing";
    case "blog":
      return "/blog";
    case "careers":
      return "/careers";
    case "contact":
      return "/contact";
    case "privacy-policy":
      return "/privacy-policy";

    case "dashboard":
      return "/dashboard";
    case "dashboard-subscription":
      return "/dashboard/subscription";
    case "dashboard-upgrade":
      return "/dashboard/upgrade";
    case "dashboard-cancel":
      return "/dashboard/cancel";
    case "dashboard-settings":
      return "/dashboard/settings";
    case "dashboard-billing":
      return "/dashboard/billing";

    default: {
      if (page?.startsWith("dashboard")) return "/dashboard";
      return "/";
    }
  }
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = pageIdFromPath(location.pathname);

  const handleNavigate = (page: string) => {
    navigate(pathFromPageId(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <HomePage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <AboutPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/how-it-works"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <HowItWorksPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/pricing"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <PricingPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/blog"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <BlogPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/careers"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <CareersPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <ContactPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <div className="min-h-screen bg-background">
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
              <PrivacyPolicyPage />
            </main>
            <Footer onNavigate={handleNavigate} />
          </div>
        }
      />

      {/* Dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <DashboardHome onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/subscription"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <SubscriptionPage onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/upgrade"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <UpgradePage onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/cancel"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <CancellationPage onNavigate={handleNavigate} />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <SettingsPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/billing"
        element={
          <DashboardLayout currentPage={currentPage} onNavigate={handleNavigate}>
            <BillingPage />
          </DashboardLayout>
        }
      />

      {/* Fallback */}
      <Route path="/dashboard/*" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}