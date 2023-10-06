const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((json) => {
            localStorage.setItem("products", JSON.stringify(json))
            return json
        })
        .catch(err => console.log(err))

}

const getAllCategory = async () => {
    return await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then((json) => {
            localStorage.setItem("category", JSON.stringify(json))
            return json
        })
        .catch(err => console.log(err))

}

const showProductsOnDOM = async (products, selector) => {
    // create html
    let html = '';
    // check if is elements in array
    products.length > 0 ? (
        products.map((e) => {
            const { title, description, category, id, price, image } = e;
            html += `
            <div data-category="${category}" data-id="${id}" class="products__area_item">
            <img src="${image}" alt="">
            <h2>${title}</h2>
            <h4>${price} $</h4>
            <p>${description}</p>
            <button data-id=${id} class="add_to_cart">
                Add to Cart
            </button>
            <button>Delete from Cart</button>
        </div>
            `
        })
    ) : html = "<h1>Products not found</h1>"
    // show in html
    $(selector).html(html)

    
    
    // add listeners 
    const ADD_TO_CART_BTNS = document.querySelectorAll(".add_to_cart")
    // add listeners
    ADD_TO_CART_BTNS.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const PRODUCT_ID = e.target.getAttribute("data-id")
            // addProductsToCart(PRODUCT_ID)
            console.log(PRODUCT_ID)
        })
    })
}

const showCategoriesOnDOM = async (categories, selector) => {
    // create html
    let html = '<option selected disabled>Choose category</option>';
    // check if is elements in array
    categories.length > 0 ? (
        categories.map((e) => {
            html += `
            <option value="${e}">${e}</option>
            `
        })
    ) : html = ""
    // show in html
    $(selector).append(html)
}

// start point
document.addEventListener("DOMContentLoaded", async () => {
    // get data
    const PRODUCTS = await getAllProducts();
    const CATEGORIES = await getAllCategory();
    // display data
    showProductsOnDOM(PRODUCTS, ".products__area");
    showCategoriesOnDOM(CATEGORIES, "#category");
    //
    $("#category").on("change", ()=>{
        const VALUE = $("#category").val();
        const FILTERED_PRODUCTS = PRODUCTS.filter(products => products.category == VALUE)
        showProductsOnDOM(FILTERED_PRODUCTS, ".products__area")
    })
})



