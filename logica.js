var saida=document.getElementById("tr");

function Entrada(){
    var entrada,i,x,cont=0;
    
    x=document.getElementById("demo");
    entrada=document.getElementsByName('ox');
    
    for(i=0;i<=8;i++){
        
        if(entrada[i].value!="x" && entrada[i].value!="o"){
        entrada[i].value="";
        x.innerHTML="Insira x ou o";
        }
        
        if(entrada[0].value=="x" && entrada[1].value=="x" && entrada[2].value=="x"){ 
            if(i>=0 && i<3){
            entrada[i].style.color="red";
            }
            Mensagem1();
           }
        if(entrada[0].value=="o" && entrada[1].value=="o" && entrada[2].value=="o"){
            if(i>=0 && i<3){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[3].value=="x" && entrada[4].value=="x" && entrada[5].value=="x"){ 
            if(i>=3 && i<6){
            entrada[i].style.color="red";
            }
            Mensagem1();
           }
        if(entrada[3].value=="o" && entrada[4].value=="o" && entrada[5].value=="o"){
            if(i>=3 && i<6){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[6].value=="x" && entrada[7].value=="x" && entrada[8].value=="x"){ 
            if(i>=6 && i<9){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[6].value=="o" && entrada[7].value=="o" && entrada[8].value=="o"){
            if(i>=6 && i<9){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[0].value=="x" && entrada[3].value=="x" && entrada[6].value=="x"){ 
            if(i>=0 && i<7 && i%3==0){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[0].value=="o" && entrada[3].value=="o" && entrada[6].value=="o"){
            if(i>=0 && i<7 && i%3==0){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[1].value=="x" && entrada[4].value=="x" && entrada[7].value=="x"){ 
            if(i>=1 && i<8 && i!=5 && i%3==1){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[1].value=="o" && entrada[4].value=="o" && entrada[7].value=="o"){
            if(i>=1 && i<8 && i!=5 && i%3==1){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[2].value=="x" && entrada[5].value=="x" && entrada[8].value=="x"){ 
            if(i>=2 && i<9 && i%3==2 ){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[2].value=="o" && entrada[5].value=="o" && entrada[8].value=="o"){
            if(i>=2 && i<9 && i%3==0){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[0].value=="x" && entrada[4].value=="x" && entrada[8].value=="x"){ 
            if(i>=0 && i<9 && i%4==0){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[0].value=="o" && entrada[4].value=="o" && entrada[8].value=="o"){
            if(i>=0 && i<9 && i%4==0){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        if(entrada[6].value=="x" && entrada[4].value=="x" && entrada[2].value=="x"){ 
            if(i>=2 && i<7 && i%2==0){
            entrada[i].style.color="red";
            }
              Mensagem1();
           }
        if(entrada[6].value=="o" && entrada[4].value=="o" && entrada[2].value=="o"){
            if(i>=2 && i<7 && i%2==0){
            entrada[i].style.color="red";
            }
              Mensagem2();
           }
        //código empate
        if(entrada[i].value!=""){
            cont++;
        } 
    }
    
    if(cont==9){
        Mensagem3();
    }
    
}

function Mensagem1(){
    saida.innerHTML="O Jogador X venceu a partida";
    document.getElementById("msg").style.display="block";
        document.getElementsByClassName(".modal").style.display="block";

}

function Mensagem2(){
    saida.innerHTML="O Jogador O venceu a partida";
    document.getElementById("msg").style.display="block";
}
    
function Mensagem3(){
    saida.innerHTML="O Jogo terminou empatado";
    document.getElementById("msg").style.display="block";
}

function Recarrega(){
    location.reload(true);
}