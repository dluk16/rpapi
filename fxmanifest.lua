fx_version 'cerulean'
game 'gta5'

author 'Your Name'
description 'RP API Resource'
version '1.0.0'

-- Server scripts
server_scripts {
    'server/login.js',
    'server/logout.js',
    'server/server.js',
    'server/steste.js',
}

-- Client scripts
client_scripts {
    'client/inicio.js',
    'client/client.js',   
    'client/cteste.js',
}



-- specify the root page, relative to the resource
ui_page 'ui/hud.html'

-- every client-side file still needs to be added to the resource packfile!
files {
    'ui/hud.html',
    'ui/js/hud.js',
    'ui/css/app.css',
}