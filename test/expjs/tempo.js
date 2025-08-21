


Delay = (ms) => new Promise(res => setTimeout(res, ms));
contador = 0;



 setTick(()=>{

   
    while(contador < 500){

        let gametime = GetGameTimer();//tempo de jogo em milisegundos
        let gametimenet = GetNetworkTime();
        let mlg = GetMillisecondsPerGameMinute();

        let minuto2 = ( gametime / mlg);
        console.log("Minutos2: "+minuto2)

        
        const [ ano, mes, dia, horas, minutos, segundos] = GetLocalTime();

        var hora = GetClockHours()
        var minuto = GetClockMinutes()
        var segundo = GetClockSeconds()

        console.log( "Local Data: "+dia+"/"+mes+"/"+ano);
        console.log( "Local Horas:"+horas+" Minutos:"+minutos+" Segundos:"+segundos );

        //Delay(60000);
        console.log( "Game Horas:"+horas+" Minutos:"+minuto+" Segundos:"+segundo);
      

       // let frametime = GetFrameTime()

        console.log( gametimenet);
        // console.log( mlg );
        

        contador = contador +1;
    }

 });