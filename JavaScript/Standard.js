function calculate() {
    let expression = document.getElementById("result").value;
    document.getElementById("result").value = eval(expression);
}

function add(character) {
    document.getElementById("result").value += character;
}

function erase() {
    var input = document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}
