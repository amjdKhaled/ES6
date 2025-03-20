const screeen = (document.getElementById("screeen")as HTMLFormElement);

    function appendToScreeen(input:string){
        screeen.value += input;
    }

    function clearscreeen(){
        screeen.value ="";
    }

    function calculate(input:string){
        screeen.value = eval(screeen.value);
    }