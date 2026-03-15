let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

menuBtn.onclick = function(){
menu.classList.toggle("active");
}

const img_dialog=document.querySelector('img.img_dialog')
const dialog=document.querySelector('dialog')
const fechar=document.querySelector('span.fechar_dialog')

img_dialog.onclick=function(){
    dialog.showModal()
}
fechar.onclick=function(){
    dialog.close()
}

function trocar(el){            /* trocar as imagens da div galery */
    imgGrande.src=el.src
}

dialog.addEventListener("click",e=>{        /* trocar imagens consoante o click na tela */
    if(e.target===dialog){
        dialog.close()
    }
  }

)