Wait = (ms) => new Promise(resolve =>  setTimeout(resolve, ms))

setTick(() => {   
    display()        
    if(IsPedInAnyVehicle(GetPlayerPed(-1), false)) {
        let speed = (GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false))*2.2369)
        text(Math.floor(speed))
    }         
})

function display(){      
    SetTextScale(1.0,1.0)	
    SetTextFont(0)
    SetTextProportional(1)
    // SetTextDropshadow(0, 0, 0, 0, 255)
    // SetTextEdge(2, 0, 0, 0, 150)
    // SetTextDropShadow();
    // SetTextOutline();
    BeginTextCommandDisplayText('STRING')
    //SetTextCentre(1)
    AddTextComponentSubstringTextLabel('Hello, World!')
    EndTextCommandDisplayText(0.02,0.78) 

    DrawRect(0.5, 0.05, 1.05, 0.05, 255, 255, 255, 100)

    // DrawDebugText('Ola mundo', 686.245, 577.950, 130.461,255, 255, 255,90)
    // DrawDebugText_2d('Ola mundo', 686.245, 577.950, 130.461,255, 255, 255,90)
    // SetTextFont(0)
    // SetTextProportional(0)
    // SetTextScale(0.4, 0.4)
    // SetTextEntry("STRING")
    // AddTextComponentString("Velocimetro: 300km/h")
    // DrawText(0.02,0.78)
}



function text(content) {
    // SetTextFont(1)
    // SetTextProportional(0)
    // SetTextScale(1.9,1.9)
    // SetTextEntry("STRING")
    // AddTextComponentString(content)
    // DrawText(0.9,0.7)
    SetTextFont(0)
    SetTextProportional(0)
    SetTextScale(0.4, 0.4)
    SetTextEntry("STRING")
    AddTextComponentString("Velocimetro: "+content+"km/h")
    DrawText(0.02,0.78)
}
   

function Textos(){
    let [visivel, x, y] = GetScreenCoordFromWorldCoord(1729.275,6415.208,35.037)
    console.log(visivel)
    if(visivel){
       
        SetTextScale(0.0, 0.5)
        SetTextFont(0)
        SetTextProportional(1)
        SetTextColour(255, 255, 255, 255)
        SetTextDropshadow(0, 0, 0, 0, 255)
        SetTextEdge(2, 0, 0, 0, 150)
        SetTextDropShadow()
        SetTextOutline()
        SetTextCentre(1)

        BeginTextCommandDisplayText("STRING")
        AddTextComponentSubstringPlayerName("Abrir")
        EndTextCommandDisplayText(x, y)
    }  
}

RegisterCommand("loc", ()=>{
    const [x, y, z] = GetEntityCoords(PlayerPedId(), false)
    console.log(x.toFixed(3)+","+y.toFixed(3)+","+z.toFixed(3))
    alerta("mensagens vindo do alerta")
})


function alerta(texto){
    SetNotificationTextEntry("STRING")
	AddTextComponentString(texto)
	DrawNotification(false, false)
}

RegisterCommand("al", ()=>{
    alerta2()
})
function alerta2(){
    BeginTextCommandThefeedPost("STRING")
    AddTextComponentSubstringPlayerName("Alerta 2 em ação")
    //EndTextCommandThefeedPostTicker(false, false)
    EndTextCommandThefeedPostTickerWithTokens(false, false)
    //EndTextCommandThefeedPostTicker(false, false)
}







