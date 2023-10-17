interface Products {
    id: number,
    category: string,
    title: string
}

enum Constanst {
    baseURL = "https://fakestoreapi.com"
}


function getAllProducts(endpoint: string): Promise<any> {
    return fetch(`${Constanst.baseURL}/${endpoint}`)
        .then(res => res.json())
        .then(json => json)
}

function displayProducts(data: Products[]): void {
    console.log(data[0])
    let html: string = "";
    data.map((item: Products) => {
        const { id, title } = item;
        html += `<h1>${title}</h1>`
    })
    document.querySelector(".area").innerHTML = html;
}

// start point
document.addEventListener('DOMContentLoaded', () => {
    getAllProducts("products").then((data) => { displayProducts(data) })
})