 const menuBtn = document.querySelector(".menuBtn");
        const closeBtn = document.querySelector(".closeMenu");
        const mobileNav = document.querySelector(".mobile-nav");

        menuBtn.addEventListener("click", () => {
            mobileNav.style.display = "block";
            menuBtn.style.display = "none";
            closeBtn.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            mobileNav.style.display = "none";
            closeBtn.style.display = "none";
            menuBtn.style.display = "block";
        });