RegisterCommand("jschat", async (source, args) =>{
  let argsString = args.join(" ")
  emitNet("js:chat", (argsString ? argsString: "mensagem.."),["cores"])
  return
})

onNet("js:chat",(msg, cor) =>{
  emitNet("chat:addMessage", -1, {
    args:[msg],
    color: cor
  })
  console.log("msg")
  return
})

var tick = 0;

setTick( async()=>{
  await wait(1000)
  emitNet("js:chat", tick++)
})