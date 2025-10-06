import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 md:py-20">
          {/* Hero Content */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              <span className="block sm:inline">Sportique의 두 가지 서비스로</span>{" "}
              <span className="block sm:inline">건강한 미래를 만듭니다</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="block sm:inline"><span className="font-semibold">보답(Bodab)</span>으로 AI 헬스케어를 경험하고</span>{" "}
              <span className="block sm:inline"><span className="font-semibold">UniqData</span>에서 데이터 주권을 실현하세요</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
              <Button
                size="lg"
                className={`w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto transition-all duration-300 ${
                  hoveredButton === "start"
                    ? "transform scale-105 shadow-2xl"
                    : ""
                }`}
                onMouseEnter={() => setHoveredButton("start")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                시작하기
                <ArrowRight
                  className={`ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${
                    hoveredButton === "start" ? "translate-x-1" : ""
                  }`}
                />
              </Button>
              <Link to="/bodab">
                <Button
                  size="lg"
                  variant="outline"
                  className={`w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto bg-transparent transition-all duration-300 ${
                    hoveredButton === "learn"
                      ? "transform scale-105 shadow-2xl bg-primary-foreground/10"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredButton("learn")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* Mobile: Single phone */}
            <div className="md:hidden flex justify-center">
              <div className="relative w-64 h-[500px] animate-float hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-background p-8 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-3xl mb-6 flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                      <span className="text-6xl">📱</span>
                    </div>
                    <div className="text-center space-y-3 w-full">
                      <div className="h-4 bg-muted rounded w-40 mx-auto animate-pulse" />
                      <div
                        className="h-3 bg-muted rounded w-32 mx-auto animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="h-3 bg-muted rounded w-36 mx-auto animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Three phones */}
            <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
              {/* Phone 1 */}
              <div
                className="relative w-56 lg:w-64 h-[450px] lg:h-[500px] animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ animationDelay: "0s" }}
              >
                <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden hover:border-primary/20 transition-colors duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-background p-6 lg:p-8 flex flex-col items-center justify-center">
                    <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary rounded-2xl mb-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl lg:text-4xl">📊</span>
                    </div>
                    <div className="text-center">
                      <div className="h-4 bg-muted rounded w-28 lg:w-32 mb-2 animate-pulse" />
                      <div
                        className="h-3 bg-muted rounded w-20 lg:w-24 mx-auto animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Center (larger) */}
              <div
                className="relative w-64 lg:w-72 h-[500px] lg:h-[550px] animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden hover:border-primary/20 transition-colors duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-background p-6 lg:p-8 flex flex-col items-center justify-center">
                    <div className="w-28 lg:w-32 h-28 lg:h-32 bg-primary/10 rounded-3xl mb-6 flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300">
                      <span className="text-5xl lg:text-6xl">📱</span>
                    </div>
                    <div className="text-center space-y-3 w-full">
                      <div className="h-4 bg-muted rounded w-36 lg:w-40 mx-auto animate-pulse" />
                      <div
                        className="h-3 bg-muted rounded w-28 lg:w-32 mx-auto animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="h-3 bg-muted rounded w-32 lg:w-36 mx-auto animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3 */}
              <div
                className="relative w-56 lg:w-64 h-[450px] lg:h-[500px] animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
                style={{ animationDelay: "2s" }}
              >
                <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden hover:border-primary/20 transition-colors duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-background p-6 lg:p-8 flex flex-col items-center justify-center">
                    <div className="w-16 lg:w-20 h-16 lg:h-20 bg-primary rounded-2xl mb-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl lg:text-4xl">⛓️</span>
                    </div>
                    <div className="text-center">
                      <div className="h-4 bg-muted rounded w-28 lg:w-32 mb-2 animate-pulse" />
                      <div
                        className="h-3 bg-muted rounded w-20 lg:w-24 mx-auto animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12">
            <Button
              variant="secondary"
              className="w-full sm:w-auto h-11 md:h-12 px-5 md:px-6 hover:scale-105 transition-transform duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              App Store
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto h-11 md:h-12 px-5 md:px-6 hover:scale-105 transition-transform duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
