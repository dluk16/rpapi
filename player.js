//client

// GET_PLAYER_STAMINA
const retvale = 	GetPlayerStamina(playerId);
const v1 = GetPlayerName(playerId);

const playerIdx = GetPlayerFromServerId(source)
const ped = GetPlayerPed(playerIdx)

// GET_PLAYER_INDEX
const player_index = GetPlayerIndex();


//=== source (NetID of the player)

// GET_PLAYER_IDENTIFIER
const retval = 	GetPlayerIdentifier(source, identiferIndex	);


let playerLicenses = {};
on('playerJoining', () => {
    playerLicenses[source] = GetPlayerIdentifierByType(source, 'license');
});

// GET_PLAYER_LAST_MSG
const retval1 = 	GetPlayerLastMsg(source);
	

// GET_PLAYER_ENDPOINT
const retval2 = 	GetPlayerEndpoint(source);
