Wait = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));

RegisterCommand("clientcomando", async(source, args) =>{  
    console.log(source)
    const ped = PlayerPedId() //retornou 258
    const player = PlayerId() //retornou 128
    const entity = GetPlayerPed(-1) //retornou 0, mais com o -1 retornou 258

    console.log("PED:"+ped)
    console.log("PLAYER:"+player)
    console.log("ENTITY:"+entity)
    const model = GetEntityModel(ped); //retornou 1885233650 
    console.log(" ModeloHash: "+model)

    modelo()
}, false)

const modelo = ()=>{    
    
    let model = 'mp_m_freemode_01'
   
    if(IsModelInCdimage(model) && IsModelValid(model)){
        RequestModel(model)
        while(!HasModelLoaded(model)){
            Wait(1000)
        }
        SetPlayerModel(PlayerId(), model)

        if( model != "mp_f_freemode_01" && model != "mp_m_freemode_01"){
            SetPedRandomComponentVariation(PlayerPedId(), true)
        }else{           
            SetPedComponentVariation(PlayerPedId(), 0, 0, 0, 0)//rosto         
            SetPedComponentVariation(PlayerPedId(), 1, 0, 0, 0)//mascaras
            SetPedComponentVariation(PlayerPedId(), 2, 6, 1, 2)//cabelos
            SetPedComponentVariation(PlayerPedId(), 3, 15, 0, 0)//corpo
            SetPedComponentVariation(PlayerPedId(), 4, 29, 0, 0) //calças, ped, parte, modelo, textura, cor
            SetPedComponentVariation(PlayerPedId(), 5, 0, 0, 0)//mochilas e paraquedas
            SetPedComponentVariation(PlayerPedId(), 6, 1, 0, 0)//sapatos
            SetPedComponentVariation(PlayerPedId(), 7, 151, 0, 0)//acessorios
            SetPedComponentVariation(PlayerPedId(), 8, 15, 0, 0)//camiseta
            SetPedComponentVariation(PlayerPedId(), 9, 0, 0, 0)//colete
            SetPedComponentVariation(PlayerPedId(), 10, 53, 0, 0)//adesivos
            SetPedComponentVariation(PlayerPedId(), 11, 45, 0, 0)//jaqueta
        }
        SetModelAsNoLongerNeeded(model)
    }
}


const circulo = () => {
    DrawMarker( 23, -2355.03, 3258.90, 91.91, 
       0.0, 0.0, 0.0, 
       0.0, 0.0, 0.0,  
       0.4, 0.4,0.4,
       191, 255,  0,  50,
       false, true, 2, null, null, false
    )
}

async function Main() {
    const modelHash = GetHashKey("prop_weed_01");

    if (!HasModelLoaded(modelHash)) {
        // If the model isnt loaded we request the loading of the model and wait that the model is loaded
        RequestModel(modelHash);
        do {
            new Promise(resolve => setTimeout(resolve, 100));
        } while (!HasModelLoaded(modelHash));
    }

    // At this moment the model its loaded, so now we can create the object
    let [x, y, z] = GetEntityCoords(PlayerPedId());
    const obj = CreateObject(modelHash, x, y, z, true);
}

//======================================================================

RegisterCommand("vestir", async(source, args) =>{  
    let tipo =   args[0]
    let modelo = parseInt(args[1])
  
    if(tipo == 'jaqueta'){       
       await SetPedComponentVariation(PlayerPedId(), 11, modelo, 0, 0) 
    }else if(tipo == 'camisa'){       
        await SetPedComponentVariation(PlayerPedId(), 8, modelo, 0, 0) 
    }else if(tipo == 'calca'){
        await SetPedComponentVariation(PlayerPedId(), 4, modelo, 0, 0) 
    }else if(tipo == 'sapatos'){
        await SetPedComponentVariation(PlayerPedId(), 6, modelo, 0, 0) 
    }else if(tipo == 'mochila'){
        await SetPedComponentVariation(PlayerPedId(), 5, modelo, 0, 0) 
    }else if(tipo == 'corpo'){
        await SetPedComponentVariation(PlayerPedId(), 3, modelo, 0, 0) 
    }else if(tipo == 'capacete'){
        await SetPedComponentVariation(PlayerPedId(), 2, modelo, 0, 0) 
    }else{
        console.log("Nada acontece")
    }
     
}, false)

const notificacao = () => {
    SetNotificationTextEntry("STRING")
    SetNotificationMessage('CHAR_ABIGAIL','CHAR_ABIGAIL', true, 4, 'Armario', 'Vestiu o uniforme')
};