const tpNav= document.querySelector(".topnav")//barra do topo
const opnIcon= document.querySelector(".open-icon")//icone pra abrir a barra
const clsIcon= document.querySelector(".close-icon")//ico pra fechar a barra
const barBtns= document.querySelector(".bar-btns")//barra com os botões
const mCont= document.querySelector(".mcontainer")//container principal


function opn(){
    barBtns.style.right="0"
    opnIcon.style.display="none"
    clsIcon.style.display="flex"
}

function cls(){
    barBtns.style.display="none"
    opnIcon.style.display="flex"
    clsIcon.style.display="none"
}





