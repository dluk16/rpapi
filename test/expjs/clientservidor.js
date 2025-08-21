//enviando do cliente para o cliente
RegisterCommand('uid', ()=>{   
    emit('cliente', uid)
})

//enviando do cliente para o servidor
RegisterCommand('steam', ()=>{   
    emitNet('servidor', uid)
})



//recebendo do cliente no cliente
on('cliente',(valor)=>{ console.log("Valor:"+valor)})
//recebendo do cliente no cliente
onNet('cliente', (valor)=>{ console.log("Valor:"+valor)})

//recebendo no cliente vindo do servidor
onNet('serverclient', (valor)=>{ console.log("Valor:"+valor)})



//=== servidor

//enviando do servidor para o cliente
RegisterCommand('steamserver', ()=>{   
    emitNet('serverclient', userid)    
},true)

//recebendo do cliente no servidor
onNet('servidor', (valor)=>{ console.log("Valor:"+valor)})

//client
RegisterCommand('enviar', (source, args)=>{    
    emitNet('clientserv:enviando');//enviando para o server
}, false); 

//recebendo no client
onNet('clientserv:recebendo', (prm)=>{ 
    console.log(prm)
})

//server
const lista = [111,222,333];
const users = [{id:1, nome:'lucianoeun'}]

onNet('clientserv:enviando',//recebdendo no server
    ()=>{       
        emitNet('clientserv:recebendo', source, users)//enviando para o client       
    }
);