// Modules needed: Sequencer and JB2A, you can replace these 3 variables with the location of other assets, some refining may
// be needed, play around with scales

var circle = "jb2a.detect_magic.circle.green";
var runes = "jb2a.template_square.symbol.normal.runes.green02";
var square = "media/50p-white.png"; // this is just a 50x50 px white square that has been on my foundry since forever, will include on the images folder here

let position = await warpgate.crosshairs.show({
    size: 1,
    tag: randomID(),
    label: "Origin",
    drawOutline: true,
    drawIcon: false
    }
)

new Sequence()
    .effect()
        .file(circle)
        .atLocation(position)
        .scale(.25)
        .wait(2000)
    .effect()
        .file(runes)
        .atLocation(position )
        .fadeIn(1500)
        .scale(.5)
        .opacity(.5)
        .persist()
    .effect()
        .file(square)
        .atLocation(position)
        .fadeIn(1500)
        .scale(6)
        .opacity(.5)
        .tint("#61d836")
        .belowTokens()
        .persist()
.play();
