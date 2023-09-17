const results_plates = document.getElementById('result_plates')
const results_plates2 = document.getElementById('result_plates2')
const searchInput = document.getElementById('searchCuisine');
const selectElement = document.getElementById('country_cuisine');
const resultsList = document.getElementById('resultsList');
const search_svg = document.getElementById('search_svg');
const img_card1 = document.getElementById('img_card1')
const img_card2 = document.getElementById('img_card2')
const buble1 = document.getElementById('bubble1')
const buble2 = document.getElementById('bubble2')
const buble3 = document.getElementById('bubble3')
const buble4 = document.getElementById('bubble4')
const buble5 = document.getElementById('bubble5')



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
setInterval(move_bubble,3000)
setInterval(move_bubble_reverse,6000)
function move_bubble(){
            buble1.style.transform = 'translateY(-147px)'
            buble2.style.transform = 'translateY(-127px)'
            buble3.style.transform = 'translateY(-111px)'
            buble4.style.transform = 'translateY(-135px)'
            buble5.style.transform = 'translateY(-170px)'
        console.log('fini')
}

function move_bubble_reverse(){
    buble1.style.transform = 'translateY(+135px)'
    buble2.style.transform = 'translateY(+164px)'
    buble3.style.transform = 'translateY(+111px)'
    buble4.style.transform = 'translateY(+124px)'
    buble5.style.transform = 'translateY(+150px)'
    console.log('fini')
}



searchInput.addEventListener('click', function (){ search_svg.style.opacity ='0'})
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
        .then(result => results_plates.innerHTML=(result.results[0].title))
        .catch(error => console.log('error', error));



    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => results_plates2.innerHTML=(result.results[1].title))
        .catch(error => console.log('error', error));

    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => {
            // Obtenez l'image du résultat
            const image = result.results[0].image;
            // Créez un élément img
            const img = document.createElement('img');
            img.src = image;
            // Remplacez le titre du résultat par l'élément img
            img_card1.innerHTML = '';
            img_card1.appendChild(img);
        })
        .catch(error => console.log('error', error));

    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => {
            // Obtenez l'image du résultat
            const image = result.results[1].image;
            // Créez un élément img
            const img = document.createElement('img');
            img.src = image;
            // Remplacez le titre du résultat par l'élément img
            img_card2.innerHTML = '';
            img_card2.appendChild(img);
        })
        .catch(error => console.log('error', error));

    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


});

//Fin API
