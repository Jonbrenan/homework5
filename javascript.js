

let contain = document.querySelector('.container')

/* the m represents what the current time is, and the "let time" is displaying the current time
on the front page */

let m = moment();
let time = $('<p>')


// creating elements for the text blocks and everything inside them

let nineAmDiv1 = $('<div>')
let nineAmDiv2 = $('<div>')
let nineAMspan = $('<span>')
let nineAmTextArea = $('<textarea>')
let nineAmButton = $('<button>')
let nineAmText = localStorage.getItem('save1Content')

let tenAmDiv1 = $('<div>')
let tenAmDiv2 = $('<div>')
let tenAMspan = $('<span>')
let tenAmTextArea = $('<textarea>')
let tenAmButton = $('<button>')
let tenAmText= localStorage.getItem('save2Content')

let elevenAmDiv1 = $('<div>')
let elevenAmDiv2 = $('<div>')
let elevenAMspan = $('<span>')
let elevenAmTextArea = $('<textarea>')
let elevenAmButton = $('<button>')
let elevenAmText= localStorage.getItem('save3Content')

let twelvePmDiv1 = $('<div>')
let twelvePmDiv2 = $('<div>')
let twelvePmspan = $('<span>')
let twelvePmTextArea = $('<textarea>')
let twelvePmButton = $('<button>')
let twelvePmText= localStorage.getItem('save4Content')

let onePmDiv1 = $('<div>')
let onePmDiv2 = $('<div>')
let onePmspan = $('<span>')
let onePmTextArea = $('<textarea>')
let onePmButton = $('<button>')
let onePmText= localStorage.getItem('save5Content')


let twoPmDiv1 = $('<div>')
let twoPmDiv2 = $('<div>')
let twoPmspan = $('<span>')
let twoPmTextArea = $('<textarea>')
let twoPmButton = $('<button>')
let twoPmText= localStorage.getItem('save6Content')


let threePmDiv1 = $('<div>')
let threePmDiv2 = $('<div>')
let threePmspan = $('<span>')
let threePmTextArea = $('<textarea>')
let threePmButton = $('<button>')
let threePmText= localStorage.getItem('save7Content')


let fourPmDiv1 = $('<div>')
let fourPmDiv2 = $('<div>')
let fourPmspan = $('<span>')
let fourPmTextArea = $('<textarea>')
let fourPmButton = $('<button>')
let fourPmText= localStorage.getItem('save8Content')


let fivePmDiv1 = $('<div>')
let fivePmDiv2 = $('<div>')
let fivePmspan = $('<span>')
let fivePmTextArea = $('<textarea>')
let fivePmButton = $('<button>')
let fivePmText = localStorage.getItem('save9Content')






//attributes for all most elements


nineAmDiv1.attr('class', 'input-group')
nineAmDiv1.attr("id", 'nineAmDiv1')
nineAmDiv2.attr('class', 'input-group-prepend')
nineAmDiv2.attr('id', 'nineAmDiv2')
nineAMspan.attr('class', 'input-group-text')
nineAMspan.text('9am')
nineAmTextArea.attr('class', 'form-control')
nineAmTextArea.attr('aria-label', 'With textarea')
nineAmTextArea.attr('id', 'textSave1')
nineAmTextArea.attr('placeholder', nineAmText)
nineAmButton.attr('class', 'btn btn-outline-secondary')
nineAmButton.attr('type', 'button')
nineAmButton.attr('id', 'button-addon2')
nineAmButton.attr('id', 'save1')
nineAmButton.text('Save')

tenAmDiv1.attr('class', 'input-group')
tenAmDiv1.attr("id", 'tenAmDiv1')
tenAmDiv2.attr('class', 'input-group-prepend')
tenAmDiv2.attr('id', 'tenAmDiv2')
tenAMspan.attr('class', 'input-group-text')
tenAMspan.text('10am')
tenAmTextArea.attr('class', 'form-control')
tenAmTextArea.attr('aria-label', 'With textarea')
tenAmTextArea.attr('id', 'textSave2')
tenAmTextArea.attr('placeholder', tenAmText)
tenAmButton.attr('class', 'btn btn-outline-secondary')
tenAmButton.attr('type', 'button')
tenAmButton.attr('id', 'button-addon2')
tenAmButton.text('Save')

