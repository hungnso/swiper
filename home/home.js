const productContainer = document.querySelector('.list-product')

const listProduct = [
    {
        url : "../assets/image/product-1.png",
        content: "EYEWEAR"
    },
    {
        url : "../assets/image/product-2.png",
        content: "WATCHES"
    },
    {
        url : "../assets/image/product-1.png",
        content: "EYEWEAR"
    },
  
]
listProduct.forEach((item, index) => {
   const itemProduct = document.createElement('div')
   itemProduct.classList.add('item-product')
   const productName = document.createElement('div')
   productName.classList.add('product-name')
   productName.textContent = item.content
   const productImg = document.createElement('img')
   productImg.src = item.url
   itemProduct.appendChild(productName)
   itemProduct.appendChild(productImg)
   productContainer.appendChild(itemProduct)

   itemProduct.addEventListener('click', () =>{
    console.log('click vao vi tri', index)
    window.location.href = "index.html";
   })

})