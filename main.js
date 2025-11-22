const loadingScreen = document.querySelector("#loading-screen");
const projectOtherItemEls = document.querySelectorAll(".project-other-item");
const bodyEl = document.body;


function start() {
    handlePageLoading();
    hideLoadingScreen();
    handleAnimate("#logo", "show", 2);
    handleAnimate(".nav-item", "show-nav-item", 2.5);
    handleAnimate(".hero-item", "show", 3.5);
    handleAnimate(".social-sidebar", "show", 4.5);
    handleAnimate(".email-sidebar", "show", 4.5);


}

start();


function handlePageLoading() {
    window.addEventListener("load", () => {
        let hash = location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            setTimeout(() => el.scrollIntoView(), 2000)
        } else {
            scrollToTop();
        }
    });

}

function scrollToTop() {
    history.scrollRestoration = "manual";
    bodyEl.classList.add("loading");

    window.scrollTo(0, 0);
    setTimeout(() => {
        bodyEl.classList.remove("loading");
    }, 2000);
}



function hideLoadingScreen() {
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);
}


function handleClickLogo() {
    const logoElement = document.querySelector(".hexagon.is-hover");
    if (logoElement) {
        logoElement.addEventListener("click", () => location.reload());
    }
}
handleClickLogo();


function handleAnimate(selector, className, delayTime = 0) {
    const handleDelayItems = (el, i = 0) => {
        const delay = delayTime + i * 0.1;
        setTimeout(() => {
            el.classList.add(className);
        }, delay * 1000);
    }

    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) elements.forEach((item, index) => handleDelayItems(item, index));
    else handleDelayItems(selector);

}


function handleSidebar() {

    const menuIconEl = document.querySelector('.menu-icon');
    const navWrapperEl = document.querySelector(".nav-wrapper");
    const navListEl = document.querySelector(".nav-list");
    const navItemEl = document.querySelectorAll(".nav-item-link");
    const closeIcon = document.querySelector(".sidebar-close-icon");


    const sidebarOut = (animate = true) => {

        const handleSidebarOut = () => {
            navWrapperEl.classList.remove("show");
            closeIcon.style.display = "none";
            menuIconEl.style.display = "block";
            bodyEl.classList.remove("no-scroll");
        }

        if (animate) {
            navListEl.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(392px)' }
                ],
                { duration: 150, fill: "forwards" }
            )
            setTimeout(handleSidebarOut, 150);
        } else {
            handleSidebarOut();
        }
    }


    const sidebarIn = () => {
        navListEl.animate(
            [
                { transform: 'translateX(392px)' },
                { transform: 'translateX(0)' }
            ],
            { duration: 150, fill: "forwards" }
        )
        navWrapperEl.classList.add("show");
        closeIcon.style.display = "block";
        menuIconEl.style.display = "none";
        bodyEl.classList.add("no-scroll");
    }

    if (navItemEl) {
        navItemEl.forEach(item => item.addEventListener("click", () => sidebarOut(false)));
    }

    if (menuIconEl) {
        menuIconEl.addEventListener("click", sidebarIn)
    }

    if (closeIcon) {
        closeIcon.addEventListener("click", sidebarOut);
    }


}

handleSidebar();



function handleScrollAnimate() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // get index handle animation in projectOtherItemEls
                const index = entry.target.dataset.index;
                entry.target.style.transitionDelay = index ? `${index * 0.15}s` : null;

                // add class show  for elements: project-other-items, sections, project-items
                entry.target.classList.add('show');
            }
        });
    });

    projectOtherItemEls
        .forEach((item, i) => {
            item.dataset.index = i % 3; // 3 cột → delay theo cột (0,1,2)
            item.dataset.indexItem = i;
            observer.observe(item);
        });

    document.querySelectorAll("section, .project-item").forEach((item) => observer.observe(item));
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

function handleClickBtnProjectOther() {
    const showMoreBtn = document.querySelector(".project-other-btn-link");
    const projectOtherListEl = document.querySelector(".project-other-list");

    if (showMoreBtn && projectOtherListEl) {
        showMoreBtn.addEventListener("click", e => {
            e.preventDefault();
            projectOtherItemEls.forEach(item => {
                if (showMoreBtn.innerHTML == "Show More") {
                    if (item.dataset.indexItem > 5) {
                        item.classList.add("show");
                        item.style.transitionDelay = `${item.dataset.index * 0.15}s`;
                    }
                }
                if (showMoreBtn.innerHTML == "Show Less") {
                    if (item.dataset.indexItem > 5) {
                        item.classList.remove("show")
                    }
                }
            })
            projectOtherListEl.classList.toggle("show-all");
            showMoreBtn.innerHTML = projectOtherListEl.classList.contains('show-all') ? "Show Less" : "Show More";
        })
    }
}
handleClickBtnProjectOther();


function handleProjectOtherItemMouseLeave() {
    if (projectOtherItemEls) {
        projectOtherItemEls.forEach(item => {
            item.addEventListener('mouseleave', () => {
                item.style.transition = "all ease 0.3s";
            })
        })

    }
}

handleProjectOtherItemMouseLeave();