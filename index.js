//click function
function clickFunction() {
    var counter = document.getElementById("counterId");
    var resultCounter = counter.innerHTML = parseInt(counter.innerHTML) + 1;

    var x = document.getElementById("buttonClick");
    x.innerHTML = `You Clicked Me! Now the counter is ${resultCounter}`;
    console.log(resultCounter);
}