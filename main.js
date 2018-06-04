document.body.onkeydown = function(e){
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault()
    var focus = document.getElementById('typefocus'), 
        input = document.getElementById('inputtext'), 
        stuff,
        focusItems = focus.getElementsByTagName('span');
    if(!focusItems[0]){
        stuff = focus.innerHTML;
    } else {
        Array.from(focusItems).forEach(function (item){
            if(!item.style[0]){ 
                stuff += item.innerHTML; 
            } 
        });
    }
    if(document.getElementById('afterfocus').innerHTML == '.'){
        stuff += '.';
    } else {
        stuff += ' ';
    }
    stuff = stuff.replace("undefined", "");
    stuff = stuff.replace("o", "о");
    stuff = stuff.replace("O", "О");
    stuff = stuff.replace("e", "е");
    stuff = stuff.replace("E", "Е");
    stuff = stuff.replace("a", "а");
    stuff = stuff.replace("A", "А");
    stuff = stuff.replace("c", "с");
    stuff = stuff.replace("C", "С");
    stuff = stuff.replace("X", "Х");
    stuff = stuff.replace("x", "х");
    input.value = stuff;
  }
}
