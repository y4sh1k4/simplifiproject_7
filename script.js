var i=0;

function changeColors(){
    var colors=["#FF1D58","#F75990","#FFF685","#00DDFF","#0049B7"];
    document.getElementsByTagName("body")[0].style.background = colors[i];
    document.getElementById("#3").innerHTML=("Colour changed to "+ colors[i]);
    i++;
    if(i>colors.length-1){
        i=0;
    }
}