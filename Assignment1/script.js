let inputs = document.querySelectorAll('input')
let btnclear = document.querySelector('#btn2')
btnclear.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '')
})

function calculator()
{
    let a = Number(document.querySelector("#val1").value)
    let b = Number(document.querySelector("#val2").value)

    document.querySelector("#result").innerHTML = "<h1>Output:<h1>"

    console.log(document.querySelector("#sum").innerText = `${a} + ${b} = ${a+b}`)
    console.log(document.querySelector("#sub").innerText = `${a} - ${b} = ${a-b}`)
    console.log(document.querySelector("#mul").innerText = `${a} * ${b} = ${a*b}`)
    console.log(document.querySelector("#div").innerText = `${a} / ${b} = ${a/b}`)
    
}
