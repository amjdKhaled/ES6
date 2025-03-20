"use strict";
const screeen = document.getElementById("screeen");
function appendToScreeen(input) {
    screeen.value += input;
}
function clearscreeen() {
    screeen.value = "";
}
function calculate(input) {
    screeen.value = eval(screeen.value);
}
//# sourceMappingURL=index.js.map