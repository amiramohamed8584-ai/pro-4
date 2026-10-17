var products = document.querySelectorAll(".list li")
var cart = document.getElementById("cart")
var showprice = document.getElementById("showprice")
var Totalprice = 0
var pricerusilt = document.getElementById("pricerusilt")
products.forEach((product)=>{
    var buyButton = product.querySelector("button")
    buyButton.onclick=function(){
        var price = Number(product.dataset.price)
        Totalprice +=price
        var card=product.querySelector(".card").cloneNode(true)
        cart.append(card)
        showprice.classList.remove("hidden")
        card.querySelector(".card-actions").remove()
        var removeButton=document.createElement("button")
        removeButton.innerHTML="Remove"
        removeButton.className="btn bg-blue-200"
        card.querySelector(".card-body").append(removeButton)
        removeButton.onclick=function(){
            Totalprice -=price
            card.remove()
            if(cart.children.length===0){
                showprice.classList.add("hidden")
                pricerusilt.innerHTML=""
                Totalprice=0
            }else{
                if(pricerusilt.innerHTML !== ""){
                    showprice.click()
                }
            }
        }
    }
})
showprice.onclick = function(){
    var finalprice =Totalprice;
    if(Totalprice > 500){
       finalprice =Totalprice*0.8
       pricerusilt.innerHTML=`
       <div class="alrt alrt-success text-center bg-green-100 text-green-700 p-3 shadow-sm font-bold text-sm mb-3">
       انت حصلت علي خصم 20 %</div>
       <p class="mt-3 text-center bg-white-100 text-green-700 p-4 shadow-md font-bold text-sm mb-3"> Total:${Totalprice} $ </p>
       <p class="mt-3 text-center bg-green-100 text-green-700 p-3 shadow-sm font-bold text-sm mb-3"> finalprice:${finalprice} $ </p>
       `
    }else{
        pricerusilt.innerHTML=`
        <p class="mt-3 text-center bg-white-100 text-green-700 p-4 shadow-md font-bold text-sm mb-3"> Total:${Totalprice} $ </p>
        `
    }
}
var search =document.getElementById("search")
search.oninput =function(){
    var value =search.value.toLowerCase()
        products.forEach(function(product){
            var name =product.querySelector(".card-title").innerText.toLowerCase()
            if(name.includes(value)){
                product.style.display= ""
            }else{
                product.style.display= "none"

            }
        }) 
}