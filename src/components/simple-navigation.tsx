import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function SimpleNavigation() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
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
          <div className="hidden md:flex items-center gap-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
