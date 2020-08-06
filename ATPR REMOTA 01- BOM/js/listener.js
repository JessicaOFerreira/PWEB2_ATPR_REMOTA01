//-----------------------------------------------------------
//Itens Gerais
let irBtn = document.querySelector(".submit_button");
let menu = document.querySelector("#menu");
let address = document.querySelector(".address");
let closeBtn = document.querySelector(".close_button");
let tools = document.querySelector("#tools");
let browser = document.querySelector("#browser");
let iframe;
//--------------------------------------------------

irBtn.addEventListener("click", function (e) {
    e.preventDefault(e);
    
    if (address.value == "" || address.value == " ") {
        
        alert("Campo de Endereco Obrigatorio!");
    
    }

    else{
        
        let value = address.value;
        iframe = open(value, "frameTab");

        //Menu não funciona
        menu.addEventListener("click", function(){
            alert("Informacoes Gerais da Pagina: \n" + "URL: " + iframe.href);
        });

    }
    
}); 


closeBtn.addEventListener("click", function(){
    tools.style.display="none";

    let newWindow= document.createElement("button")
    newWindow.id="newWindow";
    newWindow.insertAdjacentHTML("afterbegin","Nova Janela")

    browser.append(newWindow);

    iframe = open("about:blank", "frameTab");

    address.value = "";

    newWindow.addEventListener("click", function(){
        browser.removeChild(newWindow);
        tools.style.display="block";
    });
});


