let Jugador_principal = sprites.create(img`
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 1 1 1 5 5 5 5 1 1 1 5 5 . 
    . 5 5 1 1 1 5 5 5 5 1 1 1 5 5 . 
    . 5 5 f 1 1 5 5 5 5 f 1 1 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 2 2 2 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e . . . e e e e e . 
    . e e e e e e . . . e e e e e . 
    . . . 5 5 5 . . . . . 5 5 5 . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
Jugador_principal.setPosition(80, 60)
controller.moveSprite(Jugador_principal)
Jugador_principal.setStayInScreen(true)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Jugador_principal)
Jugador_principal.startEffect(effects.fountain)
