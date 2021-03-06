var btnTranslate = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
};

function errorHandler(error){
    console.log("error occured ", error)
    alert("something wrong with server! try again after some time")
};

function clickHandler(){
    // outputDiv.innerText = ("asjkldjdjl " + txtInput.value);

    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        // console.log(json.contents.translated)) 
    })
    
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
