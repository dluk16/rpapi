var playerId = NetworkGetPlayerIndex(GetPlayerPed(PlayerId()))

on('onClientGameTypeStart', () => {    
    exports.spawnmanager.setAutoSpawnCallback(() => {     
        emitNet('tp', playerId);
        onNet('tp2',(data)=>{      
            let pos = JSON.parse(data);            
            exports.spawnmanager.spawnPlayer(pos)
        })
    });   
    exports.spawnmanager.setAutoSpawn(true)
    exports.spawnmanager.forceRespawn()  
});

//======================================================================================


const root = GetResourcePath(GetCurrentResourceName());

//== [ enviado a ultima posição para o client ] ==================================
onNet('tp', (userid) => {
    fs.readFile(`${root}/spawner.json`, { encoding: 'utf8' }, (err, data) => {
        emitNet("tp2", userid, data);
    });    
})

//==[ Salvando a última posiçao do cliente ] =================================
on("playerDropped", (reason) => {
    
    const player_id = global.source;   
    console.log(`Player ${GetPlayerName(player_id)} dropped (Reason: ${reason}).`);

    const player_ped_id = GetPlayerPed(player_id)   
    const [x,y,z] = GetEntityCoords(player_ped_id, false);  
    const dados = {x:x, y:y, z:z};

    fs.writeFileSync(`${root}/spawner.json`, JSON.stringify(dados, null, 2), { encoding: 'utf8' }, (err) => {        
        if(err){
            print(err)
        }          
    });

});

//======================================================================================


// {
//     "x": -2358.923095703125,
//     "y": 3254.0439453125,
//     "z": 98.5831298828125
//   }
