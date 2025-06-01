document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');
    const langToggle = document.querySelector('#lang-toggle');
    const firstVisionSection = document.querySelector('.first-vision');
    const firstVisionText = document.querySelector('.first-vision-text');

    // 기존 hover 방식 드롭다운 제거
    const legacyDropdowns = document.querySelectorAll('.dropdown-menu, .dropdown-program-menu');
    legacyDropdowns.forEach(menu => menu.style.display = 'none');

    // ✅ 드롭다운 wrapper 생성
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

    // ✅ 드롭다운 생성 후 현재 언어로 다시 번역 적용
    if (typeof changeLanguage === 'function' && typeof currentLang !== 'undefined') {
        changeLanguage(currentLang);
    }

    let hideTimeout;

    // 드롭다운 보이기
    const showDropdownWrapper = () => {
        clearTimeout(hideTimeout);
        dropdownWrapper.classList.add("active", "show");
    };

    // 드롭다운 숨기기
    const hideDropdownWrapper = () => {
        hideTimeout = setTimeout(() => {
            dropdownWrapper.classList.remove("active", "show");
        }, 200);
    };

    // 메뉴 hover 시 드롭다운 동작
    const navItems = document.querySelectorAll('.navbar nav ul li');
    navItems.forEach(item => {
        item.addEventListener("mouseenter", showDropdownWrapper);
        item.addEventListener("mouseleave", hideDropdownWrapper);
    });

    dropdownWrapper.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    dropdownWrapper.addEventListener("mouseleave", hideDropdownWrapper);

    // 스크롤에 따라 스타일 변화
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
