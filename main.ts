controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Yuha,
    assets.animation`Yuha 2`,
    100,
    true
    )
    controller.moveSprite(Yuha, 100, 100)
})
let Yuha: Sprite = null
scene.setBackgroundColor(3)
scene.setBackgroundImage(assets.image`backround`)
let Ana = sprites.create(assets.image`Ana`, SpriteKind.Player)
Yuha = sprites.create(assets.image`yuha`, SpriteKind.Player)
let Ian = sprites.create(assets.image`ian`, SpriteKind.Player)
let Stella = sprites.create(assets.image`stella`, SpriteKind.Player)
let Juna = sprites.create(assets.image`juna`, SpriteKind.Player)
let Yeon = sprites.create(assets.image`yeon`, SpriteKind.Player)
let Carmen = sprites.create(assets.image`Carmen`, SpriteKind.Player)
let Jiwoo = sprites.create(assets.image`Jiwoo`, SpriteKind.Player)
music.play(music.createSong(assets.song`intro`), music.PlaybackMode.UntilDone)
