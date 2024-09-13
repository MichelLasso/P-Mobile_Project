const contPersona= document.getElementById("contPersonas");
const enter= document.getElementById("buscar")


fetch("https://66df33c1de4426916ee3e098.mockapi.io/personas")
.then(res => res.json())
.then(people =>{

    mostrar()
    function mostrar(){
        
        people.forEach(personas => {
            contPersona.innerHTML += `
                <div class="datosPersonas" id="datosPersonas">
                    <div id="imgAndName">
                        <img src="${personas.avatar}" alt="retrato" id="img">
                        <div id="nameAndDescription">
                            <div id="name">${personas.name_full}</div>
                            <div id="description">${personas.description}</div>
                        </div>
                    </div>
                </div>`
        });
        
        enter.addEventListener("input", (e)=>{
            console.log(e.target.value);
            
            if(e.target.matches("#buscar")){
                document.querySelectorAll("imgAndName").forEach(caja=>{
                    caja.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                    ?caja.classList.remove("filtro")
                    :caja.classList.add("filtro")
                
                }
        
            )
            }
            
        })
    }
    
})
