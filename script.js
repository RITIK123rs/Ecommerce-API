let container3wrap = false;
let container4btn = ".allBtn";



function container3Display() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((info) => {
      data = info;
      data.map((item) => {
        if (
          item.id != 1 &&
          item.id != 20 &&
          (item.category == "men's clothing" ||
            item.category == "women's clothing")
        ) {
          let element = document.createElement("div");

          element.addEventListener("click",()=>{
            selectItem=item.id;
            document.cookie=`selectItemId= ${item.id}; path=/`;
            console.log(document.cookie)
            window.open("page.html");
          })

          element.className = "card bg-transparent border-0 mb-3";
          element.innerHTML = `<div class="card-img d-flex justify-content-center px-5 p-3">
                    <img src="${item.image}">
                </div>
                <div class="card-body">
                    <h5 class="card-tile pe-1 fw-bold">${item.title}</h5>
                    <div class="starBox">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span class=" fw-bold ms-2">(${item.rating.rate}/5)</span>
                    </div>
                    <h3 class="price fw-bold text-success mt-2"> $ ${item.price}</h3>

                </div>`;

          document.querySelector(".container3 .content ").appendChild(element);
        }
      });
    })
    .catch(() => console.log("Container3 data fetching fail"));
}

function flexDisplay() {
  if (container3wrap) {
    document.querySelector(".container3 .content").style.flexWrap = "nowrap";
    container3wrap = false;
  } else {
    document.querySelector(".container3 .content").style.flexWrap = "wrap";
    container3wrap = true;
  }
}

function container4color(num) {
  document.querySelector(`.container4 ${container4btn}`).style.color =
    "rgba(178, 176, 175, 1)";
  switch (num) {
    case 1:
      container4btn = ".allBtn";
      break;

    case 2:
      container4btn = ".maleBtn";
      break;

    case 3:
      container4btn = ".femaleBtn";
      break;
  }
  document.querySelector(`.container4 ${container4btn}`).style.color = "black";
}

function container4Display(num) {
  container4color(num);
  document.querySelector(".container4 .content ").innerHTML = " ";
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((info) => {
      data = info;
      data.map((item) => {
        condition = " ";
        switch (num) {
          case 1:
            condition =
              item.category == "men's clothing" ||
              item.category == "women's clothing";
            break;
          case 2:
            condition = item.category == "men's clothing";
            break;

          case 3:
            condition = item.category == "women's clothing";
            break;
        }
        if (condition) {
          let element = document.createElement("div");
          element.addEventListener("click",()=>{
            selectItem=item.id;
            document.cookie=`selectItemId= ${item.id}; path=/`;
            console.log(document.cookie)
            window.open("page.html");
          })

          element.className = "card bg-transparent border-0 mb-3";
          element.innerHTML = `<div class="card-img d-flex justify-content-center px-5 p-3">
                    <img src="${item.image}">
                </div>
                <div class="card-body">
                    <h5 class="card-tile pe-1 fw-bold">${item.title}</h5>
                    <div class="starBox">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span class=" fw-bold ms-2">(${item.rating.rate}/5)</span>
                    </div>
                    <h3 class="price fw-bold text-success mt-2"> $ ${item.price}</h3>

                </div>`;

          document.querySelector(".container4 .content ").appendChild(element);
        }
      });
    })
    .catch(() => console.log("Container3 data fetching fail"));
}

container3Display();
container4Display(1);




