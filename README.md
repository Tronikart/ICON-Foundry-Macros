# ICON Foundry Macros



## Requirements
* [Sequencer](https://foundryvtt.com/packages/sequencer)
* [JB2A](https://jb2a.com/) (I'm using their Patreon version but I'm sure there are some alternatives on the free version)


## Sequencer Macros

These are macros, you just have to make sure the macro is marked as "script" instead of "chat"

### sanctify.js
https://user-images.githubusercontent.com/14989643/194947538-88815fdb-d0b9-4e53-8775-22794adbc022.mp4


### hatred of x.js
https://user-images.githubusercontent.com/14989643/194947588-ea58037c-bb6b-4ede-bf48-f930080a1537.mp4


### astral chain.js
https://user-images.githubusercontent.com/14989643/194947596-984f44ee-a8b6-45a0-b31b-24d8345cc652.mp4

## Send to chat

This can be useful to pair with the sequencer macros, making a full on ability that can be used, info will be sent to chat and then the animations will play out


```js
const html = `<your HTML here!>`;
const data = {
          user: game.user,
          speaker: ChatMessage.getSpeaker({actor}),
          content: html
        }
const message = ChatMessage.create(data);
```

