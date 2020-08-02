//-----------------------------------------------------------
//Itens Gerais
let irBtn = document.querySelector(".submit_button");
let menu = document.querySelector(".menu");
let address = document.querySelector(".address");
let iframe = document.querySelector("responsive-iframe");
let closeBtn = document.querySelector(".close_button");
let tools = document.querySelector("#tools");
let browser = document.querySelector("#browser");
//--------------------------------------------------

console.log(irBtn);

irBtn.addEventListener("click", function (e) {
    e.preventDefault(e);

    if (address.value == "" || address.value == " ") {
        
        alert("Campo de Endereco Obrigatorio!");
    
    }
    //n funciona isso aqui home
    else{
        iframe.src= address.value;
    }
    
}); 

closeBtn.addEventListener("click", function(){
    tools.style.display="none";

    let newWindow= document.createElement("button")
    newWindow.id="newWindow";
    newWindow.insertAdjacentHTML("afterbegin","Nova Janela")

    browser.append(newWindow);

    newWindow.addEventListener("click", function(){
        browser.removeChild(newWindow);
        tools.style.display="block";
    });
});

menu.addEventListener("click", function(){
    let url= document.iframe.location.url;
    alert("UL do Endereço: "+ url);
    console.log(url)
});
