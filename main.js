fetch ("https://api.giphy.com/v1/gifs/random?api_key=c4yMTenIdwmN2WBdb93EwfFeRf7dq2XR&Tag=quiz+exam&rating=g")
.then(function(response) {
    if (response.status == 200) {
    return response.json();
} 
else {
    console.log("whoops");
}
})
.then(function(jsonData){
    console.log(jsonData);
	var gifUrl = jsonData.data.images.original.url;
	console.log(gifUrl);

    var gifImg = document.createElement('img');
    gifImg.setAttribute('src', gifUrl);
    document.body.appendChild(gifImg);

    var gifTitle = jsonData.data.title;
    var caption = document.createElement("h3");
    caption.innerHTML=gifTitle;
    document.body.appendChild(caption);
})
.catch(function(error){
    console.log("There was a problem...", error);
});

fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
.then(function(response) {
    return response.json();
    
})
.then(function(jsonData) {
    console.log(jsonData)
});