const tab = [3, 5];
const tab1 = [1, "Ala", 1.33, "Grzegorz", 'a', 33.33, 1234, "Janina"];
const tab2 = Array ();
const tab3 = Array ("kot", 2, 2.3, "Jan", "lorem", "ipsum");

let imiona = ["Pascal","Martyna","Patryk","Adrian","Łukasz"];

for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:white; font-size:1em; background-color:red; margin-left:10px'>", imiona[i], "<span>");

let imie = prompt("podaj imie dodatkowego ucznia")
imiona.push(imie);

for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:red; font-size:1em; background-color:yellow; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>&nbsp;</p>");
imiona.unshift("Joanna");
imiona.unshift("Robert", "Adam");

for (let i=0; i<imiona.length;i++)
    document.write("<span style ='color:red; font-size:1em; background-color:yellow; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>&nbsp;</p>");
let PierwszyZdjety = imiona.shift()
for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:red; font-size:1em; background-color:blue; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>&nbsp;</p>");
document.write(PierwszyZdjety);
document.write("<p>&nbsp;</p>");

for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:black; font-size:1em; background-color:pink; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>patryk znajduje się w tablicy imiona na miejscu:",imiona.indexOf("Patryk"),"</p>");

imiona[imiona.indexOf("Patryk")] = "Ania";

for (let i=0; i<imiona.length;i++)
    document.write("<span style ='color:white; font-size:1em; background-color:green; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>&nbsp;</p>");
imiona.sort();

for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:white; font-size:1em; background-color: purple; margin-left:10px'>", imiona[i], "<span>");

document.write("<p>&nbsp;</p>");
document.write(imiona.join(" - "));

for(let i=0; i<imiona.length;i++)
    document.write("<span style ='color:black; font-size:1em; background-color: cyan; margin-left:10px'>", imiona[i], "<span>");