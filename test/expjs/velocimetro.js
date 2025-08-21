setTick(() => {   
    display()        
    if(IsPedInAnyVehicle(GetPlayerPed(-1), false)) {
        let speed = (GetEntitySpeed(GetVehiclePedIsIn(GetPlayerPed(-1), false))*2.2369)
        text(Math.floor(speed))
    }         
})

function text(content) { 
    SetTextFont(0)
    SetTextProportional(0)
    SetTextScale(0.4, 0.4)
    SetTextEntry("STRING")
    AddTextComponentString("Velocimetro: "+content+"km/h")
    DrawText(0.02,0.78)
}