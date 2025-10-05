export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Sportique</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              XRPL 기반 블록체인 기술로 데이터주권을 되찾고, AI 기반 헬스케어 솔루션을 제공하는 플랫폼입니다.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  보답 (Bodab) 앱
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  XRPL 플랫폼
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  데이터 마켓플레이스
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  소개
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  채용
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  파트너십
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">지원</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  고객센터
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 Sportique. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
