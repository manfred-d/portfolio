/**----------------Loader --------- */
window.addEventListener('load', () =>{
    document.querySelector(".main").classList.remove('hidden');
    document.querySelector(".home-section").classList.add('active');
    /**------------page loader---------- */
    document.querySelector(".loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".loader").style.display = 'none';
    }, 1000);
})


// ---------------- toggle Navbr ---------//
const navtoggler = document.querySelector(".nav-toggle");

navtoggler.addEventListener('click', (e) => {
    hidesection();
    toggleNavbar();
})
function hidesection() {
    document.querySelector('section.active').classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector('.header').classList.toggle("active");
}
// ------------active section:sections----------//
document.addEventListener('click', (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "" ) {
        // overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add('active');
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar(); 
        }
        else{
            hidesection();
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.querySelector(".overlay").classList.remove('active');
        }, 500);
    }
})



/* -------------about tabs ----------- */
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    };
});

// -------------portfolio item popup--------------------//
document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("view-project")){//view project button
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clickk outsside
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    };
})

function portfolioItemDetails(portfolioitem) {
    document.querySelector(".pp-thumbnail img").src = 
        portfolioitem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = 
        portfolioitem.querySelector('.portfolio-item-title').innerHTML;
    
    document.querySelector(".pp-body").innerHTML = 
        portfolioitem.querySelector(".portfolio-item-details").innerHTML;
}

