/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];
/*
       Step 1: Write a function that will create a menu component as seen below:
    <div class="menu">
      <ul>
          {each menu item as a list item}
      </ul>
    </div>

        The function takes an array as its only argument. */

function createMenu(arr) {
  const nav = document.createElement("div");
  const navItm = document.createElement("ul");

  //Step 2: Inside this function, iterate over the array creating a list item <li> element 
  //for each item in the array. Add those items to the <ul>
  
  nav.classList.add("menu");

  //Step 3: Using a DOM selector, select the menu button 
  //(the element with a class of 'menu-button') currently on the DOM.
  arr.forEach(link => {
    let mnuItm = document.createElement("li");
    mnuItm.textContent = link;
    navItm.appendChild(mnuItm);
  });

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 
  //'menu--open' on the menu (your div with a 'menu' class).
  
let mnuBtn = document.querySelector(".menu-button");
  mnuBtn.addEventListener("click", () => {
    nav.classList.toggle("menu--open");
  });
  nav.appendChild(navItm);

  // Step 5: return the menu component.
  return nav;
}
// Step 6: add the menu component to the DOM.
document.querySelector(".header").appendChild(createMenu(menuItems));
