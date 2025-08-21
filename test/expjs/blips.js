setTick(async () => {
  Wait(1000)
  await addBlips()  
})

let addBlips = ()=>{
  for (const i in local) {
      let blip = AddBlipForCoord( local[i].x,  local[i].y,  local[i].z)
      SetBlipSprite( blip,  local[i].icon)
      SetBlipDisplay( blip, 4)
      SetBlipScale( blip, 0.9)
      SetBlipColour( blip,  local[i].cor)
      SetBlipAsShortRange( blip, true)
      BeginTextCommandSetBlipName("STRING")
      AddTextComponentString( local[i].nome)
      EndTextCommandSetBlipName( local[i].blip)
  }
}




SetBlipCategory(blip, 2)

// 1 = No distance shown in legend
// 2 = Distance shown in legend
// 7 = "Other Players" category, also shows distance in legend
// 10 = "Property" category
// 11 = "Owned Property" category

// SET_BLIP_DISPLAY
// SetBlipDisplay(
// 	blip: Blip, 
// 	displayId: number
// );

// displayId Behaviour <br> 0 = Doesn't show up, ever, anywhere. <br> 1 = Doesn't show up, ever, anywhere. <br> 2 = Shows on both main map and minimap. (Selectable on map) <br> 3 = Shows on main map only. (Selectable on map) <br> 4 = Shows on main map only. (Selectable on map) <br> 5 = Shows on minimap only. <br> 6 = Shows on both main map and minimap. (Selectable on map) <br> 7 = Doesn't show up, ever, anywhere. <br> 8 = Shows on both main map and minimap. (Not selectable on map) <br> 9 = Shows on minimap only. <br> 10 = Shows on both main map and minimap. (Not selectable on map) <br> Anything higher than 10 seems to be exactly the same as 10. <br> <br> Rockstar seem to only use 0, 2, 3, 4, 5 and 8 in the decompiled scripts.



