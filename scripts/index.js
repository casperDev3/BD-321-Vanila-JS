const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((json) => { return json })
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
            <button>
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

// start point
document.addEventListener("DOMContentLoaded", async () => {
    // get elements DOM
    const INPUT_SELECT = document.querySelector("#products__sort")
    const INPUT_SEARCH = document.querySelector("#filter_search")
    // get products
    const PRODUCTS = await getAllProducts();
    // display products
    showProductsOnDOM(PRODUCTS, ".products__area")

    // add event listeners
    INPUT_SELECT.addEventListener("change", (e) => {
        sortProducts(PRODUCTS, e.target.value, ".products__area")
    })
    INPUT_SEARCH.addEventListener("input", (e) => {
        filterBySearchQuery(PRODUCTS, e.target.value, ".products__area")
    })

})