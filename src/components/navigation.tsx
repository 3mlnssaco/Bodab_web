import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                S
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">Sportique</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/eoullim"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.eoullim')}
            </Link>
            <Link
              to="/bodab"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.bodab')}
            </Link>
            <Link
              to="/nest"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.nest')}
            </Link>
            <Link
              to="/uniqdata"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.uniqdata')}
            </Link>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="hover:bg-secondary/20 font-medium text-sm px-3 flex items-center gap-1"
                aria-label="Select language"
              >
                <span>{language === "ko" ? "🇰🇷" : "🇺🇸"}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setLanguage("ko");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === "ko" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      }`}
                    >
                      🇰🇷 Korean
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === "en" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      }`}
                    >
                      🇺🇸 English
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Toggle for Mobile */}
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
              className="hover:bg-secondary/20 text-xs px-2 py-1"
              aria-label="Toggle language"
            >
              {language === "ko" ? "🇺🇸" : "🇰🇷"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-secondary/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/eoullim"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.eoullim')}
              </Link>
              <Link
                to="/bodab"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.bodab')}
              </Link>
              <Link
                to="/nest"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.nest')}
              </Link>
              <Link
                to="/uniqdata"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.uniqdata')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
