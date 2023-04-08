
var screen =document.getElementById('screen')
var por =document.getElementById('por')
var nub
var corchar 
var perchar ,perchar2
var me,me1
var val,val2
//......
function clearscreen(){
    screen.value =""
}
function pourcentage(){
    screen.value = screen.value/100

}
//.....
function suppchar(){
    screen.value = screen.value.slice(0,me-1)
    me1=screen.value.slice(0,me-1)
    getperchar2()
    me=me1

 
}
//...... 

function affichage(c){
    screen.value +=c 
    nub=screen.value.length
    corchar=c 
    me=nub

     getperchar()

}
//.....
function calcul(){
    screen.value =eval(screen.value)
    
}
//.....
 function  getperchar(){  
     perchar = screen.value.substring(nub-2,nub-1)
     calcsybtax()
    

 }
 //.....
 function calcsybtax(){
    if( (corchar=='+'||corchar=='*'||corchar=='/')&&nub==1 ){
        screen.value =""
    }
    if((perchar=='+'||perchar=='-'||perchar=='*'||perchar=='/')&& (corchar=='+'||corchar=='-'||corchar=='*'||corchar=='/') ){
        suppchar()
    }

 }
 //.....
 function supchar(){
    screen.value=screen.value.substring(0,nub-1)
    
 }
 //.......
 function  getperchar2(){  
    perchar2 = screen.value.substring(me1-2,me1-1)
    me1= perchar2

}
//......
function valuab(){
    var nob , f , i
    f=1
    nob=screen.value
   for(i=1;i<=nob;i++){
    f*=i
   }
   screen.value=f
  
}

function racine(){
    screen.value=Math.sqrt(screen.value)

}





 