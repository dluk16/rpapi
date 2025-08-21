
var j = null;

var teams = [           
        { name:"allies", model:"s_m_y_swat_01", weapon:"WEAPON_CARBINERIFLE"},
        { name:"enemies", model:"g_m_m_chicold_01", weapon:"WEAPON_ASSAULTRIFLE"}     
    ]

teams.forEach((team)=>{
    AddRelationshipGroup(team.name)
})

var Delay = (ms) => new Promise(resolve =>  setTimeout(resolve, ms));


RegisterCommand("war", async(source, args)=>{
    
    let totalPeople = parseInt(args[0])

    
    for (let i = 1; i < totalPeople; i++) {

        j = Math.floor(Math.random() * teams.length) + 0;
        
        const ped = GetHashKey(teams[j].model)

        RequestModel(ped)

        await Delay(1)
      
        var contador = 0;

        while(!HasModelLoaded(ped) && contador < 5){
            await Delay(100)
            RequestModel(ped)
            contador++;
            console.log("contador"+contador)
        } 
              
        
        var [x,y,z] = GetEntityCoords(PlayerPedId())
      
         x = x + Math.floor(Math.random() * totalPeople) -totalPeople;
         y = y + Math.floor(Math.random() * totalPeople) -totalPeople;

        let newPed = CreatePed(4 , ped, x, y ,z , 0.0 , false, true)

        SetPedCombatAttributes(newPed, 0, true) // BF_CanUseCover ]]
        SetPedCombatAttributes(newPed, 5, true) // BF_CanFightArmedPedsWhenNotArmed ]]
        SetPedCombatAttributes(newPed, 46, true) // BF_AlwaysFight ]]
        SetPedFleeAttributes(newPed, 0, true) // allows/disallows the ped to flee from a threat i think]]
        SetPedRelationshipGroupHash(newPed, GetHashKey(teams[j].name))
        SetRelationshipBetweenGroups(5, GetHashKey(teams[0].name), GetHashKey(teams[1].name)) 

        if (teams[j].name == "allies") {
            SetRelationshipBetweenGroups(0, GetHashKey(teams[j].name), GetHashKey("PLAYER"))
            SetPedAccuracy(newPed, 100)
        } else {
            SetRelationshipBetweenGroups(5, GetHashKey(teams[j].name), GetHashKey("PLAYER"))
        }

        TaskStartScenarioInPlace(newPed, "WORLD_HUMAN_SMOKING", 0, true)
        GiveWeaponToPed(newPed, GetHashKey(teams[j].weapon), 2000, true, false) // https://runtime.fivem.net/doc/natives/#_0xBF0FD6E56C964FCB]]
        SetPedArmour(newPed, 100)
        SetPedMaxHealth(newPed, 100)
        
    }


},true)