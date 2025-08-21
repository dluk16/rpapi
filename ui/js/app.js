 import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'; 
 
createApp({
    setup() {
        const message = ref('UI')
        return {
        message
        }
    },
    mounted() {
        
    },
    data() {
        return { 
            titulo:'UI',   
        }
    },
    methods: {     
    }
}).mount('#app')


// browser-side JS
fetch(`https://${GetParentResourceName()}/getItemInfo`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        itemId: 'my-item'
    })
}).then(resp => resp.json()).then(resp => console.log(resp));

// browser side
window.addEventListener('message', (event) => {
    if (event.data.type === 'open') {
        doOpen();
    }
});