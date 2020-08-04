//-----------------------------------------------------------
//Itens Gerais
let irBtn = document.querySelector(".submit_button");
let menu = document.querySelector("#menu");
let address = document.querySelector(".address");
let iframe = document.querySelector(".responsive-iframe");
let closeBtn = document.querySelector(".close_button");
let tools = document.querySelector("#tools");
let browser = document.querySelector("#browser");
//--------------------------------------------------

irBtn.addEventListener("click", function (e) {
    e.preventDefault(e);
    
    if (address.value == "" || address.value == " ") {
        
        alert("Campo de Endereco Obrigatorio!");
    
    }

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

    iframe.src = "about:blank";

    newWindow.addEventListener("click", function(){
        browser.removeChild(newWindow);
        tools.style.display="block";
    });
});

//botao de menu funciona apenas com um alert simples. N consegui demontrar as informações solicitadas
let url = document.iframe.location.href;

menu.addEventListener("click", function(){

    alert("Informacoes da Pagina de Endereco:\n " 
    + "URL: " + url);
});
