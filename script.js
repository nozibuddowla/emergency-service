// heart buttons
const heartButtons = document.querySelectorAll(".heart-btn");

// heart counters 
const heartCountDesktop = document.getElementById("heart-count-desktop");
const heartCountMobile = document.getElementById("heart-count-mobile");

let count = 0;
let coins = 100

let coinDisplaysDesktop = document.getElementById("coins-desktop");
let coinDisplaysMobile = document.getElementById("coins-mobile");
const cardContainer = document.querySelector(".card-container");
const callHistoryList = document.getElementById("call-history");

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

cardContainer.addEventListener("click", function (event) {
    const callBtn = event.target.closest(".call-btn");

    const card = callBtn.closest(".card-body");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    if (coins < 20) {
        alert(`You don't have enough coins to make this call.`);
        return;
    }

    coins -= 20;
    coinDisplaysDesktop.innerText = coins;
    coinDisplaysMobile.innerText = coins;
    
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const historyList = document.createElement("li");
    historyList.className = "flex justify-between items-center bg-[#FAFAFA] p-4 rounded-lg";
    historyList.innerHTML = `
        <div>
            <h3 class="font-semibold text-lg">${serviceName}</h3>
            <p class="text-lg text-[#5C5C5C]">${serviceNumber}</p>
        </div>
    `;
    callHistoryList.appendChild(historyList);
})