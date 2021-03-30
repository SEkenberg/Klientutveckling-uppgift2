function readFromLocalStorage() {
  const pros = JSON.parse(localStorage.getItem("products"));
  createProducts(pros);
}

function createProducts(data) {
  let products = document.getElementById("products");

  for (let i = 0; i < data.length; i++) {
    var wrapper = document.createElement("div");
    wrapper.id = data[i].id;
    products.appendChild(wrapper);

    var productTitle = document.createElement("div");
    productTitle.innerHTML = data[i].title;

    var productPrice = document.createElement("div");
    productPrice.innerHTML = data[i].price;

    wrapper.appendChild(productTitle);
    wrapper.appendChild(productPrice);

    var button = document.createElement("button");
    button.id = data[i].id;
    button.onclick = function (event, x) {
      var myobj = document.getElementById(data[i].id);
      myobj.remove();
      const pros = JSON.parse(localStorage.getItem("products"));
      const filteredPros = pros.filter((a) => a.id !== data[i].id);

      localStorage.setItem("products", JSON.stringify(filteredPros));
    };
    button.innerHTML = "Remove item";
    wrapper.appendChild(button);
  }
}
function clearCart(){
    localStorage.setItem("products", JSON.stringify([]));
    let products = document.getElementById("products");
    products.innerHTML = '';

}

readFromLocalStorage();
