// Modules needed: Sequencer and JB2A, you can replace these 6 variables with the location of other assets
// This one has a lot going on, try it before using it on a session
const target = game.user.targets.first();
let blows1 = "jb2a.flurry_of_blows.magical.01.green";
let blows2 = "jb2a.flurry_of_blows.magical.02.green";
let blows3 = "jb2a.flurry_of_blows.physical.green";
let singleBlow = "jb2a.unarmed_strike.magical.01.green";
let fire = "jb2a.template_circle.out_pulse.02.loop.greenorange";
let circle = "jb2a.magic_signs.circle.02.conjuration.intro.green";
let delay = 100;

await Sequencer.Preloader.preloadForClients([
    blows1, blows2, blows3, singleBlow, fire, circle
]);

new Sequence()
    .sound()
        .file("Sound%20effects/FFXIV/FFXIV%20Limit%20Break%20activation.ogg") // I shared this on the discord!
    .effect()
        .file(circle)
        .attachTo(target)
        .scale(0.25)
        .belowTokens()
        .playbackRate(1.5)
    .effect()
        .file(fire)
        .attachTo(token)
        .fadeOut(500, {delay: -200})
        .scale(0.5)
        .wait(1500)
    .effect()
        .file(blows1)
        .attachTo(target, {offset:{x:-50, y:0}})
        .scale(0.5)
        .opacity(0.75)
        .belowTokens()
        .wait(delay)
    .effect()
        .file(blows2)
        .rotate(45)
        .attachTo(target, {offset:{x:-50, y:50}})
        .scale(0.5)
        .opacity(0.75)
    .effect()
        .file(blows2)
        .rotate(-45)
        .belowTokens()
        .attachTo(target, {offset:{x:-50, y:-50}})
        .scale(0.5)
        .opacity(0.75)
        .wait(delay)
    .effect() // single
        .file(singleBlow)
        .randomizeMirrorY()
        .attachTo(target, {offset:{x:-50, y:0}})
        .scale(0.5)
        .opacity(0.75)
        .belowTokens()
        .wait(delay)
    .effect()
        .file(blows3)
        .rotate(-90)
        .attachTo(target, {offset:{x:0, y:-50}})
        .scale(0.5)
        .opacity(0.75)
    .effect()
        .file(blows3)
        .rotate(90)
        .attachTo(target, {offset:{x:0, y:50}})
        .scale(.5)
        .opacity(.75)
        .belowTokens()
        .wait(delay)
    .effect() // single
        .file(singleBlow)
        .randomizeMirrorY()
        .rotate(-45)
        .belowTokens()
        .attachTo(target, {offset:{x:-50, y:-50}})
        .scale(0.5)
        .opacity(0.75)
    .effect()
        .file(blows2)
        .rotate(135)
        .attachTo(target, {offset:{x:50, y:50}})
        .scale(0.5)
        .opacity(0.75)
    .effect()
        .file(blows2)
        .rotate(-135)
        .attachTo(target, {offset:{x:50, y:-50}})
        .scale(0.5)
        .opacity(0.75)
        .belowTokens()
        .wait(delay)
    .effect() // single
        .file(singleBlow)
        .rotate(90)
        .randomizeMirrorY()
        .attachTo(target, {offset:{x:0, y:50}})
        .scale(0.5)
        .opacity(0.75)
        .belowTokens()
        .wait(delay)
    .effect()
        .file(blows1)
        .rotate(180)
        .opacity(.75)
        .attachTo(target, {offset:{x:50, y:0}})
        .scale(.5)
        .wait(250)
    .effect() // single
        .file(singleBlow)
        .mirrorY()
        .attachTo(token)
        .stretchTo(target)
        .scale(.5)
        .opacity(.75)
        .wait(250)
    .effect() // single
        .file(singleBlow)
        .attachTo(token)
        .stretchTo(target)
        .scale(.5)
        .opacity(.75)
        .belowTokens()
.play()


// Base HTML from the FVTT Macros for Icon doc on the discord
const html = `<p style="background-color:#61d836; font-family:Capitals; color:white; text-align:center">LIMIT BREAK: PASSAGE TO THE AFTERLIFE<p>5 resolve
<br>Heavy Melee Attack
<br><span style="background:#88fa4e;color:white">Divine</span>, +1 boon
<br><br>
<i>You unleash the supreme Sealer war art, inflicting ten thousand blows and shattering the connections of your foe’s vital energy to their body, hurrying on the transmigration of immortal souls.</i>
<br><br>
<img src="icons/magic/light/explosion-beam-impact-silhouette.webp" style="max-width:40%">
<br><br>
<b>Attack:</b> <i>On hit:</i> <span style="color:red;">[D]+fray</span>, three times. <i>Miss:</i> Twice.
<br><b>Critical Hit:</b> Deal <span style="color:red;">[D]+fray</span> two more times
<br><br>
<b>Effect:</b> You may teleport adjacent to the target before the attack if they’re in range 3. Every allied character in range 3 of the target can also teleport adjacent to your target. Your target then takes additional divine fray damage from each adjacent ally once.
<br><br>
<p style="font-family:capitals; text-align:center;">Attack Roll</p>[[1d20]] +/- [[1d6]][[1d6]][[1d6]]`

const chat_data = {
          user: game.user,
          speaker: ChatMessage.getSpeaker({actor}),
          content: html
        }
const cm = ChatMessage.create(chat_data);
