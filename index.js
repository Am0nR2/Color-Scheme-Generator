
const getSchemeBtn = document.getElementById("get-scheme-btn")


getSchemeBtn.addEventListener("click", function(){
    
    const colorSelector = document.getElementById("color-selector").value.substring(1)
    const modeSelector = document.getElementById("mode-selector").value
    getSchemeBtn.style.backgroundColor = `#${colorSelector}`
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector}&mode=${modeSelector}&count=6`)
    .then(response => response.json())
    .then(data =>{
        const hexValues = data.colors.map(function(color){
            return color.hex.value
        })
        console.log(hexValues)
        render(hexValues)
    })
    
})

function render(colorArr){
    document.getElementById("color-area").innerHTML = colorArr.map((color)=>{
        return `
        <div class="color" style="background-color: ${color};" ></div>
        `
    }).join("")
    document.getElementById("hex-codes").innerHTML = colorArr.map((color)=>{
        return `
        <p style="border-color:${color} ;"> ${color}</p>
        `
    }).join("")
}