elevenAmDiv1.attr('class', 'input-group')
elevenAmDiv1.attr("id", 'elevenAmDiv1')
elevenAmDiv2.attr('class', 'input-group-prepend')
elevenAmDiv2.attr('id', 'elevenAmDiv2')
elevenAMspan.attr('class', 'input-group-text')
elevenAMspan.text('11am')
elevenAmTextArea.attr('class', 'form-control')
elevenAmTextArea.attr('aria-label', 'With textarea')
elevenAmTextArea.attr('id', 'textSave3')
elevenAmTextArea.attr('placeholder', elevenAmText)
elevenAmButton.attr('class', 'btn btn-outline-secondary')
elevenAmButton.attr('type', 'button')
elevenAmButton.attr('id', 'button-addon2')
elevenAmButton.text('Save')

twelvePmDiv1.attr('class', 'input-group')
twelvePmDiv1.attr("id", 'twelvePmDiv1')
twelvePmDiv2.attr('class', 'input-group-prepend')
twelvePmDiv2.attr('id', 'twelvePmDiv2')
twelvePmspan.attr('class', 'input-group-text')
twelvePmspan.text('12pm')
twelvePmTextArea.attr('class', 'form-control')
twelvePmTextArea.attr('aria-label', 'With textarea')
twelvePmTextArea.attr('id', 'textSave4')
twelvePmTextArea.attr('placeholder', twelvePmText)
twelvePmButton.attr('class', 'btn btn-outline-secondary')
twelvePmButton.attr('type', 'button')
twelvePmButton.attr('id', 'button-addon2')
twelvePmButton.text('Save')


onePmDiv1.attr('class', 'input-group')
onePmDiv1.attr("id", 'onePmDiv1')
onePmDiv2.attr('class', 'input-group-prepend')
onePmDiv2.attr('id', 'onePmDiv2')
onePmspan.attr('class', 'input-group-text')
onePmspan.text('1pm')
onePmTextArea.attr('class', 'form-control')
onePmTextArea.attr('aria-label', 'With textarea')
onePmTextArea.attr('placeholder', onePmText)
onePmTextArea.attr('id', 'textSave5')
onePmButton.attr('class', 'btn btn-outline-secondary')
onePmButton.attr('type', 'button')
onePmButton.attr('id', 'button-addon2')
onePmButton.text('Save')

twoPmDiv1.attr('class', 'input-group')
twoPmDiv1.attr("id", 'twoPmDiv1')
twoPmDiv2.attr('class', 'input-group-prepend')
twoPmDiv2.attr('id', 'twoPmDiv2')
twoPmspan.attr('class', 'input-group-text')
twoPmspan.text('2pm')
twoPmTextArea.attr('class', 'form-control')
twoPmTextArea.attr('aria-label', 'With textarea')
twoPmTextArea.attr('id', 'textSave6')
twoPmTextArea.attr('placeholder', twoPmText)
twoPmButton.attr('class', 'btn btn-outline-secondary')
twoPmButton.attr('type', 'button')
twoPmButton.attr('id', 'button-addon2')
twoPmButton.text('Save')


threePmDiv1.attr('class', 'input-group')
threePmDiv1.attr("id", 'threePmDiv1')
threePmDiv2.attr('class', 'input-group-prepend')
threePmDiv2.attr('id', 'threePmDiv2')
threePmspan.attr('class', 'input-group-text')
threePmspan.text('3pm')
threePmTextArea.attr('class', 'form-control')
threePmTextArea.attr('aria-label', 'With textarea')
threePmTextArea.attr('id', 'textSave7')
threePmTextArea.attr('placeholder', threePmText)
threePmButton.attr('class', 'btn btn-outline-secondary')
threePmButton.attr('type', 'button')
threePmButton.attr('id', 'button-addon2')
threePmButton.text('Save')


fourPmDiv1.attr('class', 'input-group')
fourPmDiv1.attr("id", 'fourPmDiv1')
fourPmDiv2.attr('class', 'input-group-prepend')
fourPmDiv2.attr('id', 'fourPmDiv2')
fourPmspan.attr('class', 'input-group-text')
fourPmspan.text('4pm')
fourPmTextArea.attr('class', 'form-control')
fourPmTextArea.attr('aria-label', 'With textarea')
fourPmTextArea.attr('id', 'textSave8')
fourPmTextArea.attr('placeholder', fourPmText)
fourPmButton.attr('class', 'btn btn-outline-secondary')
fourPmButton.attr('type', 'button')
fourPmButton.attr('id', 'button-addon2')
fourPmButton.text('Save')


