//const playerId = GetPlayerFromServerId(serverId);

let playerLicenses = {};


on('playerJoining', () => {

    console.log("Source"+source);

    playerLicenses[source] = GetPlayerIdentifierByType(source, 'license');

    console.log(`Player ${GetPlayerName(source)} is joining with license: ${playerLicenses[source]}`);
   
    

    // const ped = GetPlayerPed(playerIdx)
    // console.log("PED"+ped)

    //console.log(GetPlayerIndex())
});

console.log(playerLicenses)


on('playerConnecting', (name, setKickReason, deferrals) => {
    deferrals.defer()

    const player = global.source;

    console.log('Player id:', player);

    setTimeout(() => {
        deferrals.update(`Hello ${name}. Your steam ID is being checked.`)

        let steamIdentifier = null;

        for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
            const identifier = GetPlayerIdentifier(player, i);

            console.log(`Identifier ${i}:`, identifier);

            if (identifier.includes('steam:')) {
                steamIdentifier = identifier;
            }
        }

        // pretend to be a wait
        setTimeout(() => {
            if (steamIdentifier === null) {
                deferrals.done("You are not connected to Steam.")
            } else {
                deferrals.done()
            }
        }, 0)
    }, 0)
})