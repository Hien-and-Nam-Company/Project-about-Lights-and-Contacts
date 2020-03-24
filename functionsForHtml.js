function showElement(Id) {
    document.getElementById(Id).style.visibility = 'visible';
}

function hideElement(Id) {
    document.getElementById(Id).style.visibility = 'hidden';
}

function getText(Id) {
    return document.querySelector(Id).textContent;
}

function setText(Id, text) {
    document.querySelector(Id).textContent = text;
}