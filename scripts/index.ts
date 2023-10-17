interface Products{
    id: number,
    category: string
}

enum Constanst {
    baseURL = "https://fakestoreapi.com"
}


function getAllProducts(endpoint: string): Promise<any>{
    return fetch(`${Constanst.baseURL}/${endpoint}`)
            .then(res=>res.json())
            .then(json=> json)
}

function displayProducts(data: Products[]):void{
    console.log(data[0])
}

// start point
document.addEventListener('DOMContentLoaded', () =>{
    getAllProducts("products").then((data)=>{displayProducts(data)})
})