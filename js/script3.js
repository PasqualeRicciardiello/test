let handlerBlk1 = document.getElementById("blok1");
let handlerBlk2 = document.getElementById("blok2");

handlerBlk1.style.width="400px";
handlerBlk1.style.height="400px";
handlerBlk1.style.float="left";
handlerBlk1.style.backgroundColor="red";
handlerBlk1.innerHTML="blok1"

handlerBlk2.style.width="400px";
handlerBlk2.style.height="400px";
handlerBlk2.style.float="left"
handlerBlk2.style.backgroundColor="green";
handlerBlk2.innerHTML="blok2"

function addParagraf(blockname) {
    let paragraf = document.createElement("P");
    let textPar = document.createTextNode("tekst dla acapitu");
    paragraf.appendChild(textPar)
    paragraf.setAttribute("class", "democlas")
    paragraf.setAttribute("Id", "blok1")
    paragraf.setAttribute("name", "blok1")
    document.getElementById(blockname).appendChild(paragraf);
}

function addImg(blockname, src, alt) {
    let img = document.createElement("Img");
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
    img.style.width="100px";
    img.style.height="100px";
    document.getElementById(blockname).appendChild(img);
}

























