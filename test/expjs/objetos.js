setTick( () => {
    procurar_objetos()   
  });
  
  var contador = 0;
  var validador = false;
  
  //===[ OBJETOS ]=============================================================================
  
  function procurar_objetos(){
  
      if(validador){
    
          var encontrado = true;
          var [ handle, entity ] = FindFirstObject();
    
          while(encontrado){
    
             let [ simounao, entity ] = FindNextObject(handle);
             encontrado = simounao;
    
             let [x, y, z] = GetEntityCoords(entity, true);                 
             let [px, py, pz] = GetEntityCoords(PlayerPedId(), true);
             let distancia = 	GetDistanceBetweenCoords(px, py, pz, x, y, z, false)
             
    
             if(distancia < 5){
               mostrar(x,y,z, GetEntityModel(entity));          
              //console.log("Handle:"+GetEntityModel(entity)+" x:"+x+" y:"+y+" z:"+z)
               encontrado = false;
             }           
          }
          EndFindObject(handle);
      }
  }
  
  
  //===[ PEDS ]=============================================================================
  
  function procurar_peds(){
      if(validador){
    
          var encontrado = true;
          var [ handle, entity ] = FindFirstPed();
    
          while(encontrado){
    
             let [ simounao, entity ] = FindNextPed(handle);
             encontrado = simounao;
    
             let [x, y, z] = GetEntityCoords(entity, true);                 
             let [px, py, pz] = GetEntityCoords(PlayerPedId(), true);
             let distancia = 	GetDistanceBetweenCoords(px, py, pz, x, y, z, false)
             
    
             if(distancia < 5){
               mostrar(x,y,z, GetEntityModel(entity));          
               //console.log("Handle:"+GetEntityModel(entity)+" x:"+x+" y:"+y+" z:"+z)
               encontrado = false;
             }           
          }
          EndFindPed(handle);
      }
    }
  //==================================================
  
  function procurar_veiculos(){
      if(validador){
    
          var encontrado = true;
          var [ handle, entity ] = FindFirstVehicle();
    
          while(encontrado){
    
             let [ simounao, entity ] = FindNextVehicle(handle);
             encontrado = simounao;
    
             let [x, y, z] = GetEntityCoords(entity, true);                 
             let [px, py, pz] = GetEntityCoords(PlayerPedId(), true);
             let distancia = 	GetDistanceBetweenCoords(px, py, pz, x, y, z, false)
             
    
             if(distancia < 5){
               mostrar(x,y,z, GetEntityModel(entity));          
               //console.log("Handle:"+GetEntityModel(entity)+" x:"+x+" y:"+y+" z:"+z)
               encontrado = false;
             }           
          }
          EndFindVehicle(handle);
      }
    }
  
  //==================================================
  
  function mostrar(x, y, z, texto) {   
      let [painel, x1, y1] = GetScreenCoordFromWorldCoord(x, y, z);
      if (painel) {
          SetTextScale(0.5, 0.5);
          SetTextFont(0);
          SetTextProportional(true);
          SetTextColour(255, 255, 255, 255);
          SetTextDropshadow(0, 0, 0, 0, 255);
          SetTextEdge(2, 0, 0, 0, 150);
          SetTextDropShadow();
          SetTextOutline();
          SetTextEntry("STRING");
          SetTextCentre(true);
          AddTextComponentString(texto+" x:"+x+" y: "+y+" z: "+z);
          DrawText(x1, y1);
      }
  }


  