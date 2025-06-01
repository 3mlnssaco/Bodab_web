// ✅ language.js

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    
    // 저장된 언어 불러오기
    let currentLang = localStorage.getItem("language") || "ko";

    const translations = {
        ko: {
            logo: "보답",
            about: "소개",
            vision: "비전",
            greeting : "인사말",
            team : "조직",
            door : "활동",
            healthcare : "헬스케어",
            socialValue: "사회적 가치",
            programs: "프로그램",
            news: "개발소식",
            contact: "문의사항",
            mainTitle: "보답<span class='normal-text'>은</span>",
            mainDesc: "맞춤운동과 커뮤니티로 <br> 건강한 삶과 행복한 노년을 함께합니다",
            firstVision: "건강하고 활기찬 하루의 시작",
            extrasub1 : "활동적인 스포츠로 신체적 건강 증진",
            extrasub2 : "서로 소통하며 정신적 건강 회복",
            extrasub3 : "행복한 삶을 위한 지속적인 헬스케어",
            secondVision: "라이프스타일",
            graph1: "60대 이상 운동 실천율 변화",
            graph2: "지난 15년 동안 운동 실천율이<br>꾸준히 증가하고 있습니다.<br>앞으로의 시니어 운동에 대한<br>관심과 필요성이 점차 확대될 것입니다.",
            homevision1: "비전",
            homevision2: "니어 헬스케어를 기반한<br>사회적 갈등 해소와 가치 증진으로<br>우리의 비전은 시대를 앞서나갑니다.",
            extraVision: "함께 만들어가는",
            footerText: "© 2025 보답. 모든 권리 보유.",
            vision: "비전",
            p1vision: "우리의 비전은 시니어층을 위한 혁신적인 공유 플랫폼을 구축하는 것입니다.<br>단순한 서비스 제공을 넘어, 운동을 매개체로 시니어들이 자연스럽게 모이고 소통할 수 있는 공간을 만들어 나갑니다.<br>현대 사회에서 건강 문제는 시니어층의 가장 중요한 관심사 중 하나이며, <br>우리는 이를 해결하기 위해 헬스케어 서비스와 커뮤니티 기능을 결합하여 보다 체계적이고 지속 가능한 솔루션을 제공합니다. <br>이를 통해 어르신들의 일상에 활력을 되찾고, 신체적 건강뿐만 아니라 정신적 행복까지 증진시키는 것을 목표로 합니다.",
            vision2: "방향성",
            p2vision: "우리 회사는 시니어층을 위한 혁신적인 공유 플랫폼을 지향합니다.<br>운동을 매개로 어르신들이 자연스럽게 모이고 소통할 수 있는 공간을 만들고자 하며,<br>헬스케어 서비스와 커뮤니티 기능을 결합해 건강한 일상과 정서적 행복을 함께 제공합니다.<br>단순한 서비스가 아닌, 시니어 삶에 활력을 더하는 지속 가능한 솔루션을 목표로 합니다.",
            greeting: "인사말",
            greetingsub1 : "향후 미래를 대비하는 베이비부머 세대들은 앞으로의 노후에 디지털 문화가 함께될 것입니다.<br>이러한 세대들이 앞으로도 원활한 건강 관리와 스포츠 활동을 위한 디지털 서비스가 필요할 것으로 예측됩니다.<br>이에 2024년 6월, '보답'은 이러한 사회적 변화에 대응하여 창업 프로젝트를 기획하게 되었습니다.",
            greetingsub2 : "미래에는 모든 사람이 플랫폼 사용의 벽을 허물고 다함께 만들어가는 세상을 위해서<br>우리 '보답'은 우리 삶의 건강을 함께 관리해가는 동반자앱을 제공할 것입니다.<br>기술의 어려움을 두려워하지 않고 새로운 세상에서의 안전한 건강 관리를 하며<br>이루고자 하는 일에 최선을 다할 수 있도록 돕겠습니다.",
            team: "조직",
            teamsub1 : "보답은 시니어의 건강과 행복을 위한 통합 플랫폼 구축을 목표로 다양한 분야의 전문가들이 함께하고 있습니다.<br>기획, 서비스 개발, 헬스케어, 커뮤니티 운영 등 각 분야별 팀이 유기적으로 협력하며<br>시니어 맞춤형 서비스를 제공하기 위해 노력하고 있습니다.",
            teamsub2 : "우리 팀은 서로의 전문성을 존중하며 유기적으로 협력합니다.<br>기술의 복잡함은 줄이고, 따뜻한 사용 경험은 더하며<br>시니어 한 분 한 분이 건강한 일상을 이어갈 수 있도록<br>신뢰받는 디지털 동반자로 성장해 나가고 있습니다.",
            teamsub3 : "우리는 사람을 가장 잘 이해하는 기술을 만들고자 합니다.<br>보답은 시니어의 일상에 자연스럽게 녹아드는 서비스를 통해,<br>건강 관리가 어렵지 않고 따뜻하게 느껴지도록 돕고 있습니다.<br>누구나 소외되지 않고 함께하는 삶을 위해, 기술 너머의 배려를 담아갑니다.",
            socialValue: "사회적 가치",
            socialsub1 : "당사는 AI 기반 건강 분석과 맞춤형 운동 추천 서비스를 통해 시니어를 포함한 건강 취약계층이 보다 쉽게 건강을 관리할 수 있는 환경을 제공합니다.<br>특히, 비대면 건강 설문과 AI 리포트를 통해 개인별 신체 상태를 정밀하게 파악하고, <br>홈트레이닝과 오프라인 운동 프로그램까지 연계함으로써 단순한 운동 권장에 그치지 않고 실제 행동을 유도하는 서비스 체계를 구축하였습니다.<br>또한 Door-to-Door 이동 지원 서비스는 외출이 어려운 시니어의 운동 접근성을 크게 향상시켜, 건강 형평성 실현에 기여합니다.",
            socialsub2 : "이와 함께 당사는 지역 복지기관 및 커뮤니티와 협력하여 사회적 고립을 겪는 시니어가<br>정기적인 활동을 통해 관계를 형성하고 정서적 안정을 얻을 수 있도록 지원합니다.<br>이러한 서비스 구조는 개인의 건강 증진뿐 아니라 장기적으로는 의료비 절감, 공공의료 부담 완화에도 기여할 수 있으며,<br>누구나 차별 없이 건강한 삶을 누릴 수 있도록 돕는 포용적 디지털 헬스케어 플랫폼으로서의 사회적 가치를 지니고 있습니다.",
            door: "활동",
            door2: "서비스 개요",
            door3: "서비스 요소",
            doorsub1 : "Door to Door 서비스로 인해서 시니어층의 원활한 건강관리와 커뮤니티를 보장받을 수 있습니다.<br>함께하고싶은 사람과, 새로운 만남을 통해 내가 원하는 활동을 경험할 수 있습니다.",
            doorsub2 : "Door-to-Door 서비스는 이동에 불편함을 느끼는 시니어들이 지역 내 운동시설, 복지기관,<br>또는 커뮤니티 프로그램에 안전하고 편리하게 참여할 수 있도록 왕복 이동을 전담 지원하는 서비스입니다.<br>단순한 픽업 차량 제공이 아니라, 건강관리 활동의 '시작부터 끝까지'를 책임지는 맞춤형 동행 서비스로 설계되었습니다.",
            doorsub3 : "이동 지원 예약 시스템을 통해 '보답'앱 내에서 운동 종목, 장소, 시간, 출발지 입력 후<br>Door-to-Door 이동을 예약할 수 있고, 보호자(가족) 계정으로도 간편하게 예약할 수 있습니다.",
            doorsub4 : "<br>전담 안전 요원 혹은 코디네이터가 동행하여 수납보조, 건강상태 체크, 운동지도를 지원합니다.",
            doorsub5 : "<br>보호자(가족)에게 이동 중 알림, 도착 알림, 귀가 완료 알림을 전송하여 고객 안심 서비스를 제공합니다.",
            doorsub6 : "<br>목적지 도착 후 프로그램 참여 여부를 확인하며, 운동 종료 후 안전하게 귀가를 도와드립니다.<br>운동 후 건강 리포트 혹은 피드백은 앱에 연동됩니다.",
            healthcare: "헬스케어",
            healthcaresub1 : "모바일을 통해 AI 기반 건강 설문을 통해 사용자의 현재 건강 상태를 분석하고,<br>그 결과에 따라 개인에게 맞는 운동, 스트레칭, 수면 습관 등을 정밀하게 추천해드립니다.<br>간단한 문답 형식의 설문만으로도 나의 몸 상태를 파악할 수 있으며,<br>이후 챗봇 상담 기능을 통해 건강에 대한 궁금증을 실시간으로 질문하고 쉽게 해결할 수 있습니다.",
            healthcaresub2 : "사용자에게 맞춤화된 헬스 관련 영상 콘텐츠를 제공하여,<br>집에서도 전문가의 가이드를 따라 안전하고 효과적으로 운동할 수 있도록 도와드립니다.",
            healthcaresub3 : "운동을 할 때마다 ‘운동 점수’가 기록되어 내 건강이 어떻게 변하고 있는지 시각적으로 확인할 수 있고,<br>이 점수를 통해 성취감과 동기부여를 얻을 수 있습니다.",
            healthcaresub4 : "단순한 정보 제공에 그치지 않고, 매일의 작은 변화와 성과를 직접 체감할 수 있도록 설계된 이 서비스는<br>사용자의 자발적인 건강 관리 습관 형성을 이끌며, 더 나은 내일을 위한 꾸준한 건강 증진을 지원합니다.",
            news: "개발소식",
            developprocess : "현재 개발 진행 상황",
            futurefeatures : "향후 기능 출시 예정",
            cooperation : "제휴 및 협력",
            newssub1 : "- 웹 및 앱 UI/UX 개발 완료<br>- AI 건강 설문 기능 완성 중<br>- AI 기반 챗봇 상담 기능 완성 중 ",
            newssub2 : "- Door-to-Door 알림 서비스 9월 중 출시 예정<br>- 예약 정보 내역 확인 기능 8월 중 출시 예정<br>",
            newssub3 : "- 복지관과 정부 지원 시범 운영 계획<br>- 헬스 콘텐츠 제작사과 연계 예정<br>",
            contact: "문의사항",
            contactsub1 : "문의사항이 있으신가요?<br>서비스 이용 중 궁금한 점이나 제휴 관련 문의가 있으시면 아래 연락처로 언제든지 문의해 주세요.<br>빠르게 확인 후 정성껏 답변드리겠습니다.",
            contactsub2 : "<br>이메일:0000@0000.com",
            contactsub3 : "<br>전화:000-0000-0000",
            contactsub4 : "<br>제휴문의:0000@0000.com",
        },
        en: {
            logo: "Bodab",
            about: "About",
            vision: "Vision",
            greeting : "Greeting",
            team : "Team",
            door : "Door",
            healthcare : "Healthcare",
            socialValue: "Social Value",
            programs: "Programs",
            news: "News",
            contact: "Contact",
            mainTitle: "Bodab <span class='normal-text'> is</span>",
            mainDesc: "Personalized exercise <br> community for a healthy and happy senior life",
            firstVision: "A fresh and energetic start to the day",
            extrasub1 : "Enhancing Physical Health Through Active Sports",
            extrasub2 : "Recovering Mental Health Through Communication",
            extrasub3 : "Continuous Healthcare for a Happy Life",
            secondVision: "Lifestyle",
            graph1: "Changes in exercise practice rates among people over 60",
            graph2: "Over the past 15 years, the rate of regular exercise has steadily increased.<br>Interest in and the need for senior fitness will continue to grow<br>in the future.",
            homevision1: "vision",
            homevision2: "Our vision leads the times<br>by resolving social conflicts and enhancing value<br>through senior healthcare.",
            extraVision: "Making it together",
            footerText: "© 2025 Bodab. All rights reserved.",
            vision: "Vision",
            p1vision:"Our vision is to build an innovative sharing platform for the senior community.<br> Beyond simply providing services, we aim to create a space where seniors can naturally gather and communicate through exercise.<br> In modern society, health issues are one of the most important concerns for seniors, and<br> to address this, we combine healthcare services with community features to offer a more systematic and sustainable solution.<br> Through this, we aim to revitalize the daily lives of seniors and enhance not only their physical health but also their mental well-being.",
            vision2: "Directionality",
            p2vision: "Our company aspires to be an innovative sharing platform for the senior community.<br>We aim to create a space where seniors can naturally gather and connect through exercise,<br>combining healthcare services with community features to promote both a healthy daily life and emotional well-being.<br>Our goal is not just to provide a service, but to offer a sustainable solution that brings vitality to the lives of seniors.",
            greeting: "Greeting",
            greetingsub1 : "The Baby Boomer generation, preparing for the future, will embrace digital culture in their later years.<br>It is anticipated that this generation will require digital services for seamless healthcare management and sports activities.<br>In response to this societal shift, Bodab launched a startup project in June 2024.",
            greetingsub2 : "To create a future where everyone can break down the barriers to using technology and build a better world together,<br>Bodab will offer a companion app that helps people manage their health as part of everyday life.<br>Without fear of technology, we aim to support safe and accessible health management in a new digital era,<br>empowering individuals to focus on what they truly want to achieve.",
            team: "Organization",
            teamsub1 : "Bodab is committed to building an integrated platform dedicated to the health and happiness of seniors.<br>Experts from various fields such as planning, service development, healthcare, and community management work<br>closely together to provide personalized services tailored to seniors' needs.",
            teamsub2 : "Our team respects each other's expertise and works together in a seamless and collaborative way.<br>We aim to simplify technology while enhancing warm user experiences,<br>growing as a trusted digital companion to help every senior maintain a healthy daily life.",
            teamsub3 : "We strive to create technology that understands people best.<br>Through services that naturally integrate into the daily lives of seniors,<br>Bodab makes health management feel easy and comforting.<br>To ensure no one is left behind, we embed care and empathy beyond the technology itself.",
            socialValue: "Social Value",
            socialsub1 : "Our company provides an environment where seniors and other vulnerable groups can manage their health more easily<br>through AI-based health analysis and personalized exercise recommendation services.<br>In particular, we accurately assess each individual's physical condition using remote health surveys and AI-generated reports,<br> and connect this with home training and offline exercise programs.<br>This creates a service system that not only recommends exercise but also encourages real action.<br>Additionally, our Door-to-Door mobility support service greatly improves exercise accessibility for seniors<br>who have difficulty going out, contributing to the realization of health equity.",
            socialsub2 : "In addition, we collaborate with local welfare organizations and communities to help<br>seniors facing social isolation build relationships and gain emotional stability through regular activities.<br>This service structure not only promotes individual health but also contributes in the long term<br>to reducing medical expenses and easing the burden on public healthcare systems.<br>By supporting equitable access to health for all, our platform holds social value as an inclusive digital healthcare solution.",
            door: "Activity",
            door2: "Service Overview",
            door3: "Service Elements",
            doorsub1 : "The Door-to-Door service ensures smooth healthcare management and community engagement for seniors.<br>It enables them to enjoy desired activities with familiar companions or through new social connections.",
            doorsub2 : "The Door to Door service is designed to provide dedicated round-trip transportation support for seniors<br>who face mobility challenges, enabling them to safely and conveniently participate in local fitness<br>centers, welfare institutions, or community programs.<br>It is not just a simple pickup service but a personalized companion service that supports every step of<br>their healthcare journey from start to finish.",
            doorsub3 : "Through the mobility support reservation system, users can book Door-to-Door transportation directly<br>within the ‘Bodab’ app by selecting the type of exercise, location, time, and departure point.<br>Reservations can also be easily made using a caregiver or family member’s account.",
            doorsub4 : "<br>A dedicated safety officer or coordinator accompanies the senior, providing assistance with check-in,<br>monitoring their health condition, and offering exercise guidance.",
            doorsub5 : "<br>Notifications are sent to guardians (family members) during transit, upon arrival, and upon returning<br>home, providing a reassuring service for the customer.",
            doorsub6 : "<br>After arriving at the destination, we confirm participation in the program and assist with a safe return home after the exercise.<br>Post-exercise health reports or feedback are linked within the app.",
            healthcare: "Healthcare",
            healthcaresub1 : "Through a mobile-based AI health survey, we analyze the user's current health condition and provide<br>personalized recommendations for exercises, stretching routines, and sleep habits.<br>With just a simple Q&A-style survey, users can understand their physical status, and through a chatbot<br>consultation feature, they can ask health-related questions in real time and receive easy, accessible answers.",
            healthcaresub2 : "We provide users with personalized health-related video content, enabling them to follow expert<br>guidance safely and effectively from the comfort of their own homes.",
            healthcaresub3 : "Each time you exercise, an “exercise score” is recorded, allowing you to visually track changes in your health.<br>This score helps foster a sense of achievement and motivation.",
            healthcaresub4 : "Designed not just to provide information, this service allows users to directly experience<br>small daily changes and achievements.<br>It encourages the development of self-driven health management habits and supports continuous improvement<br>for a healthier tomorrow.",
            news: "News",
            developprocess : "Current development progress",
            futurefeatures : "Features to be released in the future",
            cooperation : "Partnership and cooperation",
            newssub1 : "- Web and app UI/UX development completed<br>- AI health survey feature in progress<br>- AI-based chatbot consultation feature in progress",
            newssub2 : "- Door-to-Door notification service scheduled for release in September<br>- Reservation history viewing feature scheduled for release in August",
            newssub3 : "- Pilot operation planned in collaboration with welfare centers and government support<br>- Partnership with health content production companies planned",
            contact: "Contact",
            contactsub1 : "Have any questions?<br>If you have any inquiries regarding service usage or partnership opportunities, feel free to contact us<br>using the information below.<br>We will review your message promptly and respond with care.",
            contactsub2 : "<br>email:0000@0000.com",
            contactsub3 : "<br>phone call:000-0000-0000",
            contactsub4 : "<br>Partnership inquiry:0000@0000.com",
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach((el) => {
            const key = el.getAttribute("data-lang");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll(".normal-text").forEach((span) => {
            span.style.color = "white";
            span.style.fontWeight = "bold";
        });

        langToggle.textContent = lang === "ko" ? "🇰🇷 한국어" : "🇺🇸 English";
        localStorage.setItem("language", lang);
    }

    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "ko" ? "en" : "ko";
        changeLanguage(currentLang);
    });

    // 초기 실행
    changeLanguage(currentLang);

    // ✅ 외부 접근 가능하게 export
    window.changeLanguage = changeLanguage;
    window.currentLang = currentLang;
});


