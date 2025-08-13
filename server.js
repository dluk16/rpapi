emitNet("eventName2", eventParam1, eventParam2);
onNet('eventName2', (eventParam1, eventParam2) => {
    // Code here will be executed once the event is triggered.
    console.log(`Event triggered with params: ${eventParam1}, ${eventParam2}`);
})

emitNet("eventName3", -1, "eventParam1", "eventParam2");