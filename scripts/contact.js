for (var elem of document.getElementsByClassName("info")) {
    elem.addEventListener("click", function(){
        elem.style.fontSize = elem.style.fontSize == "2em" ? "1em" : "2em";
    });
}