fivePmDiv1.attr('class', 'input-group')
fivePmDiv1.attr("id", 'fivePmDiv1')
fivePmDiv2.attr('class', 'input-group-prepend')
fivePmDiv2.attr('id', 'fivePmDiv2')
fivePmspan.attr('class', 'input-group-text')
fivePmspan.text('5pm')
fivePmTextArea.attr('class', 'form-control')
fivePmTextArea.attr('aria-label', 'With textarea')
fivePmTextArea.attr('id', 'textSave9')
fivePmTextArea.attr('placeholder', fivePmText)
fivePmButton.attr('class', 'btn btn-outline-secondary')
fivePmButton.attr('type', 'button')
fivePmButton.attr('id', 'button-addon2')
fivePmButton.text('Save')
time.text(m)






//// 9am ////



//each section of code here is controlling how the textblocks appear depending on what time it is

let ten = moment("10:00AM", " h:mmA");


let nineAM = moment("9:00AM", " h:mmA");


function check1 (now,time,current) {
    if(now>time){
        nineAmTextArea.addClass('past')
    }else if (now<time) {
        nineAmTextArea.addClass('future')
    }if (now<current) {
        nineAmTextArea.addClass('present')
    }
        
    
}

check1(m,nineAM,ten)


// code here allows what is typed into text blocks to be saved in the local storage
$(nineAmButton).on('click', function() {
    let textCont1= document.getElementById('textSave1').value
    localStorage.setItem('save1Content', textCont1)
    

})





//// 10am ////

let eleven = moment("11:00AM", " h:mmA");


let tenAM = moment("10:00AM", " h:mmA");


function check2 (now,time,current) {
    if(now>time){
        tenAmTextArea.addClass('past')
    }else if (now<time) {
        tenAmTextArea.addClass('future')
    }if (now<current) {
        tenAmTextArea.addClass('present')
    }
        
    
}

check2(m,tenAM,eleven)


$(tenAmButton).on('click', function() {
    let textCont2= document.getElementById('textSave2').value
    localStorage.setItem('save2Content', textCont2)
    

})






//// 11am ////

let twelve = moment("12:00PM", " h:mmA");


let elevenAM = moment("11:00AM", " h:mmA");


function check3 (now,time,current) {
    if(now>time){
        elevenAmTextArea.addClass('past')
    }else if (now<time) {
        elevenAmTextArea.addClass('future')
    }if (now<current) {
        elevenAmTextArea.addClass('present')
    }
        
    
}

check3(m,elevenAM,twelve)

$(elevenAmButton).on('click', function() {
    let textCont3= document.getElementById('textSave3').value
    localStorage.setItem('save3Content', textCont3)
    

})







//// 12pm ////



let one = moment("1:00PM", " h:mmA");


let twelvePM = moment("12:00PM", " h:mmA");


function check4 (now,time,current) {
    if(now>time){
        twelvePmTextArea.addClass('past')
    }else if (now<time) {
        twelvePmTextArea.addClass('future')
    }if (now<current) {
        twelvePmTextArea.addClass('present')
    }
        
    
}

check4(m,twelvePM,one)

$(twelvePmButton).on('click', function() {
    let textCont4= document.getElementById('textSave4').value
    localStorage.setItem('save4Content', textCont4)
    

})






//// 1pm ////



let two = moment("2:00PM", " h:mmA");


let onePM = moment("1:00PM", " h:mmA");


function check5 (now,time,current) {
    if(now>time){
        onePmTextArea.addClass('past')
    }else if (now<time) {
        onePmTextArea.addClass('future')
    }if (now<current) {
        onePmTextArea.addClass('present')
    }
        
    
}

check5(m,onePM,two)


$(onePmButton).on('click', function() {
    let textCont5= document.getElementById('textSave5').value
    localStorage.setItem('save5Content', textCont5)
    

})


//// 2pm ////



let three = moment("3:00PM", " h:mmA");


let twoPM = moment("2:00PM", " h:mmA");


function check6 (now,time,current) {
    if(now>time){
        twoPmTextArea.addClass('past')
    }else if (now<time) {
        twoPmTextArea.addClass('future')
    }if (now<current) {
        twoPmTextArea.addClass('present')
    }
        
    
}

check6(m,twoPM,three)


