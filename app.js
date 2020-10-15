// Staff filter

const staffBtn = document.querySelectorAll(".staff-button");
const staffCard = document.querySelectorAll(".staff-card");

for (let i = 0; i < staffBtn.length; i++) {
    staffBtn[i].addEventListener("click", function (e) {
        removeClasses();
        e.target.classList.add("is-selected");
        for (let j = 0; j < staffCard.length; j++) {
            if (e.target == staffBtn[0]) {
                staffCard[j].classList.remove("staff-not-selected");
            } else if (e.target == staffBtn[1]) {
                if (staffCard[j].dataset.staff == "support") {
                    staffCard[j].classList.add("staff-not-selected");
                }
                if (staffCard[j].dataset.staff !== "support") {
                    staffCard[j].classList.remove("staff-not-selected");
                }
            } else if (e.target == staffBtn[2]) {
                if (staffCard[j].dataset.staff == "teachers") {
                    staffCard[j].classList.add("staff-not-selected");
                }
                if (staffCard[j].dataset.staff !== "teachers") {
                    staffCard[j].classList.remove("staff-not-selected");
                }
            }
        }
    });
}

function removeClasses() {
    for (var i = 0; i < staffBtn.length; i++) {
        staffBtn[i].classList.remove("is-selected");
    }
}

// Flickity

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    fade: true,
    imagesLoaded: true,
});
