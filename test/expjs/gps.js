Wait = (ms) => new Promise(resolve =>  setTimeout(resolve, ms))
const local = [
    { icon: 273, nome:'Torre aeroporto', cor:1, x:-2361.34, y:3247.16, z:91.91 },
    { icon: 123, nome:'Hangar 2', cor:1, x:-2164.31, y:3241.30, z:32.81 },
    { icon:  58, nome:'Hangar principal', cor:1, x:-1841.64, y:3025.93, z:32.81 }
];


setTick(async () => {
    Wait(1000)
    await addBlips()  
})

let addBlips = ()=>{
    for (const i in local) {
        let blip = AddBlipForCoord( local[i].x,  local[i].y,  local[i].z)
        SetBlipSprite( blip,  local[i].icon)
        SetBlipDisplay( blip, 4)
        SetBlipScale( blip, 0.9)
        SetBlipColour( blip,  local[i].cor)
        SetBlipAsShortRange( blip, true)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString( local[i].nome)
        EndTextCommandSetBlipName( local[i].blip)
    }
}

