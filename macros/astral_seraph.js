// For this I have an Astral Seraph actor, the timings are set for the animationos I used but the concept is the same

let position = await warpgate.crosshairs.show({
    size: 1,
    tag: randomID(),
    label: "Origin",
    drawOutline: true,
    drawIcon: false
})

const updates = {
    token: {name: "Astral Seraph"},
    actor: {name: "Astral Seraph"}
}

new Sequence()
    .effect()
        .file("jb2a.divine_smite.target.yellowwhite")
        .atLocation(position)
        .scale(.5)    
.play();

await warpgate.wait(600)
warpgate.spawnAt(position, "Astral Seraph", updates)
