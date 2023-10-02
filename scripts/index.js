const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((json) => {
            localStorage.setItem("products", JSON.stringify(json))
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
        </div>
            `
        })
    ) : html = "<h1>Products not found</h1>"
    // get element 
    const AREA = document.querySelector(selector)
    // instert html in DOM
    AREA.innerHTML = html;
    // add listeners 
    const ADD_TO_CART_BTNS = document.querySelectorAll(".add_to_cart")
    // add listeners
    ADD_TO_CART_BTNS.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const PRODUCT_ID = e.target.getAttribute("data-id")
            addProductsToCart(PRODUCT_ID)
        })
    })
}

const addNewProduct = async () => {
    await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

const filterBySearchQuery = (products, query, selector_area) => {
    let filteredProducts = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    localStorage.setItem("dynamic_products", JSON.stringify(filteredProducts))
    showProductsOnDOM(filteredProducts, selector_area)
}

const sortProducts = (products, type, selector_area) => {
    let sortedProducts;
    if (type == "ASC") {
        sortedProducts = products.sort((a, b) => a.price - b.price)
    } else {
        sortedProducts = products.sort((a, b) => b.price - a.price)
    }
    showProductsOnDOM(sortedProducts, selector_area)
}

const addProductsToCart = (product_id) => {
    // get cart from LS
    let cart = localStorage.getItem("cart");
    // check if is CART
    cart ? cart = JSON.parse(cart) : cart = [];
    // check if cart empty
    if (cart.length > 0) {
        let exist = cart.some(product => product.id === product_id)
        console.log(exist)
    } else {
        cart.push({ id: product_id, qty: 1 })
    }
    // write to LS
    localStorage.setItem("cart", JSON.stringify(cart))
}

// start point
document.addEventListener("DOMContentLoaded", async () => {
    // get elements DOM
    const INPUT_SELECT = document.querySelector("#products__sort")
    const INPUT_SEARCH = document.querySelector("#filter_search")

    // get all products
    const PRODUCTS = await getAllProducts();
    // display products
    showProductsOnDOM(PRODUCTS, ".products__area")

    // add event listeners
    INPUT_SELECT.addEventListener("change", (e) => {
        // get dynamic products
        let current_products;
        const DYNAMIC_PRODUCTS = localStorage.getItem("dynamic_products")
        DYNAMIC_PRODUCTS ? current_products = JSON.parse(DYNAMIC_PRODUCTS) : current_products = PRODUCTS
        sortProducts(current_products, e.target.value, ".products__area")
    })
    INPUT_SEARCH.addEventListener("input", (e) => {
        filterBySearchQuery(PRODUCTS, e.target.value, ".products__area")
    })

})

// cleaner LS
document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem('dynamic_products')
})