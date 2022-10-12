// This is a bit more "complex", you need the token to be selected and then target every single, well, target
// Does a lot of stuff, feel free to strip away what you don't like

// Modules needed: Sequencer and JB2A, you can replace these 5 variables with the location of other assets

var limit_break_sound = "Sound%20effects/FFXIV%20Limit%20Break%20activation.ogg";
var token_effect = "jb2a.divine_smite.caster.reversed.yellowwhite";
var objective_marker = "jb2a.dancing_light.yellow";
var bullet_effect = "jb2a.bullet.Snipe.orange";
var electricity = "jb2a.static_electricity.02.yellow";

await Sequencer.Preloader.preloadForClients([
    limit_break_sound, token_effect, objective_marker, bullet_effect, electricity
]);


let targets = Array.from(game.user.targets);
// remove the two slashes on the line bellow if you want to randomize the order of the targets, if not, it'll go through them as you selected them
// let targets = targets.sort((a, b) => 0.5 - Math.random());
let sequence = new Sequence(); 

sequence.effect().file(token_effect)
    .atLocation(token)

for(let target of targets){
    sequence
    .effect()
        .file(objective_marker)
        .atLocation(target)
        .scaleToObject(.5)
        .randomRotation() 
        .fadeOut(0, {delay: -2400})
        .wait(100)
}

sequence.sound()
    .file(limit_break_sound).wait(900)


for(let target of targets){
    sequence.effect()
        .file(bullet_effect)
        .atLocation(token) 
        .stretchTo(target) 
    .effect()
        .file(electricity)
        .atLocation(target)
        .scaleToObject(1.5)
        .randomRotation() 
}

sequence.play()
