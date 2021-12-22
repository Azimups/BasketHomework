let basketBtn = document.querySelector(".basket-btn .fas");
let basketTotal = document.querySelector(".basket-container")
let closeIcon = document.querySelector(".close-icon")
let addIcon = document.querySelector(".add-icon");
let addBtn = document.querySelector(".btnAdd");
let added = document.querySelectorAll(".added")
const basketIcons = document.querySelectorAll(".add-product")
const basketArr =[];
basketIcons.forEach(icon => {
    icon.addEventListener("click",function(e){
        let fullpath = e.target.parentElement.previousElementSibling.src;
        let addedProduct = e.target.nextElementSibling;
        addedProduct.style.display="block"
        addToBasket(e);
        function addToBasket(e){
            let basketimg = document.createElement("img");
            basketimg.setAttribute("src",fullpath)
            basketTotal.appendChild(basketimg)
            basketArr.push(fullpath);
            localStorage.setItem("basketArr",basketArr)
            localStorage.getItem(basketArr);
            basketBtn.addEventListener("click", function(){
                doOpen();
                addIcon.style.display="none";
                addBtn.style.display="none";
            })
            closeIcon.addEventListener("click", function(){
                basketTotal.style.display="none";
            })
        }
    })
});
basketBtn.addEventListener("click", function(){
    doOpen();
})
closeIcon.addEventListener("click", function(){
    doClose();
})
addIcon.addEventListener("click", function(){
    doClose();
})
function doOpen(){
    basketTotal.style.display="block";
}
function doClose(){
    basketTotal.style.display="none";
}