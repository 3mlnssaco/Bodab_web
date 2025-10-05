export function PartnersSection() {
  const partners = [
    {
      name: "호서대학교",
      type: "학술 파트너",
      description: "AI 헬스케어 연구 협력"
    },
    {
      name: "XRPL Foundation",
      type: "기술 파트너", 
      description: "블록체인 기술 지원"
    },
    {
      name: "의료기관",
      type: "의료 파트너",
      description: "진료 데이터 연동"
    },
    {
      name: "웨어러블 기업",
      type: "하드웨어 파트너",
      description: "IoT 기기 연동"
    },
    {
      name: "보험사",
      type: "비즈니스 파트너",
      description: "헬스케어 보험 연계"
    },
    {
      name: "정부기관",
      type: "정책 파트너",
      description: "디지털 헬스케어 정책"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            파트너십
          </h2>
          <p className="text-xl text-muted-foreground">
            혁신적인 헬스케어 생태계를 함께 만들어갑니다
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
