function calculate()
{
     let a = document.querySelector("#val1").value
     let b = document.querySelector("#val2").value
     if (a==0 || b==0){
          document.querySelector("#result").innerHTML = "<p>Please Enter the User details!<p>"
          return
     }

     document.querySelector("#result").innerHTML = `<h1>User Details:<h1>`
     document.querySelector("#name").innerHTML = `<p>Name: ${a}<p>`
     document.querySelector("#city").innerHTML = `<p>City: ${b}<p>`


}

function clean()
{
     document.querySelector("#val1").value = ""
     document.querySelector("#val2").value = ""
     document.querySelector("#result").innerHTML = " "
     document.querySelector("#name").innerText = ` `
     document.querySelector("#city").innerText = ` `

}