RegisterCommand('enviar', (source, args)=>{    
    const playerCoord = GetEntityCoords( PlayerPedId(), false);
    emitNet('clientserv:enviando', JSON.stringify(playerCoord));
}, false); 

RegisterCommand('exibir', (source, args)=>{    
    emitNet('clientserv:exibir');
}, false); 


onNet('clientserv:recebendo', (prm)=>{ 
    const pos = JSON.parse(prm);
    console.log(pos[0])
})


//---- Server ----------------------------------------------------------------------



const lista = [111,222,333];
const users = { id:1, nome:'lucianoeun' };

// //recebendo do cliente
onNet('clientserv:enviando',
    (playerCoord)=>{   
        //emitNet('clientserv:recebendo', source, playerCoord)  
        exports.database.criar(playerCoord)          
    }
);


onNet('clientserv:exibir',
    ()=>{        
        //emitNet('clientserv:recebendo', source, users)  
       var dados =  exports.database.exibir()   
       emitNet('clientserv:recebendo', source, dados) 
       //console.log(dados)       
    }
);

//-- Database ------------------------------------------------------------------------

const root = GetResourcePath(GetCurrentResourceName());

function criar(prm){
    var dados = prm;
    try {
        fs.writeFileSync(`${root}/users.txt`, dados, {encoding: 'utf8'}); 
        console.log('Salvo');
    } catch (err) {
        console.log(err);
    } 
}
  
function exibir(){
    try {
        const ret = fs.readFileSync(`${root}/users.txt`, { encoding: 'utf8' });
        return ret;
    } catch (err) {
        console.log(err);
    }    
}

exports("criar", criar);
exports("exibir", exibir);