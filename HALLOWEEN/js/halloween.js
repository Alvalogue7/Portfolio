

function show(element){
    document.getElementById(element).style.visibility="visible";

}

function hide(element){
    document.getElementById(element).style.visibility="hidden";

}

function sound(element){
    document.getElementById(element).play() ;
}

function silence(element){
    document.getElementById(element).pause() ;
}