function getProductsFromApi() {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((json) => {
      createProducts(json);
    });
}

function createProducts(data) {
  let products = document.getElementById("products");

  for (let i = 0; i < data.length; i++) {
    var productCategory = document.createElement("div");
    productCategory.innerHTML = data[i].category;

    var productTitle = document.createElement("div");
    productTitle.innerHTML = data[i].title;

    var productDescription = document.createElement("div");
    productDescription.innerHTML = data[i].description;

    var productImage = document.createElement("img");
    productImage.src = data[i].image;

    var productPrice = document.createElement("div");
    productPrice.innerHTML = data[i].price;

    products.appendChild(productCategory);
    products.appendChild(productTitle);
    products.appendChild(productDescription);
    products.appendChild(productImage);
    products.appendChild(productPrice);

    var button = document.createElement("button");
    button.id = data[i].id;
    button.onclick = function (event, x) {
      const pros = JSON.parse(localStorage.getItem("products"));
      pros.push({ id: data[i].id, title: data[i].title, price: data[i].price });

      localStorage.setItem("products", JSON.stringify(pros));
    };
    button.innerHTML = "Add to cart";
    products.appendChild(button);
  }
}

getProductsFromApi();
const pros = JSON.parse(localStorage.getItem("products"));
if (!pros) localStorage.setItem("products", JSON.stringify([]));
