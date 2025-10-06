import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

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
      <div className="container mx-auto px-4 lg:px-8">
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
              to="/woorijib"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.woorijib')}
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
            <Link
              to="/qtech"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.qtech')}
            </Link>
            <Link
              to="/scaleup"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.vision')}
            </Link>

            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="hover:bg-secondary/20 font-medium text-sm px-3"
              aria-label="Toggle language"
            >
              {language === "ko" ? "EN" : "KR"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="hover:bg-secondary/20 font-medium text-sm px-3"
              aria-label="Toggle language"
            >
              {language === "ko" ? "EN" : "KR"}
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
                to="/woorijib"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.woorijib')}
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
              <Link
                to="/qtech"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.qtech')}
              </Link>
              <Link
                to="/scaleup"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.vision')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
