import { Facebook, Twitter, Instagram, Linkedin, Store, Youtube } from "lucide-react";
import logoImage from "../assets/mainLogo.png";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const footerLinks = {
  product: [
    { label: "Features", href: "#", page: "home" },
    { label: "Pricing", href: "#", page: "pricing" },
    { label: "How It Works", href: "#", page: "how-it-works" },
    { label: "Updates", href: "#", page: "blog" },
  ],
  company: [
    { label: "About Us", href: "#", page: "about" },
    { label: "Careers", href: "#", page: "careers" },
    { label: "Blog", href: "#", page: "blog" },
    { label: "Press", href: "#", page: "contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#", page: "home" },
    { label: "Terms of Service", href: "#", page: "home" },
    { label: "Cookie Policy", href: "#", page: "home" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61554715205995", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/aadiyog-healthtech/",
    label: "LinkedIn",
  },
  { icon: Youtube, href: "https://www.youtube.com/@AadiyogHealthtech", label: "YouTube" },
];

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  const handleSocialLinkClick = (index) => {
    window.open(socialLinks[index].href);
  };
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0 size-[48px]">
                    <img
                      src={logoImage}
                      alt="Aadiyog Logo"
                      className="absolute inset-0 size-full object-cover"
                    />
                  </div>
                  <div className="flex items-start">
                    <span className="logo-name">Aadiyog</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed mb-6">
                Your holistic fitness companion for personalized yoga coaching
                and community support.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="cursor-pointer h-9 w-9 rounded-lg bg-white border border-border hover:border-[#f37003]/30 flex items-center justify-center text-foreground/60 hover:text-[#f37003] transition-all hover:shadow-sm"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2025 Aadiyog. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => handleLinkClick("home")}
                className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick("home")}
                className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick("home")}
                className="text-sm text-foreground/60 hover:text-[#f37003] transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
