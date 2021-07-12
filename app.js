let add = () =>
{
    var input = document.getElementById('inp')
    var display = document.getElementById('display')
    display.innerHTML = parseInt(display.innerHTML) + parseInt(input.value)
}
let sub = () =>
{
    var input = document.getElementById('inp')
    var display= document.getElementById('display')
    display.innerHTML = parseInt(display.innerHTML) - parseInt(input.value)
}