$(twoPmButton).on('click', function() {
    let textCont6= document.getElementById('textSave6').value
    localStorage.setItem('save6Content', textCont6)
    

})



let four = moment("4:00PM", " h:mmA");


let threePM = moment("3:00PM", " h:mmA");


function check7 (now,time,current) {
    if(now>time){
        threePmTextArea.addClass('past')
    }else if (now<time) {
        threePmTextArea.addClass('future')
    }if (now<current) {
        threePmTextArea.addClass('present')
    }
        
    
}

check7(m,threePM,four)


$(threePmButton).on('click', function() {
    let textCont7= document.getElementById('textSave7').value
    localStorage.setItem('save7Content', textCont7)
    

})






//// 4pm ////

let five = moment("5:00PM", " h:mmA");


let fourPM = moment("4:00PM", " h:mmA");


function check8 (now,time,current) {
    if(now>time){
        fourPmTextArea.addClass('past')
    }else if (now<time) {
        fourPmTextArea.addClass('future')
    }if (now<current) {
        fourPmTextArea.addClass('present')
    }
        
    
}

check8(m,fourPM,five)

$(fourPmButton).on('click', function() {
    let textCont8= document.getElementById('textSave8').value
    localStorage.setItem('save8Content', textCont8)
    

})





//// 5pm ////

let six = moment("6:00PM", " h:mmA");


let fivePM = moment("5:00PM", " h:mmA");


function check9 (now,time,current) {
    if(now>time){
        fivePmTextArea.addClass('past')
    }else if (now<time) {
        fivePmTextArea.addClass('future')
    }if (now<current) {
        fivePmTextArea.addClass('present')
    }
        
    
}

check9(m,fivePM,six)

$(fivePmButton).on('click', function() {
    let textCont9= document.getElementById('textSave9').value
    localStorage.setItem('save9Content', textCont9)
    

})








//These are all the appends, or the code that actually creates everything that is seen on screen

$('.container').append(nineAmDiv1)

$('#nineAmDiv1').append(nineAmDiv2)

$('#nineAmDiv2').append(nineAMspan)

$('#nineAmDiv1').append(nineAmTextArea)

$('#nineAmDiv1').append(nineAmButton)


$('.container').append(tenAmDiv1)

$('#tenAmDiv1').append(tenAmDiv2)

$('#tenAmDiv2').append(tenAMspan)

$('#tenAmDiv1').append(tenAmTextArea)

$('#tenAmDiv1').append(tenAmButton)


$('.container').append(elevenAmDiv1)

$('#elevenAmDiv1').append(elevenAmDiv2)

$('#elevenAmDiv2').append(elevenAMspan)

$('#elevenAmDiv1').append(elevenAmTextArea)

$('#elevenAmDiv1').append(elevenAmButton)


$('.container').append(twelvePmDiv1)

$('#twelvePmDiv1').append(twelvePmDiv2)

$('#twelvePmDiv2').append(twelvePmspan)

$('#twelvePmDiv1').append(twelvePmTextArea)

$('#twelvePmDiv1').append(twelvePmButton)


$('.container').append(onePmDiv1)

$('#onePmDiv1').append(onePmDiv2)

$('#onePmDiv2').append(onePmspan)

$('#onePmDiv1').append(onePmTextArea)

$('#onePmDiv1').append(onePmButton)


$('.container').append(twoPmDiv1)

$('#twoPmDiv1').append(twoPmDiv2)

$('#twoPmDiv2').append(twoPmspan)

$('#twoPmDiv1').append(twoPmTextArea)

$('#twoPmDiv1').append(twoPmButton)


$('.container').append(threePmDiv1)

$('#threePmDiv1').append(threePmDiv2)

$('#threePmDiv2').append(threePmspan)

$('#threePmDiv1').append(threePmTextArea)

$('#threePmDiv1').append(threePmButton)


$('.container').append(fourPmDiv1)

$('#fourPmDiv1').append(fourPmDiv2)

$('#fourPmDiv2').append(fourPmspan)

$('#fourPmDiv1').append(fourPmTextArea)

$('#fourPmDiv1').append(fourPmButton)


$('.container').append(fivePmDiv1)

$('#fivePmDiv1').append(fivePmDiv2)

$('#fivePmDiv2').append(fivePmspan)

$('#fivePmDiv1').append(fivePmTextArea)

$('#fivePmDiv1').append(fivePmButton)

$('#currentDay').append(time)