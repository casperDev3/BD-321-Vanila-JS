const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json))
}

// start point
document.addEventListener("DOMContentLoaded", () => {
    console.log("start program");
    getAllProducts();
})