import { PageLayout } from "@/components/page-layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WoorijibPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('woorijib.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('woorijib.subtitle')}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t('woorijib.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">가족 전용 메신저</h3>
              <p className="text-gray-600">광고 없는 깨끗한 가족 소통 공간</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">자동 앨범 정리</h3>
              <p className="text-gray-600">AI가 자동으로 사진과 동영상을 정리</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">가족 일정 공유</h3>
              <p className="text-gray-600">중요한 가족 일정을 함께 관리</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👴</div>
              <h3 className="text-xl font-semibold mb-2">부모님 모드</h3>
              <p className="text-gray-600">큰 글씨와 간편한 인터페이스</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">건강 체크</h3>
              <p className="text-gray-600">가족 구성원의 건강 상태 확인</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">프라이버시 보장</h3>
              <p className="text-gray-600">가족 데이터의 안전한 보호</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">접근성 향상 연구 프로젝트</h2>
          <p className="text-xl mb-8 opacity-90">
            가족 소통의 새로운 미래를 함께 만들어갑니다
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            프로젝트 참여하기
          </button>
        </div>
      </section>
    </PageLayout>
  );
}