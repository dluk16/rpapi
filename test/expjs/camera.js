var Wait = (ms) => new Promise(res => setTimeout(res, ms));


RegisterCommand('tp',()=>{
    SetEntityCoords( PlayerPedId(), 686.3795166015625, 577.837646484375, 130.46127319335938, false, false, true);
})


RegisterCommand('loc',()=>{
    const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
    console.log(x,y,z)
})

RegisterCommand('freze',()=>{
    SetEntityInvincible(PlayerPedId(),true)	
    FreezeEntityPosition(PlayerPedId(),true)
    console.log("Frezado")
})

RegisterCommand('desfreze',()=>{
    SetEntityVisible(PlayerPedId(),true)
    FreezeEntityPosition(PlayerPedId(),false)
    console.log("DesFrezado")
})


var cam = null;

RegisterCommand('camera1',()=>{

    const [x, y, z] = GetEntityCoords(PlayerPedId(), false);

    if(!DoesCamExist(cam)){
        cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", false);
    }
    let rota = GetEntityRotation(PlayerPedId(), 2)

    SetCamActive(cam, true)
    SetCamCoord(cam, x+1.0, y+2.5, z+0.5)

    RenderScriptCams(true, false, 3000, true, false, false)
    SetCamRot(cam, 11.5, 0.0, 155.0, 5)   
    console.log(rota)

})




setTick( () => {       
    if(IsControlJustReleased(0, 303)){   //303 = U   
        const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
        let rotacao = GetEntityRotation(PlayerPedId(), 2)
    
        if(!DoesCamExist(cam)){
            cam = CreateCameraWithParams('DEFAULT_SCRIPTED_CAMERA', x, y, z, -7.422, 0.059, rotacao[2], 43.055, false, 2)
        }  
        SetCamActive(cam, true)
        RenderScriptCams(true, false, 3000, true, false, false)
        SetCamParams(cam, x+1.0, y+2.5, z+0.5, 11.0, -6.0, 155.0, 43.055, 1500, 0, 0, 5);
    }   



    if(IsControlJustReleased(0, 51)){   //E      
        const [x, y, z] = GetEntityCoords(PlayerPedId(), false);
        let rotacao = GetEntityRotation(PlayerPedId(), 2)
    
        if(!DoesCamExist(cam)){
            cam = CreateCameraWithParams('DEFAULT_SCRIPTED_CAMERA', x, y, z, -7.422, 0.059, rotacao[2], 43.055, false, 2)
        }  
        SetCamActive(cam, true)
        RenderScriptCams(true, false, 3000, true, false, false)
        SetCamParams(cam, x+0.2, y+0.5, z+0.7, 0.0, 0.0, 155.0, 43.055, 1500, 0, 0, 5);
     }      
})