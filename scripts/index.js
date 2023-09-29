const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((json) => { return json })
        .catch(err => console.log(err))

}

const showProductsOnDOM = async (products, selector) => {
    // create html
    let html = '';
    products.map((e) => {
        const { title, description, category, id, price, image } = e;
        html += `
        <div data-category="${category}" data-id="${id}" class="products__area_item">
        <img src="${image}" alt="">
        <h2>${title}</h2>
        <h4>${price} $</h4>
        <p>${description}</p>
    </div>
        `
    })
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

// start point
document.addEventListener("DOMContentLoaded", async () => {
    // get products
    const PRODUCTS = await getAllProducts();
    // display products
    showProductsOnDOM(PRODUCTS, ".products__area")
    // await addNewProduct();
})