document.addEventListener("DOMContentLoaded", function () {
    // 현재 페이지 파일명 확인
    const currentPage = window.location.pathname.split("/").pop();

    // 'home.html'에서만 실행되도록 설정
    if (currentPage === "home.html") {
        const heroTrack = document.querySelector(".hero-track");
        let slides = Array.from(document.querySelectorAll(".hero-slide"));
        const totalSlides = slides.length;
        let index = 1;
        const intervalTime = 3000;
        let isTransitioning = false;

        // 슬라이드 요소가 없으면 오류 방지 후 종료
        if (!heroTrack || slides.length === 0) {
            console.error("❌ 오류: 'slides' 또는 'heroTrack' 요소를 찾을 수 없습니다.");
            return;
        }

        // 슬라이드 복제 함수
        function duplicateSlides() {
            const firstClone = slides[0].cloneNode(true);
            const lastClone = slides[slides.length - 1].cloneNode(true);

            firstClone.classList.add("clone");
            lastClone.classList.add("clone");

            heroTrack.appendChild(firstClone);
            heroTrack.insertBefore(lastClone, slides[0]);

            slides = Array.from(document.querySelectorAll(".hero-slide"));
        }

        duplicateSlides();
        heroTrack.style.transform = `translateX(-${index * 100}vw)`;

        // 슬라이드 업데이트 함수
        function updateSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            heroTrack.style.transition = "transform 1s ease-in-out";
            heroTrack.style.transform = `translateX(-${index * 100}vw)`;
        }

        // 슬라이드 전환 후 처리
        function handleTransitionEnd() {
            isTransitioning = false;

            if (index === totalSlides + 1) {
                heroTrack.style.transition = "none";
                index = 1;
                heroTrack.style.transform = `translateX(-${index * 100}vw)`;
            } else if (index === 0) {
                heroTrack.style.transition = "none";
                index = totalSlides;
                heroTrack.style.transform = `translateX(-${index * 100}vw)`;
            }
        }

        // 자동 슬라이드 시작
        function startSlider() {
            setInterval(() => {
                if (!isTransitioning) {
                    index++;
                    updateSlide();
                }
            }, intervalTime);
        }

        heroTrack.addEventListener("transitionend", handleTransitionEnd);
        startSlider();
    }

    // 🔹 네비게이션 바 스타일 변경 및 스크롤 이벤트 처리
    const secondVisionSection = document.querySelector(".second-vision");
    const thirdVisionSection = document.querySelector(".third-vision");

    if (secondVisionSection && thirdVisionSection) {
        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY;
            const secondVisionTop = secondVisionSection.offsetTop;
            const thirdVisionTop = thirdVisionSection.offsetTop;

            // 두 번째 비전 색상 변경
            if (scrollPosition > secondVisionTop - window.innerHeight && scrollPosition < thirdVisionTop) {
                secondVisionSection.style.backgroundColor = "rgb(139, 241, 255)";
            }

            if (scrollPosition > thirdVisionTop - window.innerHeight) {
                const scrollRatio = (scrollPosition - thirdVisionTop + window.innerHeight) / (window.innerHeight / 2);
                const r = Math.min(135 + scrollRatio * 120, 255);
                const g = Math.min(206 + scrollRatio * 49, 255);
                const b = Math.min(235 + scrollRatio * 20, 255);
                secondVisionSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    }

    // 🔹 섹션 스크롤 이동 처리
    const sections = document.querySelectorAll(".section");
    let isLocked = false;
    let currentSectionIndex = 0;
    const sectionDelay = 2000;

    function scrollToSection(targetSection) {
        const targetTop = targetSection.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetTop - startPosition;

        const scrollSpeed = 40;
        const totalDistance = Math.abs(distance);
        const step = totalDistance / (scrollSpeed / 10);

        let currentDistance = 0;

        const interval = setInterval(function () {
            currentDistance += step;
            if (currentDistance >= totalDistance) {
                currentDistance = totalDistance;
                clearInterval(interval);
            }

            window.scrollTo(0, startPosition + (distance > 0 ? currentDistance : -currentDistance));
        }, 10);
    }

    function lockScroll() {
        isLocked = true;
        setTimeout(() => {
            isLocked = false;
        }, sectionDelay);
    }

    function handleSectionScroll(event) {
        if (isLocked) return;

        isLocked = true;

        if (event.deltaY > 0) {
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(sections[currentSectionIndex]);
            }
        } else if (event.deltaY < 0) {
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(sections[currentSectionIndex]);
            }
        }

        lockScroll();
    }

    if (sections.length > 0) {
        window.addEventListener("wheel", handleSectionScroll);
        window.addEventListener("wheel", function (e) {
            if (isLocked) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });
    }

    // 🔹 드롭다운 메뉴 초기 숨김 처리
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu) {
        dropdownMenu.style.display = "none";
    }

    //그래프
    if (document.body.id == "mainPage") {
        const canvas = document.getElementById("growthChart");
        if (canvas) {
            initGrowthChart(canvas);
        }
    }

    function initGrowthChart(canvas) {
        const ctx = canvas.getContext("2d");

        // 그래프 데이터와 설정
        const rawData = [38.9, 40.4, 43.5, 45.9, 43.3, 45.6, 50.5, 52.1];
        const minData = Math.min(...rawData);
        const maxData = Math.max(...rawData);
        const adjustedData = rawData.map(value => 
            30 + (Math.pow((value - minData + 1), 1.5) / Math.pow((maxData - minData + 1), 1.5)) * 20
        );

        const data = {
            labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2024"],
            datasets: [{
                data: adjustedData,
                backgroundColor: "rgba(0, 170, 255, 0.74)",
                borderColor: "rgb(0, 191, 255)",
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.7
            }]
        };

        const config = {
            type: "bar",
            data: data,
            options: {
                responsive: false,
                animation: {
                    duration: 1200,
                    easing: "easeOutQuart"
                },
                scales: {
                    x: { ticks: { display: true } },
                    y: {
                        type: "linear",
                        suggestedMin: 30,
                        max: 55,
                        beginAtZero: false,
                        ticks: { display: true, stepSize: 5 }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                interaction: { mode: null }
            }
        };

        let chart;
        const section = document.querySelector(".third-vision");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chart = new Chart(ctx, config);
                    observer.disconnect(); // 한 번만 실행 후 종료
                }
            });
        }, { root: null, rootMargin: "0px", threshold: 0.5 });

        observer.observe(section);
    }
});