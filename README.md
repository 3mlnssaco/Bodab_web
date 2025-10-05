# Sportique React

Next.js 프로젝트를 React + Vite로 변환한 Sportique 웹 애플리케이션입니다.

## ? 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 의존성 설치

```bash
npm install
```

2. 개발 서버 실행

```bash
npm run dev
```

3. 브라우저에서 `http://localhost:3000` 접속

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## ? 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/              # UI 컴포넌트 (Button, etc.)
│   ├── navigation.tsx   # 메인 네비게이션
│   ├── hero-section.tsx # 히어로 섹션
│   └── ...
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈페이지
│   ├── BodabPage.tsx   # Bodab 페이지
│   └── XRPLPage.tsx    # XRPL 페이지
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## ? 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **React Router** - 클라이언트 사이드 라우팅
- **Tailwind CSS** - 스타일링
- **Radix UI** - 접근성 우선 UI 컴포넌트
- **Lucide React** - 아이콘

## ? 디자인 시스템

- **색상**: Primary (#165eec), Secondary (#9de5c1)
- **폰트**: Pretendard Variable
- **애니메이션**: CSS 애니메이션 + Tailwind CSS
- **반응형**: Mobile-first 접근법

## ? 페이지

1. **홈페이지** (`/`) - 메인 랜딩 페이지
2. **Bodab 페이지** (`/bodab`) - 헬스케어 앱 소개
3. **XRPL 페이지** (`/xrpl`) - 블록체인 플랫폼 소개

## ? 주요 기능

- ? 반응형 디자인
- ? 스무스 스크롤 네비게이션
- ? 인터섹션 옵저버 애니메이션
- ? 다국어 지원 (한국어/영어)
- ? 모바일 메뉴
- ? SEO 최적화

## ? 배포

### Vercel

```bash
npm run build
# dist 폴더를 Vercel에 배포
```

### Netlify

```bash
npm run build
# dist 폴더를 Netlify에 배포
```

## ? 개발 가이드

### 새로운 컴포넌트 추가

1. `src/components/` 디렉토리에 컴포넌트 파일 생성
2. TypeScript 인터페이스 정의
3. Tailwind CSS로 스타일링
4. 필요시 Storybook 스토리 추가

### 새로운 페이지 추가

1. `src/pages/` 디렉토리에 페이지 컴포넌트 생성
2. `src/App.tsx`에 라우트 추가
3. 네비게이션에 링크 추가

## ? 문제 해결

### 빌드 오류

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 타입 오류

```bash
# TypeScript 타입 체크
npm run lint
```

## ? 라이선스

MIT License
