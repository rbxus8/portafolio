let encendidas = [false, false, false];
let luces = document.querySelectorAll(".luz");
let textos = document.querySelectorAll(".descrip_cabecera");

function encender(i){
    if(encendidas[i]==false){
        luces[i].className="luz l"+i;
        textos[i].className="descrip_cabecera t"+i;
        encendidas[i] = true;
    }else{
        luces[i].className="luz";
        textos[i].className="descrip_cabecera";
        encendidas[i] = false;
        inputs[i].checked = false; 
    }
}