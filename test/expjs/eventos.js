//===[ acionadores de eventos ] =============================================================

//aciona evento no proprio cliente ou proprio servidor
emit("eventName", eventParam1, eventParam2);

//Aciona evento de servidor, envia do cliente para o servidor
emitNet("eventName", eventParam1, eventParam2);
//acionando eventos do cliente, envia do servidor para o cliente = targetPlayer
emitNet("eventName", targetPlayer, eventParam1, eventParam2);

//eventos latentes, envia uma grande quantidade de dados do cliente para o servidor
TriggerLatentServerEvent("eventName", bps, eventParam1, eventParam2);
//eventos latentes do servidor para o cliente, bps = bytes por segundos
TriggerLatentClientEvent("eventName", targetPlayer, bps, eventParam1, eventParam2);


//===[ executores de eventos ] =============================================================

//Para usar eventos existentes em seus recursos, você precisa ouvi-los. Isso é o mesmo para scripts do lado do cliente/servidor.
//Em Lua/JS, a sourcevariável (global) conterá o ID do jogador que disparou o evento. Você provavelmente deve salvá-lo 
//em uma variável local se for usá-lo após o retorno do evento.

on('eventName', (eventParam1, eventParam2) => {});
emit("eventName", eventParam1, eventParam2);
//Se você deseja que seus eventos estejam disponíveis 'pela rede' (ou seja, acionar um evento de cliente a partir de um script do lado do servidor 
//ou acionar um evento de servidor a partir de um script do lado do cliente), você precisará registrar o evento primeiro .

onNet('eventName', (eventParam1, eventParam2) => {})

//====================================================================

//cliente -> servidor
//enviando->
emitNet("eventName", eventParam1, eventParam2);
//recebendo no servidor -[
onNet('eventName', (eventParam1, eventParam2) => {
    //executa o que recebeu
})


//servidor -> cliente
//enviando ->
emitNet("eventName", targetPlayer, eventParam1, eventParam2);
//recebendo no cliente -[
onNet('eventName', (eventParam1, eventParam2) => {
    //executa o que recebeu
})


//====================================================================
//====================================================================

//pegar o id do player no servidor
const playerId = NetworkGetPlayerIndex(GetPlayerPed(PlayerId()))

//==[ Client envia e recebe ]==========================

//emitNet('enviar', playerId)//envia
//onNet('enviar',(lista)=>{ console.log(lista) })//recebe

RegisterCommand('teste', ()=>{
    emitNet('lista', playerId)
    onNet('lista',(item)=>{ 
        let n = JSON.parse(item)
        console.log(n.id) 
    })
})

//====================================================================
//====================================================================
const root = GetResourcePath(GetCurrentResourceName());

//==[ server recebe e envia ]=======================================

// onNet('enviar', (userid) => {//recebe
//     emitNet("enviar", userid, {id:1, nome:'LucianoEun'});//envia
// })

onNet('lista', (userid) => {//recebe
    fs.readFile(`${root}/dados.json`, { encoding: 'utf8' }, (err, data) => {
        if(err){
            print(err)
        }else{
            emitNet("lista", userid, data);
        }     
       
    });
})
