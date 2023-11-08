const searchInput= document.getElementById("searchname");
const productName= document.querySelectorAll(".product");
const buttons = document.querySelectorAll(".filter");

const searchPriceBox = document.getElementById("price-button").querySelector("button");
// console.log(searchPriceBox)



const changeClass = (filter) => {
    buttons.forEach ((button) => {
        if (button.dataset.filter === filter) {
            button.classList.add("selected")
        } else {
            button.classList.remove("selected")
        }
    }


)};

const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    productName.forEach (productname =>{
        const name = productname.children[1].innerText.toLowerCase();
    if (name.includes(searchValue)){
        productname.style.display= "block";
    } else {
        productname.style.display= "none";
    }
        
    })

    console.dir(searchValue);
};
const filterHandler = (event) => {
    const filter= event.target.dataset.filter;
    changeClass(filter)
    
    productName.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
        product.style.display = "block";
    } else {
        filter === category
        ?  (product.style.display = "block")
        :  (product.style.display = "none");
    }
    })
}
    

searchInput.addEventListener("keyup",searchHandler);
buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
}) 

const searchPriceHandler = (event) =>{
    const searchPrice = +event.target.parentElement.children[0].value;
    
    productName.forEach((product) => {
        const productPrice = product.children[2].innerText;
        const netPrice = +productPrice.split(" ")[0];
        
        if (searchPrice === netPrice){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
        
        
    })

}

searchPriceBox.addEventListener("click", searchPriceHandler);