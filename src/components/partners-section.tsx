import { useLanguage } from "@/contexts/LanguageContext";

export function PartnersSection() {
  const { t } = useLanguage();

  const partners = [
    {
      name: t('partners.hoseo.name'),
      type: t('partners.hoseo.type'),
      description: t('partners.hoseo.desc')
    },
    {
      name: t('partners.xrpl.name'),
      type: t('partners.xrpl.type'),
      description: t('partners.xrpl.desc')
    },
    {
      name: t('partners.medical.name'),
      type: t('partners.medical.type'),
      description: t('partners.medical.desc')
    },
    {
      name: t('partners.wearable.name'),
      type: t('partners.wearable.type'),
      description: t('partners.wearable.desc')
    },
    {
      name: t('partners.insurance.name'),
      type: t('partners.insurance.type'),
      description: t('partners.insurance.desc')
    },
    {
      name: t('partners.government.name'),
      type: t('partners.government.type'),
      description: t('partners.government.desc')
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 ? "🎓" : 
                     index === 1 ? "⛓️" :
                     index === 2 ? "🏥" :
                     index === 3 ? "⌚" :
                     index === 4 ? "🛡️" : "🏛️"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-2">
                  {partner.type}
                </p>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
