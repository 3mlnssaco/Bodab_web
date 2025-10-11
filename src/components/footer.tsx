import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Sportique</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link
                  to="/bodab"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.bodab')}
                </Link>
              </li>
              <li>
                <a
                  href="https://uniqdata.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.uniqdata')}
                </a>
              </li>
              <li>
                <Link
                  to="/xrpl"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.xrpl')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.about')}
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@sportique.biz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sportique.biz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.partnership')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="mailto:contact@sportique.biz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.customer')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sportique.biz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.faq')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sportique.biz"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <a
                href="mailto:contact@sportique.biz"
                className="hover:text-primary-foreground transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="mailto:contact@sportique.biz"
                className="hover:text-primary-foreground transition-colors"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
