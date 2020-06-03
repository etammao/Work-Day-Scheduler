// function saveEvent(){
//     event.preventDefault
//     console.log('[saveEvent]')
// }
// function saveEvent(){
//     event.preventDefault;
//     console.log(`sss`)

// }
// document.querySelector('.btn-primary').addEventListener('click', saveEvent);
var nineAmEle=document.querySelector('#input9');
var tenAmEle=document.querySelector('#input10');
var elevenAmEle=document.querySelector('#input11');
var twelvePmEle=document.querySelector('#input12');
var onePmEle=document.querySelector('#input1');
var twoPmEle=document.querySelector('#input2');
var threePmEle=document.querySelector('#input3');
var time= new Date();
var hour= time.getHours();
var hourNum= Number(hour);
// var timeFront= document.querySelectorAll('input-group-text');
// var timeFrontNum=Number(timeFront);
var inputAlert9=document.querySelector('#input9');
var inputAlert9= 9;
var inputAlert10=document.querySelector('#input9');
var inputAlert10= 10;
var inputAlert11=document.querySelector('#input9');
var inputAlert11= 11;
var inputAlert12=document.querySelector('#input9');
var inputAlert12= 12;
var inputAlert1=document.querySelector('#input9');
var inputAlert1= 13;
var inputAlert2=document.querySelector('#input9');
var inputAlert2= 14;
var inputAlert3=document.querySelector('#input9');
var inputAlert3= 15;


console.log(hour);
console.log(hourNum);

document.querySelector('footer').innerHTML = time

if(hourNum>inputAlert9){
    document.querySelector('#input9').style.color='red';
}else if(hourNum<inputAlert9){
    document.querySelector('#input9').style.color='blue';
}else{
    document.querySelector('#input9').style.color='grey';
}

if(hourNum>inputAlert10){
    document.querySelector('#input10').style.color='red';
}else if(hourNum<inputAlert10){
    document.querySelector('#input10').style.color='blue';
}else{
    document.querySelector('#input10').style.color='grey';
}

if(hourNum>inputAlert11){
    document.querySelector('#input11').style.color='red';
}else if(hourNum<inputAlert11){
    document.querySelector('#input11').style.color='blue';
}else{
    document.querySelector('#input11').style.color='grey';
}

if(hourNum>inputAlert12){
    document.querySelector('#input12').style.color='red';
}else if(hourNum<inputAlert12){
    document.querySelector('#input12').style.color='blue';
}else{
    document.querySelector('#input12').style.color='grey';
}

if(hourNum>inputAlert1){
    document.querySelector('#input1').style.color='red';
}else if(hourNum<inputAlert1){
    document.querySelector('#input1').style.color='blue';
}else{
    document.querySelector('#input1').style.color='grey';
}

if(hourNum>inputAlert2){
    document.querySelector('#input2').style.color='red';
}else if(hourNum<inputAlert2){
    document.querySelector('#input2').style.color='blue';
}else{
    document.querySelector('#input2').style.color='grey';
}

if(hourNum>inputAlert3){
    document.querySelector('#input3').style.color='red';
}else if(hourNum<inputAlert9){
    document.querySelector('#input3').style.color='blue';
}else{
    document.querySelector('#input3').style.color='grey';
}




$(".btn-primary").on("click", function (){
    event.preventDefault();
    console.log(`Btn functional`);

    var nineVal=nineAmEle.value;
    var tenVal=tenAmEle.value;
    var elevenVal=elevenAmEle.value;
    var twelveVal=twelvePmEle.value;
    var oneVal=onePmEle.value;
    var twoVal=twoPmEle.value;
    var threeVal=threePmEle;

    localStorage.setItem('9AM-', JSON.stringify(nineVal));
    localStorage.setItem('10AM-', JSON.stringify(tenVal));
    localStorage.setItem('11AM-', JSON.stringify(elevenVal));
    localStorage.setItem('12PM-', JSON.stringify(twelveVal));
    localStorage.setItem('1PM-', JSON.stringify(oneVal));
    localStorage.setItem('2PM-', JSON.stringify(twoVal));
    localStorage.setItem('3PM-', JSON.stringify(threeVal));

    

});



displayText();

function displayText(){
    var nineDis = JSON.parse(localStorage.getItem('9AM-'));
    var tenDis = JSON.parse(localStorage.getItem('10AM-'));
    var elevenDis = JSON.parse(localStorage.getItem('11AM-'));
    var twelveDis = JSON.parse(localStorage.getItem('12PM-'));
    var oneDis = JSON.parse(localStorage.getItem('1PM-'));
    var twoDis = JSON.parse(localStorage.getItem('2PM-'));
    var threeDis = JSON.parse(localStorage.getItem('3PM-'));

    nineAmEle.value=nineDis;
    tenAmEle.value=tenDis;
    elevenAmEle.value=elevenDis;
    twelvePmEle.value=twelveDis;
    onePmEle.value=oneDis;
    twoPmEle.value=twoDis;
    threePmEle.value=threeDis;

    
}




