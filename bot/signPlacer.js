/*
 * Never spend hours mining from ground to bedrock again!
 *
 * Learn how to create a simple bot that is capable of digging the block
 * below his feet and then going back up by creating a dirt column to the top.
 *
 * As always, you can send the bot commands using chat messages, and monitor
 * his inventory at any time.
 *
 * Remember that in survival mode he might not have enough dirt to get back up,
 * so be sure to teach him a few more tricks before leaving him alone at night.
 */
const mineflayer = require("mineflayer");
const vec3 = require("vec3");
const Item = require("prismarine-item")("1.8");

let bot = mineflayer.createBot({
  host: "opwatch.smither.org",
  port: "25575",
  username: "signBot",
  version: "1.12.2",
  verbose: true
});

bot.on("chat", (username, message) => {
  if (username === bot.username) return;
  switch (message) {
    case "placeSign":
      placeSign();
      break;
  }
});

function placeSign() {
  const referenceBlock = bot.blockAt(bot.entity.position.offset(0, 0, 0));
  //   if (referenceBlock) {
  bot.chat("Block at position");
  bot.dig(referenceBlock, err => {
    if (err) {
      bot.chat(err.message);
      return;
    }
    bot.chat("Destroyed Block");
    const signItem = new Item(0x40, 1);
    bot.chat("setting inv slot");
    bot.creative.setInventorySlot(5, signItem);
    bot.chat("equipping sign");
    bot.equip(signItem, "hand", err => {
      console.log(err);
      bot.placeBlock(referenceBlock, vec3(1, 0, 0), err => {
        bot.updateSign(referenceBlock, "SIGN\nTEST SIGN\n\n");
        if (err) {
          bot.chat(err.message);
          return;
        }
        bot.chat("Placing a sign was successful");
      });
    });
  });
  //   }
}

bot.on("login", () => {
  setTimeout(() => {
    bot.isAlive = true;
    bot.emit("spawn");
  }, 1000);
});

bot.on("spawn", () => {
  console.log("placing sign");
  console.log(bot.game.gameMode);
  placeSign();
  console.log("sign placed");
});

console.log("END");
