function reverse()
{
     let a = (document.querySelector("#val1").value)
     if (a==0){
          document.querySelector("#result").innerHTML = "<p>Please Enter the Elements of Array!<p>"
          return
     }
     arr = a.split(" ")
     rev = []
     var n = arr.length-1
     for(i=n;i>=0;i--)
     {
          rev.push(arr[i])
     }

     document.querySelector("#result").innerHTML = `<h1>Output:<h1>`
     document.querySelector("#arr").innerHTML = `Array: <br> [${arr}]`
     document.querySelector("#rev").innerHTML = `Reversed Array: <br> [${rev}]`


}

function clean()
{
     document.querySelector("#val1").value = ""
     document.querySelector("#result").innerHTML = " "
     document.querySelector("#arr").innerHTML = ` `
     document.querySelector("#rev").innerHTML = ` `

}