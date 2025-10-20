const loadingScreen = document.querySelector("#loading-screen");

function start() {
    hideLoadingScreen();
    handleAnimateNavItems();
    handleAnimateHeroItems();
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

    //tablet and mobile
    if (window.screen.width <= 1023) {
        menuIconEl.style.display = "block";
    }

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
            // chạy lại animate hero items
            handleAnimateHeroItems();
        })
    }
}
handleClickLogo();

function handleAnimateNavItems() {
    handleAnimate(".nav-item", "show-nav-item", 2);
}


function handleAnimate(el, className, delayTime) {

    const handleDelayItems = (el, i) => {
        const delay = delayTime + i * 0.1;
        setTimeout(() => {
            el.classList.add(className);
        }, delay * 1000);
    }

    const elements = document.querySelectorAll(el);
    if (elements) {
        elements.forEach((el, i) => {
            if (el.classList.contains(className)) {
                el.classList.remove(className);
                handleDelayItems(el, i);
            } else {
                handleDelayItems(el, i);
            }
        })

    }
}

function handleAnimateHeroItems() {
    handleAnimate(".hero-item", "show", 3);
}




const menuIconEl = document.querySelector('.menu-icon');
const navListEL = document.querySelector(".nav-list");
const closeIcon = document.querySelector(".sidebar-close-icon");

function handleSidebar() {

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
        })
    }

}

handleSidebar();

function handleScrollAnimate() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });
    });

    observer.observe(document.querySelector(".about"));
}
handleScrollAnimate();

function handleTabListJobs() {
    const data = [
        {
            company: "Upstatement",
            position: "Lead Engineer",
            companyURL: "#",
            range: "May 2018 - Present",
            desc: [
                "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
                "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
                "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
                "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
            ]
        },
        {
            company: "Apple",
            position: "UI Engineer Co-op",
            companyURL: "#",
            range: "July - December 2017",
            desc: [
                "Developed and styled interactive web applications for Apple Music using Ember and SCSS",
                "Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations",
                "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
                "Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications"
            ]
        },
        {
            company: "Scout Studio",
            position: "Developer",
            companyURL: "#",
            range: "Spring 2016 & 2017",
            desc: [
                "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
                "Built and delivered technical solutions according to stakeholder business requirements"
            ]
        },
        {
            company: "Starry",
            position: "Software Engineer Co-op",
            companyURL: "#",
            range: "July - December 2016",
            desc: [
                "Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
                "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router",
                "Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps"
            ]
        },
        {
            company: "MullenLowe",
            position: "Creative Technologist Co-op",
            companyURL: "#",
            range: "July - December 2015",
            desc: [
                "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
                "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
            ]
        }
    ];



    const jobListEl = document.querySelector(".job-tab-list");
    const jobDescEl = document.querySelector(".job-desc");

    let jobItemsHTML = ""
    let jobDescDetailHTML = "";


    data.forEach((item) => {
        jobItemsHTML += `
           <li class="job-tab-item">${item.company}</li>
           <div class="line"></div>
        `;
        jobDescDetailHTML += `
            <div class="job-desc-wrapper">
                <h3 class="job-position">
                     ${item.position}
                       <a href="${item.companyURL}" class="job-company-link">@ ${item.company}</a>
                </h3>
                <p class="job-range">${item.range}</p>
                <ul class="task-list">
                    ${item.desc.map((item) => `<li class="task-item">${item}</li>`).join("")}
                 </ul>
             </div>        
        `
    })

    jobListEl.innerHTML = jobItemsHTML;
    jobDescEl.innerHTML = jobDescDetailHTML;

    const tabItemEl = document.querySelectorAll(".job-tab-item");
    tabItemEl[0].classList.add("active");

    const lineEl = document.querySelector(".job-tab-list .line");
    const tabItemActive = document.querySelector(".job-tab-item.active");

    lineEl.style.top = tabItemActive.offsetTop + "px";
    lineEl.style.height = tabItemActive.offsetHeight + "px";

    const jobDescWrapperEl = document.querySelectorAll(".job-desc-wrapper");
    jobDescWrapperEl[0].classList.add("active");

    if (tabItemEl) {
        tabItemEl.forEach((item, index) => {
            item.addEventListener("click", () => {
                document.querySelector(".job-tab-item.active").classList.remove("active");
                document.querySelector(".job-desc-wrapper.active").classList.remove("active");

                lineEl.style.top = item.offsetTop + "px";
                lineEl.style.height = item.offsetHeight + "px";

                item.classList.add("active");
                jobDescWrapperEl[index].classList.add("active");
            })

        })
    }
}
handleTabListJobs();


