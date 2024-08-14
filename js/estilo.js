const el_text = document.querySelector("#text");

(function (){
    const getText = el_text.textContent;
    const textSlipt = getText.split('');
    el_text.textContent="";
    textSlipt.map((intem,line)=>{
        setTimeout(()=>{

            el_text.textContent += intem;
        }, 100 * line);
    })
})();

window.addEventListener("scroll", function(){
    let header= document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY >0)
})