function calculate()
{
     let a = Number(document.querySelector("#val1").value)
     let b = Number(document.querySelector("#val2").value)

     document.querySelector("#result").innerHTML = "<h1>Output:<h1>"

     console.log(document.querySelector("#sum").innerText = `${a} + ${b} = ${a+b}`)
     console.log(document.querySelector("#sub").innerText = `${a} - ${b} = ${a-b}`)
     console.log(document.querySelector("#mul").innerText = `${a} * ${b} = ${a*b}`)
     console.log(document.querySelector("#div").innerText = `${a} / ${b} = ${a/b}`)

}

function clean()
{
     document.querySelector("#val1").value = ""
     document.querySelector("#val2").value = ""
     document.querySelector("#result").innerHTML = " "
     document.querySelector("#sum").innerText = ` `
     document.querySelector("#sub").innerText = ` `
     document.querySelector("#mul").innerText = ` `
     document.querySelector("#div").innerText = ` `
}
