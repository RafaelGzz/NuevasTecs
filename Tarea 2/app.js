const photos = document.querySelector(".photos");
let index = 0;

async function getPhoto() { //Funcion para obtener una foto random
    i = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let url = "https://picsum.photos/id/" + i + "/info";
    let response = await fetch(url); //Obtener respuesta de la API
    let photo = await response.json(); //Deserializacion del JSON
    console.log(photo);
    addPhoto(photo);
}

function addPhoto(photo) {
    photos.appendChild(createPhotoCard(photo));
    index++;
}

function deletePhoto(id) {
    photos.children.namedItem(id).remove();
}

function createPhotoCard(photo) {

    let card = document.createElement('div');

    let imageContainer = document.createElement('div');
    let infoContainer = document.createElement('div');
    let imageElement = document.createElement('img');
    let idElement = document.createElement('h4');
    let authorElement = document.createElement('h4');
    let btnElement = document.createElement('button');
    let urlElement = document.createElement('a');
    let rowElement = document.createElement('div');

    card.id = index;

    card.className = "card";
    imageContainer.className = "card-img-top";
    infoContainer.className = "card-body";
    idElement.className = "card-text";
    authorElement.className = "card-title";
    btnElement.className = "btn btn-danger";
    urlElement.className = "btn btn-primary";
    rowElement.className = "row";

    imageElement.src = photo.download_url;
    urlElement.setAttribute("href", photo.url);
    authorElement.innerText = "Autor: " + photo.author;

    btnElement.onclick = () => deletePhoto(card.id);


    idElement.innerText = "Id: " + card.id;
    btnElement.innerText = "Borrar";
    urlElement.innerText = "Original";

    card.append(imageContainer, infoContainer);
    imageContainer.appendChild(imageElement);
    rowElement.append(urlElement, btnElement);
    infoContainer.append(idElement, authorElement, rowElement);

    return card;
}