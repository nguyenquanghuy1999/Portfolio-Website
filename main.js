const loadingScreen = document.querySelector("#loading-screen");


const hideLoadingScreen = () => {
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);
}

const showLoadingScreen = () => {
    loadingScreen.style.display = "flex";
}


const logoElement = document.querySelector(".hexagon.is-hover");
if (logoElement) {
    logoElement.onclick = () => {
        showLoadingScreen();
        loadingScreen.innerHTML = `
         <div id="logo">
            <svg class="hexagon" width="130" height="130" viewBox="0 0 360 280"
                xmlns="http://www.w3.org/2000/svg">
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
    }
}

function start() {
    hideLoadingScreen();
}
start();

function logic() {

}
