var app = new Vue({
  el: '#app',
  mounted() {
    window.addEventListener('message', (event) => {
        if (event.data.type === 'open') {
           console.log("recebi o comando e irei executar o pedido")
        }
    });
  },
  data: {
    titulo: 'Olá Vue!'
  },
  methods:{
    enviar() {
      fetch(`https://${GetParentResourceName()}/getItemInfo`, {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
              itemId: 'my-item'
          })
        }).then(resp => resp.json()).then(resp => console.log(resp));
      }
 }
})