// ✅ navbartest.js

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');
    const langToggle = document.querySelector('#lang-toggle');
    const firstVisionSection = document.querySelector('.first-vision');
    const firstVisionText = document.querySelector('.first-vision-text');

    const legacyDropdowns = document.querySelectorAll('.dropdown-menu, .dropdown-program-menu');
    legacyDropdowns.forEach(menu => menu.style.display = 'none');

    const dropdownWrapper = document.createElement("div");
    dropdownWrapper.classList.add("dropdown-wrapper", "dropdown-slide");
    dropdownWrapper.innerHTML = `
        <div class="dropdown-column">
            <a href="page1.html" data-lang="vision">비전</a>
            <a href="page2.html" data-lang="greeting">인사말</a>
            <a href="page3.html" data-lang="team">조직</a>
        </div>
        <div class="dropdown-column">
            <a href="page4.html" data-lang="door">활동</a>
            <a href="page5.html" data-lang="healthcare">헬스케어</a>
        </div>
    `;
    navbar.appendChild(dropdownWrapper);

    // ✅ 드롭다운 생성 이후 언어 적용 보장
    setTimeout(() => {
        if (typeof changeLanguage === 'function') {
            changeLanguage(currentLang);
        }
    }, 0);

    let hideTimeout;

    const showDropdownWrapper = () => {
        clearTimeout(hideTimeout);
        dropdownWrapper.classList.add("active", "show");
    };

    const hideDropdownWrapper = () => {
        hideTimeout = setTimeout(() => {
            dropdownWrapper.classList.remove("active", "show");
        }, 200);
    };

    const navItems = document.querySelectorAll('.navbar nav ul li');
    navItems.forEach(item => {
        item.addEventListener("mouseenter", showDropdownWrapper);
        item.addEventListener("mouseleave", hideDropdownWrapper);
    });

    dropdownWrapper.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
    dropdownWrapper.addEventListener("mouseleave", hideDropdownWrapper);

    if (!firstVisionSection || !firstVisionText) {
        console.warn("⚠️ 'first-vision' 또는 'first-vision-text' 요소를 찾을 수 없습니다.");
        return;
    }

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const sectionHeight = firstVisionSection.offsetHeight;
        const triggerPoint = sectionHeight * 0.6;
        const triggerTextPoint = firstVisionSection.offsetTop - window.innerHeight * 0.9;

        if (scrollY > triggerPoint) {
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            dropdownWrapper.style.backgroundColor = 'white';
            dropdownWrapper.querySelectorAll('a').forEach(a => a.style.color = 'black');
            navbarLinks.forEach(link => link.style.color = 'black');
            langToggle.style.color = 'black';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
            dropdownWrapper.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
            dropdownWrapper.querySelectorAll('a').forEach(a => a.style.color = 'white');
            navbarLinks.forEach(link => link.style.color = 'white');
            langToggle.style.color = 'white';
        }

        if (scrollY > triggerTextPoint) {
            firstVisionText.classList.add('visible');
        } else {
            firstVisionText.classList.remove('visible');
        }
    });
});
