function tela(){

    let [x, y, z] = GetEntityCoords(PlayerPedId());

    let [rest, x1, y1] = GetScreenCoordFromWorldCoord(x,y,z)
       
    if(rest){
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
        AddTextComponentSubstringPlayerName("x: "+x+" y: "+y+" z: "+z)
        EndTextCommandDisplayText(x1, y1)
    }
    
}  