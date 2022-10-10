// Modules needed: Sequencer and JB2A, you can replace these 3 variables with the location of other assets
var circle = "jb2a.bless.200px.intro.yellow";
var lightning = "jb2a.chain_lightning.primary.yellow";
var chain = "media/Tokens/ICON/FFXIV%20Battle%20Markers/Chain-Tether.webm" // This chain is from https://www.buymeacoffee.com/Denmo/e/46452

await Sequencer.Preloader.preloadForClients([
    circle, lightning, chain
])


const target = game.user.targets.first();

new Sequence()
    .effect()
        .file(circle)
        .atLocation(token)
        .belowTokens()
        .wait(600)
    .effect()
        .file(lightning)
        .from(token)
        .stretchTo(target, {randomOffset: .1})
        .wait(600)
    .effect()
        .file(chain)
        .attachTo(token, {followRotation: false)
        .stretchTo(target, {attachTo: true, randomOffset: .2})
        .persist(true)
.play()
