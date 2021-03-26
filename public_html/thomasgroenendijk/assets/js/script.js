let portfolioItems = document.querySelector(".portfolio-filter"),
    portfolioButtons = portfolioItems.children,
    totalFilterBtn = portfolioButtons.length,
    portfolioItem = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItems = portfolioItem.length
    
    for(let i=0; i<totalFilterBtn; i++) {
        portfolioButtons[i].addEventListener("click", function() {
            portfolioItems.querySelector(".active").classList.remove("active")
            this.classList.add("active")

            const filterValue = this.getAttribute("data-filter")
            for(let k=0; k<totalPortfolioItems; k++) {
                if(filterValue === portfolioItem[k].getAttribute("data-category")) {
                    portfolioItem[k].classList.remove("hide")
                    portfolioItem[k].classList.add("show")
                } else {
                    portfolioItem[k].classList.remove("show")
                    portfolioItem[k].classList.add("hide")
                } if(filterValue === "all") {
                    portfolioItem[k].classList.remove("hide")
                    portfolioItem[k].classList.add("show")
                }
            }
        });
    }

// Lightbox
let lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close")
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter")
let itemIndex = 0;

    for(let i=0; i<totalPortfolioItems; i++) {
        portfolioItem[i].addEventListener("click", function() {
            itemIndex = i;
            changeItem();
            toggleLightbox();
        });
    }

    function nextItem() {
        if(itemIndex === totalPortfolioItems-1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
        changeItem();
    }

    function prevItem() {
        if(itemIndex === 0) {
            itemIndex = totalPortfolioItems-1;
        } else {
            itemIndex--;
        }
        changeItem();
    }

    function changeItem() {
        imgSrc = portfolioItem[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src = imgSrc;
        lightboxText.innerHTML = portfolioItem[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML = (itemIndex+1) + " van de " + totalPortfolioItems;
    }

    function toggleLightbox() {
        lightbox.classList.toggle("open")
    }

    lightbox.addEventListener("click", function (e) {
        urlName = portfolioItem[itemIndex].querySelector("h4").innerHTML.toLowerCase();
        if(e.target === lightboxClose || e.target === lightbox) {
            toggleLightbox();
        }
        if(e.target === lightboxImg) {
            window.location.href = 'projecten/' + urlName + '/index.html';
        }
    });