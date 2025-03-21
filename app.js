const barraLinks= document.getElementsByClassName("btn-bar")[0]
const btnAbrir=document.getElementById("open-btn")
const btnFechar=document.getElementById("close-btn")

function abrir(){
    barraLinks.style.left="0"
    btnAbrir.style.display="none"
    btnFechar.style.display="flex"

}

function  fechar(){
    barraLinks.style.left="-100%"
    btnAbrir.style.display="flex"
    btnFechar.style.display="none"
}

console.log("adicionado agora")

