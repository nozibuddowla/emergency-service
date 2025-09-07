// heart buttons
const heartButtons = document.querySelectorAll(".heart-btn");

// heart counters 
const heartCountDesktop = document.getElementById("heart-count-desktop");
const heartCountMobile = document.getElementById("heart-count-mobile");

let count = 0;

for (const heartBtn of heartButtons) {
    heartBtn.addEventListener("click", function () {
        count++;

        heartCountDesktop.innerText = count;
        heartCountMobile.innerText = count;

        let icon = this.querySelector("i");

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-red-500");

        setTimeout(() => {
            icon.classList.remove("fa-solid", "text-red-500");
            icon.classList.add("fa-regular");
        }, 300);
    })
}


