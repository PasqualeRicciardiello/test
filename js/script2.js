

const gfx = [
    {
        id:1,
        nazwa: "MSI GeForce GTX 1060 6GB GDDR5",
        ram: 6,
        coreHz: 1759,
        describe: "karta graficzna nvidia GeForce GTX 1060 to jednostka, ktura zagwarantuje swobodę",
    },

    {
        id:2,
        nazwa: "karta graficzna XFX radeon RX 590 Fatboy 8GB GDDR5",
        ram: 8,
        coreHz: 1545,
        describe: "Układ Graficzny AMD radeon RX 590 zapewnia bardzo dobre parametry do gier",
    },

    {
        id: 3,
        nazwa: "karta graficzna random",
        ram: 10,
        coreHz: 1650,
        describe: "Układ Graficzny zapewnia dobre parametry do pracy przy programach",
    },
]

const mainboard = [
    {
        id:1,
        nazwa: "Gigabate B450 AORUS ELITE",
        w: "235",
        h: "302",
        describe: "Planują konfiguracje z procesorem AMD",
    }

]


function makeOptions(datalistName, textOptionName, value){
    const option = document.createElement("option");
    option.setAttribute("name", value);
    const textOption = document.createTextNode(textOptionName);
    option.appendChild(textOption);
    document.getElementById(datalistName).appendChild(option);
}



for (let i=0; i<gfx.length; i++)
    makeOptions("gfx", gfx[i].nazwa, gfx[i].id);

for (let i=0; i<mainboard.length; i++)
    makeOptions("mainboard", mainboard[i].nazwa, mainboard[i].id);