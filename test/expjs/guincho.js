//======================================================================================

SetVehicleTowTruckArmPosition( vehicle, position);//Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
AttachVehicleToTowTruck( towTruck, vehicle, rearboolean, hookOffsetX, hookOffsetY, hookOffsetZ); //HookOffset defines where the hook is attached. leave at 0 for default attachment.
DetachVehicleFromTowTruck( towTruck, vehicle);

const numero1 = DetachVehicleFromAnyTowTruck(vehicle);
const Entity = GetEntityAttachedToTowTruck(towTruck );

const simnao = IsVehicleAttachedToTowTruck(	towTruck, vehicle);
    