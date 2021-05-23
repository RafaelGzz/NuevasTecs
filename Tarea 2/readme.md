# Tarea 2

La API utilizada es Lorem Picusm, se utilizo javascript integrado en HTML puro para consumir y mostrar resultados

## Utilización

Abrir index.html con el navegador de preferencia. 

Hacer click en Get Foto para obtener una foto aleatoria.

Hacer click en Original para ver la imagen original.

Hacer click en Borrar para eliminar la tarjeta con la foto.


## Modelo de JSON

El JSON tiene la siguiente estructura.

EJEMPLO:

```JSON
{
    "id": "99",
    "author": "Jon Toney",
    "width": 4912,
    "height": 3264,
    "url": "https://unsplash.com/photos/xyDQNmT6vSs",
    "download_url": "https://picsum.photos/id/99/4912/3264"
}
```

## Deserialización del JSON

La Deserializacion se realiza en la linea 8 de app.js

```javascript
    let photo = await response.json(); //Deserializacion del JSON
```
