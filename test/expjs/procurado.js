RegisterCommand("level", async(source, args) =>{ 
    let level = GetPlayerWantedLevel(PlayerId())
    emit('chat:addMessage', {
        args: ['Level: '+level]
    })  
    
}, false)

RegisterCommand("procurado", async(source, args) =>{ 
    SetPlayerWantedLevel(PlayerId(), 5, false)     
}, false)
