const results_plates = document.getElementById('result_plates')
const results_plates2 = document.getElementById('result_plates2')
const searchInput = document.getElementById('searchCuisine');
const selectElement = document.getElementById('country_cuisine');
const resultsList = document.getElementById('resultsList');



// Ajoutez un écouteur d'événements à l'entrée de recherche
searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const filteredOptions = Array.from(selectElement.options).filter(option => {
        return option.textContent.toLowerCase().includes(searchValue);
    });
    // Effacez la liste des résultats précédents
    resultsList.innerHTML = '';

    // Ajoutez les options filtrées à la liste des résultats
    filteredOptions.forEach(option => {
        const resultItem = document.createElement('div');
        resultItem.textContent = option.textContent;
        resultItem.addEventListener('click', function () {
            // Lorsqu'un résultat est cliqué, sélectionnez l'option correspondante dans le select
            selectElement.value = option.value;
            // Effacez la liste des résultats
            resultsList.innerHTML = '';
            // Déclenchez l'événement "change" du select pour mettre à jour l'API
            selectElement.dispatchEvent(new Event('change'));
        });
        resultsList.appendChild(resultItem);
    });
});





// Début API
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

document.getElementById('country_cuisine').addEventListener('change', function () {
    const cuisine_info = this.value;

    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => results_plates.innerHTML=(result[0].title))
        .catch(error => console.log('error', error));



    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => results_plates2.innerHTML=(result[1].title))
        .catch(error => console.log('error', error));

});

//Fin API
