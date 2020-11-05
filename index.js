var tracebackButtons = document.getElementsByClassName('traceback-button');

for(var i = 0; i < tracebackButtons.length; i++) {
    tracebackButtons[i].onclick = function () {
        location.href = "traceback.html";
    };
}

document.getElementById('ai-checker').onclick = function() {
    console.log('form submitted');
    location.href = "custom-search.html";
};  