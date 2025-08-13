emit("eventName1", eventParam1, eventParam2);
on('eventName1', (eventParam1, eventParam2) => {
    // Code that gets executed once the event is triggered goes here.
    console.log(`Event triggered with params: ${eventParam1}, ${eventParam2}`);
});


