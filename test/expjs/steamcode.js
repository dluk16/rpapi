on("playerConnecting", (name, setKickReason, deferrals) => {
  deferrals.defer();

  const player = global.source;

  setTimeout(() => {
    deferrals.update(`Hello ${name}. Your steam ID is being checked.`);

    let steamIdentifier = null;

    for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
      const identifier = GetPlayerIdentifier(player, i);

      if (identifier.includes("steam:")) {
        steamIdentifier = identifier;
      }
    }

    // pretend to be a wait
    setTimeout(() => {
      if (steamIdentifier === null) {
        deferrals.done("You are not connected to Steam.");
      } else {
        deferrals.done();
      }
    }, 0);
  }, 0);
});

//set steam_webApiKey "66789BCCFFB1DDCF8DA02AF5E161D26F"

setImmediate(() => {
  RequestModel("s_m_y_cop_01");
});

on("populationPedCreating", (x, y, z, model, setters) => {
  console.log(`Making cop at ${x} ${y} ${z} plus a bit (${model})`);
  setters.setModel("s_m_y_cop_01"); // you can use a hash as well
  setters.setPosition(x, y, z + 5.5);
});

on("onClientResourceStart", (resourceName) => {
  if (GetCurrentResourceName() != resourceName) {
    return;
  }
  console.log(`The resource ${resourceName} has been started on the client.`);
});

on("playerDropped", (reason) => {
  console.log(
    `Player ${GetPlayerName(global.source)} dropped (Reason: ${reason}).`
  );
});
