const loadingScreen = document.querySelector("#loading-screen");

function start() {
    hideLoadingScreen();
    handleAnimateNavItems();
}
start();


function hideLoadingScreen() {
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);
}

function showLoadingScreen() {
    loadingScreen.style.display = "flex";
}
function handleResetSidebar() {
    navListEL.classList.remove("show");
    closeIcon.style.display = "none";
    menuIconEl.style.display = "block";

}

function handleClickLogo() {
    const logoElement = document.querySelector(".hexagon.is-hover");
    if (logoElement) {
        logoElement.addEventListener("click", () => {

            handleResetSidebar();

            showLoadingScreen();
            loadingScreen.innerHTML = `
            <div id="logo">
                <svg class="hexagon" width="130" height="130" viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150,15 42,77 42,202 150,265 258,202 258,77" fill="none" stroke="#64FFDA"
                        stroke-width="13" stroke-dasharray="750" stroke-dashoffset="750">
                        <animate attributeName="stroke-dashoffset" from="750" to="0" dur="1s" fill="freeze" />
                    </polygon>
                    <text x="110" y="175" fill="#64FFDA" font-size="110" opacity="0">
                        B
                        <animate attributeName="opacity" from="0" to="1" begin="1s" dur="0.7s" fill="freeze" />
                    </text>
                </svg>
            </div>
            `
            hideLoadingScreen();

            // chạy lại animate nav items
            handleAnimateNavItems();
        })
    }
}
handleClickLogo();

function handleAnimateNavItems() {

    const handleDelayItems = (el, i) => {
        const delay = 2 + i * 0.1;
        setTimeout(() => {
            el.classList.add("show-nav-item");
        }, delay * 1000);
    }

    const navItems = document.querySelectorAll(".nav-item");
    if (navItems) {
        navItems.forEach((el, i) => {
            if (el.classList.contains("show-nav-item")) {
                el.classList.remove("show-nav-item");
                handleDelayItems(el, i);
            } else {
                handleDelayItems(el, i);
            }
        })

    }
}
const menuIconEl = document.querySelector('.menu-icon');
const navListEL = document.querySelector(".nav-list");

const closeIcon = document.querySelector(".close-sidebar");
if (closeIcon) {
    closeIcon.addEventListener("click", () => {
        navListEL.classList.remove("show");

        // navlist off
        navListEL.animate(
            [
                { right: 0, display: "flex" },
                { right: -100 + "%", display: "none" }
            ],
            {
                duration: 200
            }
        )
        closeIcon.style.display = "none";
        menuIconEl.style.display = "block";
    })

}
if (menuIconEl) {
    menuIconEl.addEventListener("click", () => {
        navListEL.classList.add("show");
        closeIcon.style.display = "block";
        menuIconEl.style.display = "none";
    }
    )
}

console.log("test");
