let products = {
  data: [
    {
      productName: "Mouse Gamer Redragon Rosa",
      category: "Mouse",
      price: "220,00",
      image: "./img/mouse-rosa-pe.jpeg",
      href: "./pp1.html",
    },
    {
      productName: "Mouse Florido",
      category: "Novos",
      price: "180,00",
      image: "./img/04.png",
      href: "./pp2.html",
    },
    {
      productName: "Mouse Red",
      category: "Novos",
      price: "99,00",
      image: "./img/mouse-red1.jpg",
      href: "./pp3.html",
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
    {
      productName: "Mouse Razer",
      category: "Usados",
      price: "129,00",
      image: "./img/05.png",
      href: "./pp4.html",
    },
    {
      productName: "Teclado Gamer Mini",
      category: "Teclado",
      price: "89,00",
      image: "./img/teclado.png",
      href: "./pp6.html",
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
    {
      productName: "Mouse Florido",
      category: "Novos",
      price: "180,00",
      image: "./img/04.png",
      href: "./pp2.html",
    },
    {
      productName: "Mouse Florido",
      category: "Novos",
      price: "180,00",
      image: "./img/04.png",
      href: "./pp2.html",
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
    {
      productName: "Teclado Gamer Redragon",
      category: "Teclado",
      price: "49,00",
      image: "./img/teclado_redragon.png",
      href: "./pp5.html", 
    },
    {
      productName: "Mouse Red",
      category: "Novos",
      price: "99,00",
      image: "./img/mouse-red1.jpg",
      href: "./pp3.html",
    },
    {
      productName: "Mouse Rat",
      category: "Mouse",
      price: "10,00",
      image: "./img/08.png",
      href: "./pp8.html",
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
    {
      productName: "Mouse Gamer Redragon Rosa",
      category: "Mouse",
      price: "220,00",
      image: "./img/mouse-rosa-pe.jpeg",
      href: "./pp1.html",
    },
    {
      productName: "Mouse Razer",
      category: "Usados",
      price: "129,00",
      image: "./img/05.png",
      href: "./pp4.html",
    },
    {
      productName: "Mouse Florido",
      category: "Novos",
      price: "180,00",
      image: "./img/04.png",
      href: "./pp2.html",
    },
    {
      productName: "Teclado Gamer Redragon",
      category: "Teclado",
      price: "49,00",
      image: "./img/teclado_redragon.png",
      href: "./pp5.html", 
    },
    {
      productName: "Mouse Microsoft Azul",
      category: "Usados",
      price: "189,00",
      image: "./img/07.png",
      href: "./pp7.html",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  /*name.innerText = i.productName.toUpperCase();*/
  container.appendChild(name);

  let link1 = document.createElement("a");
  link1.setAttribute("href", i.href);
  link1.innerHTML = i.productName.toUpperCase();
  name.appendChild(link1);
  
  //price
  let price = document.createElement("h6");
  price.innerText = "R$ " + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

document.addEventListener("keypress", function(e) {

  if(e.key === 'Enter'){
  
    const btn = document.querySelector("#search");
    btn.click();
  }
  
})

//Initially display all products
window.onload = () => {
  filterProduct("all");
};

