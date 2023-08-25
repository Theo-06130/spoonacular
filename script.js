console.log("test");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.spoonacular.com/recipes/complexSearch?query=pasta&cuisine=italian&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.results[0].title))
    .catch(error => console.log('error', error));