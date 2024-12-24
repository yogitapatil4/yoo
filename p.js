const items=document.querySelectorAll(".add-to-cart");
items.forEach(button =>{
    button.addEventListener("click",() =>{
        alert('Add Item');
        window.location.href = "login.html";
    });
});