setTick(()=>{
   
    if(IsControlJustReleased(1, 54)){        
        SetNuiFocus(true, true)
        SendNuiMessage(JSON.stringify({ box: "abrir"}))
    }
})

RegisterNuiCallbackType("uibox")
on('__cfx_nui:uibox', (data, cb) =>{    
    let item = data.item;
    if(item === "fechar"){
        SetNuiFocus(false)       
    }    
})

const app = new Vue({
    el:"#app",
    created(){
        window.addEventListener("message",(event)=>{          
           let box = event.data.box;
           if(box == "abrir"){
               this.box = true;
           }
        })
    },
    data:{
       box:false            
    },
    methods:{
        btnx:function(){

            this.box = false;

            fetch(`https://${GetParentResourceName()}/uibox`, {
                method:'POST',
                headers:{ 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({ item: "fechar" })
            })
            .then( response => response.json())
            .then( response => console.log(response))

        }
    }
}) 