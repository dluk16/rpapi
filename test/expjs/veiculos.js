Wait = (ms) => new Promise(resolve =>  setTimeout(resolve, ms))

RegisterCommand("veiculo", async(source, args) =>{    
    const player = GetPlayerPed(-1)
    const [x, y, z] = GetEntityCoords(player)
    let veiculo_modelo = GetHashKey(args[0]) 
    RequestModel(veiculo_modelo)

    while(!HasModelLoaded(veiculo_modelo)){
        
        await Wait(1000)
        RequestModel(veiculo_modelo)
    }
    CreateVehicle(veiculo_modelo, x, y, z, GetEntityHeading(player, true, false))
  
}, false)


setTick(() => {  
      
          
    if(IsPedInAnyVehicle(GetPlayerPed(-1), false)) {
        
        const veiculo = GetVehiclePedIsIn(PlayerPedId());
        let temperatura = GetVehicleEngineTemperature(veiculo);
        let enginer = GetVehicleEngineHealth(veiculo);
        let gasolina = GetVehicleFuelLevel(veiculo);		
        let oleo = GetVehicleOilLevel(veiculo);
        //const tipoveiculo = GetVehicleType(veiculo);
        const tipoveiculo = veiculo;
        const acentos = GetVehicleMaxNumberOfPassengers(veiculo);
        const bancos = acentos+1;
        let rpm = GetVehicleCurrentRpm(veiculo);
        let velocidade = ( GetEntitySpeed(veiculo, false) * 2.2369)

        //= display ============================
        velocimetro(Math.floor(velocidade));
        display(tipoveiculo, gasolina, oleo, enginer, temperatura, bancos, rpm);
    }         
})

function display(tipoveiculo, gasolina, oleo, enginer, temperatura, bancos, rpm) { 
    SetTextFont(0)
    SetTextProportional(0)
    SetTextScale(0.4, 0.4)
    SetTextEntry("STRING")
    AddTextComponentString("Tipo:"+tipoveiculo+" Gasolina: "+gasolina+" Oleo: "+oleo+" Situação: "+enginer.toFixed(2)+" Bancos: "+bancos+" RMP: "+rpm.toFixed(2)+" Temperatura: "+temperatura.toFixed(2))
    DrawText(0.01,0.0)
}

function velocimetro(velocidade) { 
    SetTextFont(0)
    SetTextProportional(0)
    SetTextScale(0.4, 0.4)
    SetTextEntry("STRING")
    AddTextComponentString("Velocimetro: "+velocidade+"km/h")
    DrawText(0.02,0.78)
}

MyClosestVehicle = function(x,y,z,radius){
	for (let i = 1; i < 72; i++){
		const angle = (i*5)*Math.PI/180;
		const sx = (50.0*Math.cos(angle))+x;
		const sy = (50.0*Math.sin(angle))+y;
		const ex = x-(sx-x);
		const ey = y-(sy-y);
		const rayHandle = StartShapeTestCapsule(sx,sy,z,ex,ey,z,radius,10,PlayerPedId(),1000);
		const ent = GetShapeTestResult(rayHandle,false)[4];
		return ent;
	}
}

setTick(() => {
	let ped = PlayerPedId();
	let pco = GetEntityCoords(ped);
	let veh = MyClosestVehicle(pco[0],pco[1],pco[2],5.0);

	if (DoesEntityExist(veh)){
		for (let i = 1; i < GetNumberOfVehicleDoors(veh); i++){
			let coord = GetEntryPositionOfDoor(veh, i);
			if (Vdist2(pco[0],pco[1],pco[2],coord[0],coord[1],coord[2]) < 0.75 && !DoesEntityExist(GetPedInVehicleSeat(veh,i-1)) && GetVehicleDoorLockStatus(veh) !== 2){
				if (IsControlJustPressed(1,23)){
					TaskEnterVehicle(ped,veh,10000,i-1,1.0,1,0);
				}
			}
		}
	}
});
   