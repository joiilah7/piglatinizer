$(document ).ready(function() {

//take the word out of the textbox and display it on the screen
$("#button").click(function(){
    let input = $(".input").val();
    let text = $(".input").val();
    let words = text.split(" ");
    let beg1 = words[0].charAt(0);
    let beg2 = words[1].charAt(0);
console.log(beg1,beg2)
    let end1 = words[0].slice(1, words[0].length);
    let end2 = words[1].slice(1, words[1].length);
    $(".output").append(beg2+end1+" "+beg1+end2);

    console.log (output)

     // input.forEach(element => {

   // });

 })




});