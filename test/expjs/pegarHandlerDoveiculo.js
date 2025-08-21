
const handler_veiculo = GetVehiclePedIsIn(PlayerPedId());
const handler_player_no_veiculo_acento_0 = GetPedInVehicleSeat(GetVehiclePedIsIn(PlayerPedId()), -1)
const motorista_handler = GetPedInVehicleSeat(GetVehiclePedIsIn(PlayerPedId()), -1) == PlayerPedId();
const numero_de_acentos = GetVehicleMaxNumberOfPassengers(GetVehiclePedIsIn(PlayerPedId()))
   

const eSeatPosition =
{
    SF_FrontDriverSide : -1,
    SF_FrontPassengerSide :  0,
    SF_BackDriverSide :  1,
    SF_BackPassengerSide :  2,
    SF_AltFrontDriverSide :  3,
    SF_AltFrontPassengerSide :  4,
    SF_AltBackDriverSide :  5,
    SF_AltBackPassengerSide :  6
};

const rpm = GetVehicleCurrentRpm(vehicle);

// GET_VEHICLE_DOOR_STATUS
const retval: number = 
	GetVehicleDoorStatus(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleDoorsLockedForPlayer(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleEngineHealth(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleEngineTemperature(
		vehicle: Vehicle
	);
    const [pearlescentColor, wheelColor]: [number, number] = 
	GetVehicleExtraColours(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleFuelLevel(
		vehicle: Vehicle
	);
    const retval: boolean = 
	GetVehicleHandbrake(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleIndicatorLights(
		vehicle: Vehicle
	);
    Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both

    const color: number = 
	GetVehicleInteriorColour(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleLivery(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleNumberOfWheels(
		vehicle: Vehicle
	);

    const retval: number = 
	GetVehicleOilLevel(
		vehicle: Vehicle
	);
    const retval: Vehicle = 
	GetVehiclePedIsIn(
		ped: Ped, 
		lastVehicle: boolean
	);

const retval: number = 
	GetVehiclePetrolTankHealth(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleRoofLivery(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleTurboPressure(
		vehicle: Vehicle
	);

    const retval: string = 
	GetVehicleType(
		vehicle: Vehicle
	);

    Vehicle types
    automobile
    bike
    boat
    heli
    plane
    submarine
    trailer
    train
    const [r, g, b]: [number, number, number] = 
	GetVehicleTyreSmokeColor(
		vehicle: Vehicle
	);
    const retval: number = 
	GetVehicleWheelHealth(
		vehicle: Vehicle, 
		wheelIndex: number
	);

    const retval: number = 
	GetVehicleWheelType(
		vehicle: Vehicle
	);
    const retval: Vehicle = 
	GetVehiclePedIsUsing(
		ped: Ped
	);
    SetVehicleNitroEnabled(
        vehicle: Vehicle, 
        toggle: boolean
    );
    SetVehicleAlarm(
        vehicle: Vehicle, 
        state: boolean
    );
    SetVehicleAlarmTimeLeft(
        vehicle: Vehicle, 
        time: number
    );
    SetVehicleAutoRepairDisabled(
        vehicle: Vehicle, 
        value: boolean
    );
    SetVehicleCurrentRpm(
        vehicle: Vehicle, 
        rpm: number
    );
    SetVehicleDirtLevel(
        vehicle: Vehicle, 
        dirtLevel: number
    );

    SetVehicleDoorBroken(
        vehicle: Vehicle, 
        doorIndex: number, 
        deleteDoor: boolean
    );
    enum eDoorId
    {
        VEH_EXT_DOOR_DSIDE_F = 0,
        VEH_EXT_DOOR_DSIDE_R = 1,
        VEH_EXT_DOOR_PSIDE_F = 2,
        VEH_EXT_DOOR_PSIDE_R = 3,
        VEH_EXT_BONNET = 4,
        VEH_EXT_BOOT = 5,
        // 0x872E72B8 = 0xFFFFFFFF,
    }
    local Vehicle = GetVehiclePedIsUsing(PlayerPedId())
for i = 0, 5 do
  SetVehicleDoorShut(Vehicle, i, false) -- will close all doors from 0-5
end

SetVehicleDoorsLocked(
	vehicle: Vehicle, 
	doorLockStatus: number
);
// Source GTA VC miss2 leak, matching constants for 0/2/4, testing
// They use 10 in am_mp_property_int, don't know what it does atm.
enum eCarLock {
    CARLOCK_NONE = 0,
    CARLOCK_UNLOCKED = 1,
    CARLOCK_LOCKED = 2,
    CARLOCK_LOCKOUT_PLAYER_ONLY = 3,
    CARLOCK_LOCKED_PLAYER_INSIDE = 4,
    CARLOCK_LOCKED_INITIALLY = 5,
    CARLOCK_FORCE_SHUT_DOORS = 6,
    CARLOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7
};
SetVehicleDoorsLockedForAllPlayers(
	vehicle: Vehicle, 
	toggle: boolean
);
SetVehicleDoorsLockedForPlayer(
	vehicle: Vehicle, 
	player: Player, 
	toggle: boolean
);

SetVehicleDoorsShut(
	vehicle: Vehicle, 
	closeInstantly: boolean
);
SetVehicleDoorsLockedForTeam(
	vehicle: Vehicle, 
	team: number, 
	toggle: boolean
);
SetVehicleDropsMoneyWhenBlownUp(
	vehicle: Vehicle, 
	toggle: boolean
);
Money pickups are created around cars when they explode. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seem to give the same amount of money.
youtu.be/3arlUxzHl5Y
i.imgur.com/WrNpYFs.jpg

SetVehicleEngineHealth(
	vehicle: Vehicle, 
	health: number
);
1000 is max health
Begins leaking gas at around 650 health
-999.90002441406 appears to be minimum health, although nothing special occurs <- false statement
-------------------------
Minimum: -4000
Maximum: 1000
-4000: Engine is destroyed
0 and below: Engine catches fire and health rapidly declines
300: Engine is smoking and losing functionality
1000: Engine is perfect

SetVehicleEngineOn(
	vehicle: Vehicle, 
	value: boolean, 
	instantly: boolean, 
	disableAutoStart: boolean
);
vehicle: The vehicle to start or stop the engine on.
value: true to turn the vehicle on; false to turn it off.
instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
disableAutoStart: If true, the system will prevent the engine from starting when the player got into it.
Starts or stops the engine on the specified vehicle. From what I've tested when I do this to a helicopter the propellers turn off after the engine has started.


SetVehicleFixed(
	vehicle: Vehicle
);
Parameters:
vehicle: The vehicle that will be fixed
Fix a given vehicle. If the vehicle's engine's broken then you cannot fix it with this native.
local localPlayerPed = GetPlayerPed(-1)
local localVehicle = GetVehiclePedIsIn(localPlayerPed, false)
SetVehicleFixed(localVehicle)


SetVehicleInactiveDuringPlayback(
	vehicle: Vehicle, 
	toggle: boolean
);
SetVehicleIndicatorLights(
	vehicle: Vehicle, 
	turnSignal: number, 
	toggle: boolean
);
Sets the turn signal enabled for a vehicle.  
Set turnSignal to 1 for left light, 0 for right light. 

SetVehicleIndividualDoorsLocked(
	vehicle: Vehicle, 
	doorIndex: number, 
	doorLockStatus: number
);
SetVehicleInteriorlight(
	vehicle: Vehicle, 
	toggle: boolean
);
SetVehicleLights(
	vehicle: Vehicle, 
	state: number
);
set's if the vehicle has lights or not.  
not an on off toggle.  
p1 = 0 ;vehicle normal lights, off then lowbeams, then highbeams  
p1 = 1 ;vehicle doesn't have lights, always off  
p1 = 2 ;vehicle has always on lights  
p1 = 3 ;or even larger like 4,5,... normal lights like =1  
note1: when using =2 on day it's lowbeam,highbeam  
but at night it's lowbeam,lowbeam,highbeam  
note2: when using =0 it's affected by day or night for highbeams don't exist in daytime.


SetVehicleNitroEnabled(
	vehicle: Vehicle, 
	toggle: boolean
);
NativeDB Introduced: v1604
NativeDB Added Parameter 2 (2060): float level
NativeDB Added Parameter 3 (2060): float power
NativeDB Added Parameter 4 (2060): float rechargeTime
NativeDB Added Parameter 5 (2060): BOOL disableSound

SetVehicleXenonLightsColor(
	vehicle: Vehicle, 
	color: number
);
local veh = GetVehiclePedIsUsing(PlayerPedId())
ToggleVehicleMod(veh, 22, true) -- toggle xenon
SetVehicleHeadlightsColour(veh, 2)

enum headlightColors {
    Default = -1,
    White = 0,
    Blue = 1,
    Electric_Blue = 2,
    Mint_Green = 3,
    Lime_Green = 4,
    Yellow = 5,
    Golden_Shower = 6,
    Orange = 7,
    Red = 8,
    Pony_Pink = 9,
    Hot_Pink = 10,
    Purple = 11,
    Blacklight = 12
}


SetVehicleTimedExplosion(
	vehicle: Vehicle, 
	ped: Ped, 
	toggle: boolean
);

SetVehicleTyreFixed(
	vehicle: Vehicle, 
	tyreIndex: number
);
tyreIndex = 0 to 4 on normal vehicles  
'0 = wheel_lf / bike, plane or jet front  
'1 = wheel_rf  
'2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left  
'3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right  
'4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left  
'5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right  
'45 = 6 wheels trailer mid wheel left  
'47 = 6 wheels trailer mid wheel right  
