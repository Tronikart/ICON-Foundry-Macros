// Modules needed: Sequencer and JB2A, you can replace these 2 variables with the location of other assets
var token_effect = "jb2a.divine_smite.caster.reversed.yellowwhite";
var glints = "jb2a.glint.yellow.few.3";

new Sequence()
  .sound()
    .file("/Sound%20effects/FFXIV%20Limit%20Break%20activation.ogg") // I shared this on the discord!
  .effect()
    .file(token_effect)
    .atLocation(token)
  .effect()
    .file(glints)
    .atLocation(token)
    .scale(.75)
    .persist()
    .name("LM: AETHER OVERDRIVE")
  .play()

// HTML from the FVTT Macros for Icon doc on the discord
const html = `<p style="background-color:#feae00; font-family:Capitals; color:white; text-align:center">LIMIT BREAK: AETHER OVERDRIVE<p>2 actions
<br>4 resolve
<br><span style="color:white;background:gold">Divine</span>
<br><br>
<i>Become one with your weapon. Smite your foes with high caliber justice.</i>
<br><br>
<img src="icons/magic/light/beam-strike-orange.webp" style="max-width:40%">
<br><br>
Empty your weapon to deal 2 divine damage to each foe in line of sight, then <b>Go Beyond Gun.</b>
<br><br>
When you <b>Go Beyond Gun</b>, you draw on raw Aether to pull bullets from nothingness. You can fire an extra shell at any foe, dealing 2 Divine damage. This can be the same or a different foe. You can then choose to keep firing shells at the same or different foe, one at a time. Each time you fire a shell, the damage of the next shell increases by 2 (so 2, 4, 6, etc)
<br><br>
Before you fire each shell past the first, roll a d6. On a 2+, you can fire normally, on a 1, your gun jams and overheats. This ability continues until you overheat or have fired 6 shells. If your gun overheats, your turn ends, and you cannot attack until the end of your next turn.`

const chat_data = {
          user: game.user,
          speaker: ChatMessage.getSpeaker({actor}),
          content: html
        }
const cm = ChatMessage.create(chat_data);
