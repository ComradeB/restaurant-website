const content = document.getElementById("content");

const navBar = document.createElement("div");
navBar.classList.add("flex");
content.appendChild(navBar);

const menuButton = document.createElement("button");
menuButton.textContent = "menu";
menuButton.classList.add("btn");
navBar.appendChild(menuButton);

const homeButton = document.createElement("button");
homeButton.textContent = "ZHU & SHU";
homeButton.classList.add("btn");
homeButton.classList.add("home-btn");
navBar.appendChild(homeButton);

const contactButton = document.createElement("button");
contactButton.textContent = "contact";
contactButton.classList.add("btn");
navBar.appendChild(contactButton);

const buttons = document.querySelectorAll("button");

function activeButton(clickedButton) {
  clickedButton.onclick = e => {
      e.target.style.cssText = "opacity: 100%; font-size: var(--fs-600)"
    buttons.forEach((button) => {
        if (button !== e.target) {
            button.style.cssText = 'opacity: 30%; border: none'
        }
    });
  };
}

activeButton(menuButton);
activeButton(homeButton);
activeButton(contactButton);