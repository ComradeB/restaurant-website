const content = document.getElementById("content");

const pageContent = document.createElement("div");
// const pageContent = document.querySelector(".page-content");

pageContent.classList.add("content-div");

const navBar = document.createElement("div");
navBar.classList.add("flex");
content.appendChild(navBar);

const menuButton = document.createElement("button");
menuButton.textContent = "menu";
menuButton.classList.add("btn");
menuButton.classList.add("animate-from-left");
navBar.appendChild(menuButton);

const homeButton = document.createElement("button");
homeButton.textContent = "SHU & ZHU";
homeButton.classList.add("btn");
homeButton.classList.add("home-btn");
homeButton.classList.add("animate");
navBar.appendChild(homeButton);

const contactButton = document.createElement("button");
contactButton.textContent = "contact";
contactButton.classList.add("btn");
contactButton.classList.add("animate-from-right");
navBar.appendChild(contactButton);

const buttons = document.querySelectorAll("button");

function activeButton(clickedButton) {
  clickedButton.onclick = () => {
    clickedButton.style.cssText = "opacity: 100%; transform: scale(1.5, 1.5);";
    buttons.forEach((button) => {
      if (button !== clickedButton) {
        button.style.cssText = "opacity: 30%; border: none";
      }
    });
    if (clickedButton === homeButton) generateHomePageContent(pageContent);
    if (clickedButton === contactButton)
      generateContactPageContent(pageContent);
    if (clickedButton === menuButton) generateMenuPageContent(pageContent);
  };
}

activeButton(menuButton);

activeButton(homeButton);
pageContent.classList.add("animate");
pageContent.textContent = `We are a humble, homegrown restik serving the Chistyak area of Moscow. We have plenty of yumziki for everyone. Once we scale up our operation, we'll be looking to expand. Come on in and let us show you around.`;
content.appendChild(pageContent)

activeButton(contactButton);

function generateHomePageContent(pageContent) {
  pageContent.classList.remove("menu-grid");
  pageContent.classList.add("content-div");
  pageContent.classList.add("animate");
  pageContent.innerHTML = "";
  pageContent.textContent = `We are a humble, homegrown restik serving the Chistyak area of Moscow. We have plenty of yumziki for everyone. Once we scale up our operation, we'll be looking to expand. Come on in and let us show you around.`;
  content.appendChild(pageContent);
}

function generateContactPageContent(pageContent) {
  pageContent.innerHTML = "";
  pageContent.classList.remove("menu-grid");
  pageContent.classList.add("content-div");
  pageContent.classList.add("animate");
  const address = document.createElement("div");
  address.textContent = "address";
  address.style.cssText = "margin-right: 4%"
  pageContent.appendChild(address);
  const map = document.createElement('p')
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.6263793267553!2d37.64408551593096!3d55.76499228055663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a622d951c25%3A0x55e670b488ce781f!2sBol&#39;shoy%20Khariton&#39;yevskiy%20Pereulok%2C%2012%D0%90%2C%20Moskva%2C%20101000!5e0!3m2!1sen!2sru!4v1639604442672!5m2!1sen!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  pageContent.appendChild(map)
  content.appendChild(pageContent);
}

function generateMenuPageContent(pageContent) {
  pageContent.innerHTML = "";
  pageContent.classList.remove("content-div");
  pageContent.classList.add("menu-grid");
  pageContent.classList.add("animate");

  const dessertTitle = document.createElement("div");
  dessertTitle.textContent = "desserts";
  dessertTitle.style.cssText = "align-items: start; margin-right: 70%"
  dessertTitle.style.gridColumn = "1 / span 2";
  pageContent.appendChild(dessertTitle);

  const dessertOneImg = document.createElement("div");
  const cakeOne = new Image(250, 250);
  cakeOne.src = "./images/cake.png";
  dessertOneImg.appendChild(cakeOne);
  dessertOneImg.style.gridRow = "2";
  pageContent.appendChild(dessertOneImg);

  const dessertTwoImg = document.createElement("div");
  const cakeTwo = new Image(250, 250);
  cakeTwo.src = "./images/cake.jpeg";
  dessertTwoImg.appendChild(cakeTwo);
  dessertTwoImg.style.gridRow = "2";
  pageContent.appendChild(dessertTwoImg);

  const dessertOneName = document.createElement("div");
  dessertOneName.textContent = `random cake`;
  dessertOneName.style.cssText = "grid-row: 3;";
  pageContent.appendChild(dessertOneName);

  const dessertTwoName = document.createElement("div");
  dessertTwoName.textContent = `chocolate cake`;
  dessertTwoName.style.cssText = "grid-area: 3 / 2;";
  pageContent.appendChild(dessertTwoName);
  content.appendChild(pageContent);

  //------------------
  // divider
  const divider = document.createElement("div");
  divider.style.cssText = "grid-area: 4 / span 2;";
  pageContent.appendChild(divider);
  //------------------

  const drinksTitle = document.createElement("div");
  drinksTitle.textContent = "drinks";
  drinksTitle.style.cssText = "grid-area: 5 / span 2; margin-right: 70%";
  pageContent.appendChild(drinksTitle);

  const drinksOneImg = document.createElement("div");
  const drinkOne = new Image(150, 250);
  drinkOne.src = "./images/milkshake.png";
  drinksOneImg.appendChild(drinkOne);
  drinksOneImg.style.gridRow = "6";
  pageContent.appendChild(drinksOneImg);

  const drinksTwoImg = document.createElement("div");
  const drinkTwo = new Image(150, 250);
  drinkTwo.src = "./images/smoothie.png";
  drinksTwoImg.appendChild(drinkTwo);
  drinksTwoImg.style.gridRow = "6";
  pageContent.appendChild(drinksTwoImg);

  const drinksOneName = document.createElement("div");
  drinksOneName.textContent = `milkshakes`;
  drinksOneName.style.cssText = "grid-row: 7;";
  pageContent.appendChild(drinksOneName);

  const drinksTwoName = document.createElement("div");
  drinksTwoName.textContent = `smoothies`;
  drinksTwoName.style.cssText = "grid-area: 7;";
  pageContent.appendChild(drinksTwoName);
  content.appendChild(pageContent);
  
}
