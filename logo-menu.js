// Obtener el elemento con el id "logo-menu"
var logoMenu = document.getElementById("logo-menu");

// Crear un elemento div para contener el logo
var logoDiv = document.createElement("div");
logoDiv.className = "logo";

// Crear un elemento img para el logo
var logoImg = document.createElement("img");
logoImg.src = "logo.jpeg";
logoImg.alt = "Mi blog de derecho";

// Añadir el elemento img al elemento div
logoDiv.appendChild(logoImg);

// Añadir el elemento div al elemento logo-menu
logoMenu.appendChild(logoDiv);

// Crear un elemento ul para contener el menú
var menuUl = document.createElement("ul");
menuUl.className = "menu";

// Crear un array con las opciones del menú y sus enlaces
var menuOptions = [
  {text: "Inicio", link: "index.html"},
  {text: "Quién soy", link: "quien-soy.html"},
  {text: "Contacto", link: "contacto.html"},
  {text: "Boletín", link: "boletin.html"}
];

// Recorrer el array y crear los elementos li y a para cada opción
for (var i = 0; i < menuOptions.length; i++) {
  // Crear un elemento li
  var menuLi = document.createElement("li");
  menuLi.className = "menu-option";

  // Crear un elemento a
  var menuA = document.createElement("a");
  menuA.href = menuOptions[i].link;
  menuA.textContent = menuOptions[i].text;

  // Añadir el elemento a al elemento li
  menuLi.appendChild(menuA);

  // Añadir el elemento li al elemento ul
  menuUl.appendChild(menuLi);
}

// Añadir el elemento ul al elemento logo-menu
logoMenu.appendChild(menuUl);
