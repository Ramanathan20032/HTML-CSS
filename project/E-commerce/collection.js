var product_Container = document.getElementById("products")
var search = document.getElementById("search")

var product_list = product_Container.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()

    for(var i = 0 ; i < product_list.length ; i++){
        var product_name = product_list[i].querySelector("p").textContent

        if(product_name.toUpperCase().indexOf(enteredValue) < 0){
            product_list[i].style.display="none"
        }
        else{
            product_list[i].style.display="block" 
        }
    }
}) 