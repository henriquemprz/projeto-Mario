 const botaoTrailer = document.querySelector(".botao-trailer")
 const botaoFecharModal = document.querySelector(".fechar-modal");
 const video = document.getElementById("video");
 const modal = document.querySelector (".modal")
 const linkDoVideo = video.src 

 
 function AlternarModal(){
    modal.classList.toggle("aberto")    // usar toggle ou add/remove //
 }
 botaoTrailer.addEventListener("click", () =>{
   AlternarModal()
    video.setAttribute("src",linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {

    AlternarModal()
video.setAttribute("src", " ")        
})

