var Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));
var lista_de_objetos = [];


setTick(async() => { 
    mostrar_objetos()   
})

RegisterCommand("buscarobjetos", async() =>{     

    let retorno = true;     
    let [ handle, entity ] = FindFirstObject();  
      
    while(retorno){
        
        let [ ok, entidade ] = FindNextObject(handle);
        retorno = ok;      
        
        let [x, y, z] = GetEntityCoords(entidade, true);  

        lista_de_objetos.push( [entidade, x,y,z] )
    }
    EndFindObject(handle); 
  
}, false)



 
const mostrar_objetos = ()=>{
    lista_de_objetos.forEach(item => {     
       
        let [ok, x1, y1] = GetScreenCoordFromWorldCoord(item[1], item[2], item[3])

        if(ok){
            SetTextScale(0.5, 0.5)
            SetTextFont(0)
            SetTextProportional(1)
            SetTextColour(255, 255, 255, 255)
            SetTextDropshadow(0, 0, 0, 0, 255)
            SetTextEdge(2, 0, 0, 0, 150)
            SetTextDropShadow()
            SetTextOutline()
            SetTextCentre(1)        
            BeginTextCommandDisplayText("STRING")
            AddTextComponentSubstringPlayerName(item[0])
            EndTextCommandDisplayText(x1, y1) 
        }             
    });
}
