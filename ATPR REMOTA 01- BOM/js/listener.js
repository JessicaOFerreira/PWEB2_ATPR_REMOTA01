//-----------------------------------------------------------
//Itens Gerais
let irBtn = document.querySelector(".submit_button");
let menu = document.querySelector("#menu");
let address = document.querySelector(".address");
let closeBtn = document.querySelector(".close_button");
let tools = document.querySelector("#tools");
let browser = document.querySelector("#browser");
let iframe = document.querySelector(".responsive-iframe")
//--------------------------------------------------

irBtn.addEventListener("click", function (e) {
    
    let value = address.value;
    let menuFrame = open(value, "frameTab");
});

menu.addEventListener("click", function () {
    alert("Informacoes Gerais da Pagina: \n" + "URL: " + menuFrame.location.href +
    "\nProtocolo: "+ menuFrame.location.protocol +
    "\nPorta: "+ menuFrame.location.port +
    "\nLargura X Comprimento: " + menuFrame.innerWidth + " X "+ menuFrame.innerHeight +
    "\nSistema Operacional: "+ menuFrame.navigator.plataform);
});



closeBtn.addEventListener("click", function () {
    tools.style.display = "none";

    let newWindow = document.createElement("button")
    newWindow.id = "newWindow";
    newWindow.insertAdjacentHTML("afterbegin", "Nova Janela")

    browser.append(newWindow);

    open("about:blank", "frameTab");

    address.value = "";

    newWindow.addEventListener("click", function () {
        browser.removeChild(newWindow);
        tools.style.display = "block";

        open("./readme/readme.html", "frameTab")
    });
});


