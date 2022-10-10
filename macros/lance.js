var ray = "jb2a.scorching_ray.01.blue";

let position = await warpgate.crosshairs.show({
    size: 1,
    tag: randomID(),
    label: "Max Length",
    drawOutline: true,
    drawIcon: false
}
)

new Sequence()
    .effect()
        .file(ray)
        .attachTo(token)
        .stretchTo(position)
.play();
