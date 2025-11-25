
const product_conteiner = document.getElementById('products-container')
const carrito_conteiner = document.getElementById ('cart-container')
const total_conteiner = document.getElementById ('total-container')

async function fetchProducts(){
    const response = await fetch ('https://dummyjson.com/products', 
        {
            method: 'GET',
        }
    )
    const data = await response.json()
    return data
}

function renderProducts(){
    let products_html= '' 
    for(const product of data){
        products_html += `
            <div class="product-card">
                <h2>${product.title}</h2>
                <p>${product.price}</p>
                <button data-id="${product.id}" class="add-to-cart">Ageregar al carrito</button>
                <p>Stock: ${product.stock}</p>
            </div>
        `
    }
    product_conteiner.innerHTML = products_html
}