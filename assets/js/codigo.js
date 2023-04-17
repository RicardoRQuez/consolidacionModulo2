let digiForm = document.getElementById("digiForm");

digiForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let digimon = document.getElementById("digiFormNombre").value;
    console.log(digimon);

    let url = "https://digimon-api.vercel.app/api/digimon/name/" + digimon

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let nombreDigimon = data[0].name;
            let levelDigimon = data[0].level;
            let imagenDigimon = data[0].img;

            let contenedorImagen = document.querySelector(".seccionInfo img")
            contenedorImagen.setAttribute("src", imagenDigimon)

            console.log(nombreDigimon, levelDigimon);
            let tituloNombre = document.getElementById("list-group-name");
            let item = `<li>Nombre:${nombreDigimon} - Level:${levelDigimon}</li>`
            tituloNombre.innerHTML = item;

            let lista = document.getElementById("digiList")
            lista.innerText = digiList;
        })


})

let url = "https://digimon-api.vercel.app/api/digimon"

const resultado = fetch(url)
    .then(response => response.json())
    .then(data => {
        let digiNames = [];

        for (let digimon of data) {
            digiNames.push(digimon.name)
        }
        return digiNames

        /*return data.map((digimon) => {
            return digimon.name

        })*/
    })
    .then(listName => {
        console.log(listName)
        for (i in listName) {
            $("#digiList").append(`<option>${listName[i]}</option>`)
        }

    })
var digiSelected = null;
$('#digiList').change(function () {
    digiSelected = $(this).val() //Estamos obteniendo el digimon seleccionado

    //let digimon = document.getElementById("digiFormNombre").value; //estamos obteniedo el formulario 
    console.log(digiSelected); //imprimiento variable digimon

    let url = "https://digimon-api.vercel.app/api/digimon/name/" + digiSelected

    fetch(url)
        .then(response => response.json())
        .then(data => {

            let nombreDigimon = data[0].name;
            let levelDigimon = data[0].level;
            let imagenDigimon = data[0].img;

            let contenedorImagen = document.querySelector(".seccionInfo img")
            contenedorImagen.setAttribute("src", imagenDigimon)

            console.log(nombreDigimon, levelDigimon);
            let tituloNombre = document.getElementById("list-group-name");
            let item = `<li>Nombre:${nombreDigimon} - Level:${levelDigimon}</li>`
            tituloNombre.innerHTML = item;

            let lista = document.getElementById("digiList")
            lista.innerText = digiList;

            return digiSelected;
        })
        .then(info => {

            recargaLista(info)

        })

    function recargaLista(selected) {


        fetch("https://digimon-api.vercel.app/api/digimon")
            .then(response => response.json())
            .then(data => {
                let digiName = []

                for (let digi of data) {

                    digiName.push(digi.name)
                }

                return digiName
            })
            .then(listName => {
                console.log(listName)
                for (i in listName) {
                    $("#digiList").append(`<option>${listName[i]}</option>`)
                }
                $("#digiList").append(`<option disabled selected> ${selected}</option> `)
            })

    }

});




