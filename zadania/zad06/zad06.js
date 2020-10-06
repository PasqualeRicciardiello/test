function zad06a() {
    for (let i = 0; i < 100; i++)
        document.write("*")

}

function zad06b() {

    let str = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            str += "*";
        }
        str += "\n";
    }

   document.write(str);

}