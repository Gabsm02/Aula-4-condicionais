const temIngresso = true;
const censura= 16;
const idade= 18;

//se ela tiver o ingresso e tiver idade maior ou igual a censura

if (temIngresso === true){
    if(idade >= censura){
        console.log("Pode entrar")
    } else {
        console.log ("Barrada pela censura")
    }
}else{
    console.log("Barrada sem ingresso")
}
    
