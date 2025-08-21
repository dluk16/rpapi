RegisterCommand("travar",()=>{
    SetNuiFocus(true, true)
})


RegisterCommand("enviar",()=>{
    SendNuiMessage(JSON.stringify({ item:'mensagem'}))  
})



RegisterNuiCallbackType('jspuro')
on('__cfx_nui:jspuro', (data, cb) => {   
    let item = data.item;
    console.log(item)
    SetNuiFocus(false)
});


//========================================================================


//== Receber do client
window.addEventListener('message',(Event)=>{
   
    let rst = Event.data.item
   console.log(rst)   
   
   let msn = document.getElementById('b1')
   msn.textContent = rst;

})

//== Enviar para o client

var http = new XMLHttpRequest();
http.open('POST', `https://${GetParentResourceName()}/jspuro`, true);
http.setRequestHeader('Content-type', 'application/json')


var btn1 = document.getElementById("b1")

btn1.addEventListener("click", ()=>{
    http.send(JSON.stringify({ item:'enviado do js'}));
    http.onload = function() {  
        console.log("Resposta: "+http.responseText);
    };
})