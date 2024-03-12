let input=document.getElementById("qr-container")
let url=document.getElementById("qr")
// let btn=document.getElementById("gen-qr")
let image=document.getElementById("Final")
input.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUrl=url.value
    let qrurl=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${newUrl}`
    image.src=qrurl
    
})