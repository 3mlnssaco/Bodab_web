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