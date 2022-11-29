// click button
var opnBtn =  document.querySelector('.opnbtn')
var Menu =  document.querySelector('.menu')
opnBtn.addEventListener('click',function(){
    Menu.classList.toggle('active')
})
// background change
var btnone = document.querySelector('.btn1')
var btntwo = document.querySelector('.btn2')
var btnthree = document.querySelector('.btn3')
var bodytag= document.querySelector('body')

btnone.addEventListener('click',function(){
    bodytag.style.background="#000"
})
btntwo.addEventListener('click',function(){
    bodytag.style.background="#fff"
})
btnthree.addEventListener('click',function(){
    bodytag.style.background="chocolate"
})

// calculator
let result = document.getElementById('result');
function numshow(num){
    result.value +=num;
}
function clrAll(){
    result.value ="";
}
function del(){
    result.value=result.value.slice(0,-1);
}
function calculator(){
    let x = result.value;
    let y = eval(x);
    result.value=y
}