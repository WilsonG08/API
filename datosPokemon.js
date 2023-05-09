//F. Realiza una consulta
const consultarPokemon = (id,number) => 
{
    //Obtener informacion de cualquier API, y devuelve una promesa. 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    //Promesas para capturar la informacion.
    .then(response =>{
        // convierte en ARCH. json
        return response.json();
    })


    .then(data => {
            pintarPokemon(data, number);
        })

    //Capturo la respuesta y el catch para los errores en la consola
    .catch(error => {
        console.log(error);
    });

}

consultarPokemon(1)


// F. del B. Seleccionar
// Crea numeros randomicos del 1 al 150
const btnSeleccionar = () => 
{
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon,1);
    consultarPokemon(segundoPokemon,2);

}


btnSeleccionar()


//Accede a un documento del HTLM
const lista = document.getElementById("listarpokemon")


const pintarPokemon = (data, id) =>
{
    // Query Selector --> Intercambia el elemento por lo que queremos
    // Pinta en la caja #1 o 2
    let item = lista.querySelector(`#pok-${id}`);

    // Pinta la informacion con getElementsByTagName
    // getElementsByTagName --> Del documento obtiene la etiqueta por el nombre de la etiqueta y cambia la informacion 
    // SRC --> se una para traer informacion, pero se especifica que es lo que se requiere
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    // data. --> Me presenta el nombre del pokemon 
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}

// Informacion para pintar 
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1

