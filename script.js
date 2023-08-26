console.log("test");
/*let cuisine_info= document.getElementById("country_cuisine").value*/


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

document.getElementById('country_cuisine').addEventListener('change', function () {
    const cuisine_info = this.value;

    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine="+cuisine_info+"&apiKey=f528c4f6716d471b9f7c6b06c018182d", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result.results[0].title))
        .catch(error => console.log('error', error));

});
