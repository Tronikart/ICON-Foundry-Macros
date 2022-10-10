// Modules needed: Sequencer and JB2A, you can replace these 4 variables with the location of other assets, some refining may
// be needed, play around with offsets and delays on the fade out

var particles = "jb2a.particles.outward.red.01.03";
var red_eyes = "jb2a.eyes.01.dark_red.single.0";
var chains = "jb2a.markers.chain.square.complete.02.red";
var strands = "jb2a.energy_strands.range.standard.dark_red.03";

const target = game.user.targets.first();

new Sequence()
    .effect()
        .file(particles)
        .attachTo(target, {offset:{x:0,y:0}})
        .scale(.25)
        .persist()
    .effect()
        .file(red_eyes)
        .attachTo(target, {offset:{x:0,y:0}})
        .scale(.25)
    .effect()
        .file(chains)
        .attachTo(target)
        .scale(.25)
        .fadeOut(2000, {delay: -5000})
        .wait(1500)
    .effect()
        .file(strands)
        .attachTo(target)
        .opacity(.5)
        .belowTokens()
        .stretchTo(token, { attachTo: true })
        .persist()
    .play()