function blips(){
  AddTextEntry('MYBLIP', 'Food for ~a~!')
  let blip = AddBlipForCoord(0.0, 0.0, 0.0)
  let blipq = GetBlipFromEntity(GetPlayerPed(-1))
  ShowFriendIndicatorOnBlip(blipq, true)

  ShowCrewIndicatorOnBlip(blipq, true)
  SetBlipSecondaryColour(blipq, GetHudColour(18))
  

  SetBlipAsShortRange(blip, true);//seta o blip para nao juntar no minimapa
  SetBlipCategory(  blip, 10);
// 1 = No distance shown in legend
// 2 = Distance shown in legend
// 7 = "Other Players" category, also shows distance in legend
// 10 = "Property" category
// 11 = "Owned Property" category
  SetBlipColour(blip, 127);
  SetBlipDisplay(blip, 2);
  // 0,1,7 = Não aparece, nunca, em lugar nenhum
  // 2 = Mostra no mapa principal e no minimapa.Selecionável no mapa
  // 3 = Mostra apenas no mapa principal. (Selecionável no mapa)
  // 4 = Mostra apenas no mapa principal. (Selecionável no mapa)
  // 5 = Mostra apenas no minimapa.
  // 6 = Mostra no mapa principal e no minimapa. (Selecionável no mapa)
  // 8 = Mostra no mapa principal e no minimapa. (Não selecionável no mapa)
  // 9 = Mostra apenas no minimapa.
  // 10 = Mostra no mapa principal e no minimapa. (Não selecionável no mapa)
  //Rockstar parece usar apenas 0, 2, 3, 4, 5 e 8 nos scripts
  SetBlipFade( blip, opacity, duration );
  SetBlipFlashes(blip, true) 
  SetBlipFlashInterval(blip, 50) // flash the blip every 50ms
  SetBlipFlashTimer(blip, 7000)
  SetBlipFlashesAlternate(blip, true) 
  SetBlipNameToPlayerName( blip, player);
  SetBlipRoute(blip, true) 
  SetBlipRouteColour(blip, 127);
  SetBlipScale(blip, 0.9);
  SetBlipSecondaryColour( blip, r, g, b );
  SetBlipShowCone(blip, true)
  SetBlipShrink(blip, true)//setar como pequeno no minimap
  SetBlipSprite(blip, 588)
  SetRadarZoomToBlip(blip, zoom)
  SetPoliceRadarBlips(true)
  SetBlipNameToPlayerName(blip, player)
  SetBlipHiddenOnLegend(blip, true)


  ShowTickOnBlip(blip, true)//marcar o checkmark no blip
  ShowOutlineIndicatorOnBlip(blip, true)//marca linha em volta, usar o secondary color
  ShowNumberOnBlip(blip, numero)//mostra numero no blip
  ShowHeightOnBlip(blip, true)
  ShowHeadingIndicatorOnBlip(blip, true)
  ShowHasCompletedIndicatorOnBlip(blip, true)
  ShowFriendIndicatorOnBlip(blip, true)

  HideNumberOnBlip(blip)
  ClearAllBlipRoutes();
  ClearRaceGalleryBlips();
  DisplayPlayerNameTagsOnBlips(true)//para funcionar setar categoria 7

  const entity_blip = GetBlipFromEntity(entity)
  const ped_blip = GetAiBlip(ped)
  const [x,y,z] = GetBlipCoords(ped_blip)
  const num = GetNumberOfActiveBlips()

  SetPedHasAiBlip(ped, hasCone)//ativa ai no ped, some quando morre ou esta longe
  SetPedHasAiBlipWithColor(ped, hasCone, color)
  SetPedAiBlipForcedOn(blip, true)//true qualquer player, false player em briga
  SetPedAiBlipGangId(  ped, gangId );//blip de gang
  SetPedAiBlipHasCone(blip, true)//ai blip escondido
  SetPedAiBlipNoticeRange(ped, range)//setar ai distancia maxima
  SetPedAiBlipSprite(ped, spritId)


  BeginTextCommandSetBlipName('MYBLIP')
  AddTextComponentSubstringPlayerName('me')
  EndTextCommandSetBlipName(blip)
}




// REMOVE_BLIP
const blip = RemoveBlip();

// adiciona um circulo no mapa
const blip2 = 	AddBlipForRadius(	posX, posY, posZ, radius);

// set um ped ou veiculo, por padrao e inimigo em vermelho
const blip3 = 	AddBlipForEntity(	entity);
SetBlipAsFriendly(blip, true);//setar para ser amigo

ClearAllBlipRoutes(); //limpa as rotas

//retorna blip do player
const blip4 = GetAiBlip(ped);

//adiciona uma galeria de blips
const Any = RaceGalleryAddBlip(	x,y,z);

//Sets the sprite of the next BLIP_GALLERY blip, values used in the native scripts: 143 (ObjectiveBlue), 144 (ObjectiveGreen), 145 (ObjectiveRed), 146 (ObjectiveYellow).
RaceGalleryNextBlipSprite(spriteId);



// const arr = {

//   title = "Copy ME",
//   isEnabled = false,
//   showWaypoints = true,
//   checkpointRadius = 24.0,
//   checkpointTransparency = 1.0,
//   mapBlipId = 315,
//   mapBlipColor = 5,
//   start = { x = -592.65, y = 4459.75, z = 18.64, heading = 23.78, type = 5 },
//   checkpoints = {                                                                                         

//       {x = -590.58, y = 4483.37, z = 25.6, heading = 6.67, type = 5}, 
//       {x = -580.2, y = 4508.14, z = 52.67, heading = 302.16, type = 5},
//       {x = -590.58, y = 4483.37, z = 25.6, heading = 6.67, type = 5}, 
//       {x = -580.2, y = 4508.14, z = 52.67, heading = 302.16, type = 5}, 
//       {x = -563.38, y = 4531.7, z = 77.01, heading = 2.26, type = 9}

//   }

// }