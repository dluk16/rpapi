// emit("eventName1", eventParam1, eventParam2);
// on('eventName1', (eventParam1, eventParam2) => {
//     // Code that gets executed once the event is triggered goes here.
//     console.log(`Event triggered with params: ${eventParam1}, ${eventParam2}`);
// });

// // JS
// SendNuiMessage(JSON.stringify({
//     type: 'open'
// }))


// JS
RegisterNuiCallbackType('getItemInfo') // register the type

// register a magic event name
on('__cfx_nui:getItemInfo', (data, cb) => {
    const itemId = data.itemId;

    if (!itemCache[itemId]) {
        cb({ error: 'No such item!' });
        return;
    }

    cb(itemCache[itemId]);
});