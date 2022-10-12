// Modules needed: Sequencer and JB2A, you can replace this variable with the location of other assets
let bullet = "jb2a.bullet.Snipe.orange";

const target = game.user.targets.first();

new Sequence()
  .effect()
    .file(bullet)
    .attachTo(token)
    .stretchTo(target, {attachTo: true})
  .play()

const html = `<p style="background-color:#feae00; font-family:Capitals; color:white; text-align:center">GO BEYOND GUN<p>
<img src="icons/magic/light/beams-rays-orange-purple.webp" style="max-width:40%">
<p style="font-family:capitals; text-align:center;">Go Beyond Gun Roll<br>[[1d6]]</p>`

const chat_data = {
          user: game.user,
          speaker: ChatMessage.getSpeaker({actor}),
          content: html
        }
const cm = ChatMessage.create(chat_data);
