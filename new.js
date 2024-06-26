    let cheack = document.getElementById("sonlist")
    if (cheack === null) {
        let div1 = document.createElement('div')
        div1.textContent = "husan"
        div1.classList.add("magin", "invert")
        div1.id = "sonlist"
         let maincontainer = document.querySelector("#bigbox")
        maincontainer.style.flexDirection = "column";
        maincontainer.appendChild(div1)
        let songl=document.createElement('ul')
       div1.appendChild(songl)
        for (const son of songs) {
         songl.innerHTML=songl.innerHTML+`<li> ${songs}</li>`  
        }


       
    }