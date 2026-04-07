import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logoImage from "../assets/mainLogo.png";

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="relative shrink-0 size-[48px]">
              <img 
                src={logoImage} 
                alt="Aadiyog Logo" 
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="flex items-start">
              {/* <p className="font-['Gistesy:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4c4c4c] text-[36px] tracking-[-0.6px]"> */}
                <span className='logo-name'>Aadiyog</span>
              {/* </p> */}
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`text-sm transition-colors ${
                currentPage === 'home' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`text-sm transition-colors ${
                currentPage === 'about' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavigation('how-it-works')}
              className={`text-sm transition-colors ${
                currentPage === 'how-it-works' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigation('pricing')}
              className={`text-sm transition-colors ${
                currentPage === 'pricing' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className={`text-sm transition-colors ${
                currentPage === 'blog' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('careers')}
              className={`text-sm transition-colors ${
                currentPage === 'careers' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Careers
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`text-sm transition-colors ${
                currentPage === 'contact' ? 'text-[#f37003]' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-sm"
              onClick={() => handleNavigation('dashboard')}
            >
              Sign In
            </Button>
            <Button 
              className="bg-[#f37003] hover:bg-[#d86302] text-white text-sm px-6"
            >
              Get Started
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'home' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'about' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('how-it-works')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'how-it-works' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavigation('pricing')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'pricing' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavigation('blog')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'blog' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigation('careers')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'careers' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`text-left px-4 py-2 text-sm transition-colors ${
                  currentPage === 'contact' ? 'text-[#f37003]' : 'text-foreground/70'
                }`}
              >
                Contact
              </button>
              {/* <div className="px-4 pt-4 flex flex-col gap-2">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button className="w-full bg-[#f37003] hover:bg-[#d86302] text-white">
                  Get Started
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
