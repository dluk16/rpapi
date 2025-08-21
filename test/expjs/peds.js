ReviveInjuredPed(ped);
/*Ele irá reviver/curar o ped ferido. A condição é ped não deve estar morta.
Ao definir e converter o int de saúde encontrado, se a saúde cair abaixo de 5, o ped ficará no chão com dor (a saúde padrão máxima é 100).
Esta função é bem adequada lá.*/

ResurrectPed(ped);
/*Esta função simplesmente trará a pessoa morta de volta à vida.
Em vez disso, antes de chamar esta função, você pode querer declarar a posição em que seu ped ressuscitado será gerado. (Por exemplo, cerca de 2 flutuadores da posição atual do jogador.)*/

const number = GetPedTimeOfDeath(ped);
const number2 = GetPedTextureVariation(ped, componentId);
const number3 = GetPedPropIndex(ped, componentId);
const numero4 = GetPedPaletteVariation(ped, componentId);

const Entity = GetPedSourceOfDeath(ped);
/*Retorna a Entidade (Ped, Vehicle, ou ?Object?) que matou o 'ped'
O melhor é verificar se o Ped está morto antes de perguntar pelo assassino.*/

const Hash = GetPedCauseOfDeath(ped);
//Retorna o hash da arma/modelo/objeto que matou o ped.

SetPedAmmo(ped, weaponHash, ammo);
SetEntityMaxHealth(entity, value);

// local iVar16 = GetPedPropIndex(PlayerPedId(), 0) -- helmet prop index
// local iVar17 = GetPedPropTextureIndex(PlayerPedId(), 0) -- helmet prop index
// local iVar18 = GetHashNameForProp(PlayerPedId(), 0, iVar16, iVar17) -- gets the hash name for the helmet
// if N_0xd40aac51e8e4c663(iVar18) > 0 then -- visor variant so can toggle the visor
//     BeginTextCommandDisplayHelp("VISOR_TOGGLE") -- Hold ~INPUT_SWITCH_VISOR~ to flip your helmet visor open or closed when on foot or on a motorcycle. You can also set the default state of your Helmet Visor in the Style section of the Interaction menu.
//     EndTextCommandDisplayHelp(0, 0, true, 6000)
// end

const n2 = GetPedEyeColor(ped);
let pedEyeColour = GetPedEyeColor(PlayerPedId())
if(pedEyeColour == 7){
    print("Gray eyes!")
}
    
const n3 = GetPedFaceFeature(ped, index	);
let noseWidth = GetPedFaceFeature(PlayerPedId(), 0)
if(noseWidth == 1.0){
    print("You have big nose!")
}

const n4 = GetPedHairColor(ped);
let primaryColour = GetPedHairColor(PlayerPedId())
if(primaryColour == 18){
    print("You have red hair!")
}

const n5 = GetPedHairColor(ped);
let secondaryColour = GetPedHairHighlightColor(PlayerPedId())
if(secondaryColour == 32){
    print("You have pink hair highlight colour!")
}

//const [retval, overlayValue, colourType, firstColour, secondColour, overlayOpacity] = GetPedHeadOverlayData(ped,index);

//getting beard overlay data
let success, overlayValue, colourType, firstColour, secondColour, overlayOpacity = GetPedHeadOverlayData(PlayerPedId(), 1)
if(success){
    // incrementing value
    SetPedHeadOverlay(PlayerPedId(), 1, overlayValue + 1, overlayOpacity)
}

const Ped = GetPedIndexFromEntityIndex(	entity);

const [outR, outG, outB] = GetPedHairRgbColor(hairColorIndex);
const [retval, headBlendData] = GetPedHeadBlendData(ped);

// typedef struct  
// {  
//     int shapeFirst, shapeSecond, shapeThird;   
//     int skinFirst, skinSecond, skinThird;   
// 	float shapeMix, skinMix, thirdMix;  
// } headBlendData; 

const retval: number = 
	GetPedHeadBlendFirstIndex(
		type: number
	);
    const retval: number = 
	GetPedHeadBlendNumHeads(
		type: number
	);
    const retval: number = 
	GetPedHeadOverlayNum(
		overlayID: number
	);

    const retval: number = 
	GetPedHeadOverlayValue(
		ped: Ped, 
		overlayID: number
	);
    
    
