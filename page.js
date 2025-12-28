
selectItemID=0

document.cookie.split(";").forEach((item) => {
    var temp = item.split("=");
    if (temp[0].trim() === "selectItemId") {
      selectItemID=temp[1];
    }
  });

console.log(selectItemID);

fetch((`https://fakestoreapi.com/products/${selectItemID}`).trim())
  .then(response => response.json())
  .then(data => {
    let element=document.createElement("div")
    element.className="container1 rounded-5 container-lg mt-5 p-4 ps-sm-5"
    element.innerHTML=`
    <div class="row w-100 h-100">
            <div class="col-md-5 d-flex justify-content-center align-items-center">
                <img src="${data.image}" alt="">
            </div>
            <div class="col-md-7">
                <h2 class="title fw-bold mt-5">${data.title}</h2>
                <h1 class="text-success fw-bold">$${data.price}</h1>
                <p class="Category fw-bold fs-5 text-capitalize">Category:${data.category}</p>
                <div class="starBox fs-5">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span class=" fw-bold ms-2">(${data.rating.rate}/5, ${data.rating.count} reviews)</span>
                </div>
                <h5 class="description mt-3 ">${data.description}</h5>
                <div class="btnBox mt-4" >
                    <button class="fw-bold rounded-3 ">
                        <i class="fa-solid fa-cart-shopping "></i> Add to Cart
                    </button>
                    <button class=" fw-bold rounded-3 ms-sm-2">
                        <i class="fa-solid fa-heart"></i> Wishlist
                    </button>
                </div>
            </div>
        </div>
    `
    document.querySelector("body").appendChild(element);
  })
  .catch(()=> console.log("error in fetching"))