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

     document.querySelector("#result1").innerHTML = `<h1>Output:<h1>`
     document.querySelector("#arr").innerHTML = `Array: <br> [${arr}]`
     document.querySelector("#rev").innerHTML = `Reversed Array: <br> [${rev}]`


}

function divisibility()
{
     let n = (document.querySelector("#val2").value)
     let arr = []
     for(i=0;i<=n;i++){
          if (i%5==0)
          {
          arr.push(i)
          }
     }
     document.querySelector("#result2").innerHTML = `<h1>Output:<h1>`
     document.querySelector("#numb").innerHTML = `Numbers divisible by 5 from 1 to ${n} are: <br> [${arr}]`

}
function clean()
{
     document.querySelector("#val1").value = ""
     document.querySelector("#result1").innerHTML = " "
     document.querySelector("#arr").innerHTML = ` `
     document.querySelector("#rev").innerHTML = ` `

     document.querySelector("#result2").innerHTML = " "
     document.querySelector("#numb").innerHTML = ` `
}
