
// when Button
const whenButton = document.querySelector("#when-button");
const whenDropdown = document.querySelector("#when-dropdown");

const whenChoice = document.querySelector("#when-choice");
const whenOptions = document.querySelectorAll("#when-dropdown button");

whenButton.addEventListener("click", () => {
    
    if (whenDropdown.style.display === "flex") {
        whenDropdown.style.display = "none";
    } else {
        whenDropdown.style.display = "flex";
        continentDropdown.style.display = "none";
        budgetDropdown.style.display = "none";
    }
})

whenOptions.forEach((button) => {
    
    button.addEventListener("click", () => {
        whenChoice.textContent = button.textContent;
        whenDropdown.style.display = "none";
    })
});

// continent button
const continentButton = document.querySelector("#continent-button");
const continentDropdown = document.querySelector("#continent-dropdown");

const continentChoice = document.querySelector("#continent-choice");
const continentOptions = document.querySelectorAll("#continent-dropdown button")

continentButton.addEventListener("click", () => {
    
    if (continentDropdown.style.display === "flex") {
        continentDropdown.style.display = "none";
    } else {
        whenDropdown.style.display = "none";
        continentDropdown.style.display = "flex";
        budgetDropdown.style.display = "none";
    }
})

continentOptions.forEach((button) => {

        button.addEventListener("click", () => {
            continentChoice.textContent = button.textContent;
            continentDropdown.style.display = "none";
        })
    });

// budget button
const budgetButton = document.querySelector("#budget-button");
const budgetDropdown = document.querySelector("#budget-dropdown");

const budgetChoice = document.querySelector("#budget-choice");
const budgetOptions = document.querySelectorAll("#budget-dropdown button")

budgetButton.addEventListener("click", () => {

    if (budgetDropdown.style.display === "flex") {
        budgetDropdown.style.display = "none";
    } else {
        whenDropdown.style.display = "none";
        continentDropdown.style.display = "none";
        budgetDropdown.style.display = "flex";
    }
})

budgetOptions.forEach((button) => {

        button.addEventListener("click", () => {
            budgetChoice.textContent = button.textContent;
            budgetDropdown.style.display = "none";
        })
    });