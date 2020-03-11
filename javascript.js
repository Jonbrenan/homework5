

let contain = document.querySelector('.container')


let nineAmDiv1 = $('<div>')

nineAmDiv1.attr('class', 'input-group')
nineAmDiv1.attr("id", 'nineAmDiv1')

let nineAmDiv2 = $('<div>')

nineAmDiv2.attr('class', 'input-group-prepend')
nineAmDiv2.attr('id', 'nineAmDiv2')

let nineAMspan = $('<span>')

nineAMspan.attr('class', 'input-group-text')

nineAMspan.text('9am')

let nineAmTextArea = $('<textarea>')

nineAmTextArea.attr('class', 'form-control')
nineAmTextArea.attr('aria-label', 'With textarea')

let nineAmButton = $('<button>')

nineAmButton.attr('class', 'btn btn-outline-secondary')
nineAmButton.attr('type', 'button')
nineAmButton.attr('id', 'button-addon2')
nineAmButton.text('Save')


$('.container').append(nineAmDiv1)

$('#nineAmDiv1').append(nineAmDiv2)

$('#nineAmDiv2').append(nineAMspan)

$('#nineAmDiv1').append(nineAmTextArea)

$('#nineAmDiv1').append(nineAmButton)



