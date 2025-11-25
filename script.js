
const product_conteiner = document.getElementById('products-container')
const carrito_conteiner = document.getElementById ('cart-container')
const total_conteiner = document.getElementById ('total-container')

async function fetchProducts(){
    const response = await fetch ('https://dummyjson.com/products', 
        {
            method: 'GET',
        }
    )
    const products = await response.json()
    return products
}

function renderProducts(){
    product_conteiner.innerHTML = ''
}