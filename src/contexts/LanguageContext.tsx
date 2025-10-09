import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.woorijib': '우리집',
    'nav.eoullim': '어울림',
    'nav.bodab': 'Bodab',
    'nav.nest': 'Nest',
    'nav.uniqdata': 'UniQdata',
    'nav.qtech': 'Q-Tech',
    'nav.vision': '비전',

    // Q-Tech Page
    'qtech.title': 'Q-Tech',
    'qtech.subtitle': 'SportiQue의 미래를 만드는 곳',
    'qtech.description': 'AI, IoT, 블록체인 기술로\n케어의 새로운 패러다임을 연구합니다',
    'qtech.achievement': '2025 한이음 드림업 - 돌봄 로봇 개발 완료',
    'qtech.mission': '우리의 미션',
    'qtech.mission.statement': '기술로 모든 세대가 더 건강하고 행복한 삶을 살 수 있도록',
    'qtech.research': '주요 연구 분야',
    'qtech.research.robot': '돌봄 로봇',
    'qtech.research.robot.desc': '어르신과 함께하는 스마트 반려 로봇',
    'qtech.research.blockchain': '블록체인',
    'qtech.research.blockchain.desc': 'XRPL 기반 안전한 건강 데이터 관리',
    'qtech.cta.title': '작은 기술로 큰 변화를',
    'qtech.cta.desc': '어르신들이 더 편하게 사용할 수 있는 기술을 연구합니다',

    // Home Page
    'home.hero.title': '가족의 모든 세대를 잇는\n건강한 연결고리',
    'home.hero.subtitle': '20대부터 80대까지, 각 세대가 필요한 순간에\n가장 적절한 케어를 제공하는 생애주기 맞춤 플랫폼',
    'home.services.title': '세대별 맞춤 솔루션',
    'home.eoullim.age': '50-60대',
    'home.eoullim.title': '어울림',
    'home.eoullim.subtitle': '인생 2막',
    'home.eoullim.feature1': '또래와 함께하는 운동',
    'home.eoullim.feature2': '취미 활동과 동호회',
    'home.eoullim.feature3': '건강한 생활 습관',
    'home.bodab.age': '60-70대',
    'home.bodab.title': 'Bodab',
    'home.bodab.subtitle': '건강 관리',
    'home.bodab.feature1': '음성 인터페이스',
    'home.bodab.feature2': '복약 알림',
    'home.bodab.feature3': 'AI 건강 상담',
    'home.nest.age': '70대+',
    'home.nest.title': 'Nest',
    'home.nest.subtitle': '전문 케어',
    'home.nest.feature1': '24시간 전문 케어',
    'home.nest.feature2': '가족과 실시간 소통',
    'home.nest.feature3': '투명한 케어 기록',
    'home.uniqdata.title': '병원비, 이제 돌려받으세요',
    'home.uniqdata.subtitle': '검진받으며 쓴 돈, 그냥 버리지 마세요.\n내 의료 데이터를 직접 판매하고 수익을 만드세요.',
    'home.uniqdata.age': '전 연령',
    'home.uniqdata.powered': 'Powered by XRPL',
    'home.uniqdata.platform': 'XRPL 기반 의료 데이터 직거래 플랫폼',
    'home.uniqdata.desc': '블록체인으로 투명하고 안전하게 데이터를 거래합니다',
    'home.uniqdata.feature1': '병원 검진 데이터를 XRPL 블록체인에 안전하게 보관',
    'home.uniqdata.feature2': '익명화된 내 데이터를 제약사·연구소에 직접 판매',
    'home.uniqdata.feature3': 'XRP로 즉시 정산되는 투명한 수익 분배',
    'home.uniqdata.feature4': '내 데이터는 내가 소유하고 내가 판매',
    'home.vision.title': '생애 전주기 케어 플랫폼',
    'home.vision.subtitle': '한 번 시작하면 평생 함께하는 가족 건강 파트너.\n각 세대가 필요한 순간에 가장 적절한 케어를 제공합니다.',
    'home.vision.step1.title': '50-60대: 건강한 인생 2막',
    'home.vision.step1.desc': '어울림에서 또래와 함께 운동하며 건강한 노후를 준비합니다.',
    'home.vision.step2.title': '60-70대: 자립적 건강 관리',
    'home.vision.step2.desc': 'Bodab의 AI 헬스케어로 스스로 건강을 관리합니다.',
    'home.vision.step3.title': '70대+: 전문적인 케어',
    'home.vision.step3.desc': 'Nest에서 24시간 전문적인 케어를 받으며 편안한 노후를 보냅니다.',
    'home.vision.step4.title': '전 연령: 데이터 가치 실현',
    'home.vision.step4.desc': 'UniQdata로 의료 데이터를 안전하게 관리하고 수익을 창출합니다.',

    // Woorijib Page
    'woorijib.title': '우리집',
    'woorijib.subtitle': '가족만의 특별한 공간',
    'woorijib.desc': '접근성 향상을 위한 연구 프로젝트\n가족 소통의 새로운 패러다임 탐구',

    // Eoullim Page
    'eoullim.title': '어울림',
    'eoullim.subtitle': '인생 2막을 위한 특별한 공간',
    'eoullim.desc': '50-60대를 위한 프리미엄 피트니스 & 소셜 클럽\n건강한 몸과 마음, 그리고 새로운 친구들',

    // Nest Page
    'nest.title': 'Nest',
    'nest.subtitle': '따뜻한 보금자리, 전문적인 케어',
    'nest.desc': '70대 이상 어르신을 위한 프리미엄 요양 시설\n가족과 함께하는 투명한 케어 시스템',

    // Vision Page
    'vision.title': '우리가 바라보는 가족',
    'vision.subtitle': '부모님을 걱정하는 자녀의 마음,\n자녀에게 짐이 되고 싶지 않은 부모님의 마음,\n우리는 그 두 마음을 모두 이해합니다.',
    'vision.cta': '지금 시작하세요',
    'vision.cta.desc': '연령대별 맞춤 서비스를 선택하세요',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.woorijib': 'Woorijib',
    'nav.eoullim': 'Eoullim',
    'nav.bodab': 'Bodab',
    'nav.nest': 'Nest',
    'nav.uniqdata': 'UniQdata',
    'nav.qtech': 'Q-Tech',
    'nav.vision': 'Vision',

    // Q-Tech Page
    'qtech.title': 'Q-Tech',
    'qtech.subtitle': 'Where SportiQue\'s Future is Made',
    'qtech.description': 'Researching new care paradigms\nwith AI, IoT, and blockchain technology',
    'qtech.achievement': '2025 Hanium Dream Up - Care Robot Development Completed',
    'qtech.mission': 'Our Mission',
    'qtech.mission.statement': 'Enabling all generations to live healthier and happier lives through technology',
    'qtech.research': 'Main Research Areas',
    'qtech.research.robot': 'Care Robot',
    'qtech.research.robot.desc': 'Smart companion robot for elderly care',
    'qtech.research.blockchain': 'Blockchain',
    'qtech.research.blockchain.desc': 'Secure health data management based on XRPL',
    'qtech.cta.title': 'Big Changes from Small Technology',
    'qtech.cta.desc': 'Researching technology that makes life easier for the elderly',

    // Home Page
    'home.hero.title': 'Connecting All Generations\nwith Healthy Bonds',
    'home.hero.subtitle': 'From 20s to 80s, providing the most appropriate care\nwhen each generation needs it most',
    'home.services.title': 'Age-Tailored Solutions',
    'home.eoullim.age': '50s-60s',
    'home.eoullim.title': 'Eoullim',
    'home.eoullim.subtitle': 'Second Act of Life',
    'home.eoullim.feature1': 'Exercise with peers',
    'home.eoullim.feature2': 'Hobbies and clubs',
    'home.eoullim.feature3': 'Healthy lifestyle',
    'home.bodab.age': '60s-70s',
    'home.bodab.title': 'Bodab',
    'home.bodab.subtitle': 'Health Management',
    'home.bodab.feature1': 'Voice interface',
    'home.bodab.feature2': 'Medication reminders',
    'home.bodab.feature3': 'AI health consultation',
    'home.nest.age': '70+',
    'home.nest.title': 'Nest',
    'home.nest.subtitle': 'Professional Care',
    'home.nest.feature1': '24/7 professional care',
    'home.nest.feature2': 'Real-time family communication',
    'home.nest.feature3': 'Transparent care records',
    'home.uniqdata.title': 'Get Your Hospital Bills Back',
    'home.uniqdata.subtitle': 'Don\'t let your medical expenses go to waste.\nSell your medical data and create income.',
    'home.uniqdata.age': 'All Ages',
    'home.uniqdata.powered': 'Powered by XRPL',
    'home.uniqdata.platform': 'XRPL-based Medical Data Marketplace',
    'home.uniqdata.desc': 'Trade data transparently and securely with blockchain',
    'home.uniqdata.feature1': 'Store medical checkup data securely on XRPL blockchain',
    'home.uniqdata.feature2': 'Sell anonymized data directly to pharma & research institutions',
    'home.uniqdata.feature3': 'Transparent revenue distribution settled instantly in XRP',
    'home.uniqdata.feature4': 'Your data, your ownership, your sale',
    'home.vision.title': 'Lifetime Care Platform',
    'home.vision.subtitle': 'A lifelong family health partner.\nProviding the most appropriate care when each generation needs it.',
    'home.vision.step1.title': '50s-60s: Healthy Second Act',
    'home.vision.step1.desc': 'Prepare for a healthy retirement by exercising with peers at Eoullim.',
    'home.vision.step2.title': '60s-70s: Independent Health Management',
    'home.vision.step2.desc': 'Manage your health independently with Bodab\'s AI healthcare.',
    'home.vision.step3.title': '70+: Professional Care',
    'home.vision.step3.desc': 'Enjoy comfortable retirement with 24/7 professional care at Nest.',
    'home.vision.step4.title': 'All Ages: Data Value Realization',
    'home.vision.step4.desc': 'Securely manage medical data and generate revenue with UniQdata.',

    // Woorijib Page
    'woorijib.title': 'Woorijib',
    'woorijib.subtitle': 'A Special Space for Families',
    'woorijib.desc': 'Research project for accessibility improvement\nExploring new paradigms in family communication',

    // Eoullim Page
    'eoullim.title': 'Eoullim',
    'eoullim.subtitle': 'A Special Space for Life\'s Second Act',
    'eoullim.desc': 'Premium fitness & social club for those in their 50s-60s\nHealthy body and mind, and new friends',

    // Nest Page
    'nest.title': 'Nest',
    'nest.subtitle': 'Warm Home, Professional Care',
    'nest.desc': 'Premium care facility for seniors 70+\nTransparent care system with family',

    // Vision Page
    'vision.title': 'The Family We Envision',
    'vision.subtitle': 'The hearts of children worried about their parents,\nThe hearts of parents not wanting to be a burden,\nWe understand both hearts.',
    'vision.cta': 'Start Now',
    'vision.cta.desc': 'Choose a service tailored to your age',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};