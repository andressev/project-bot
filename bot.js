import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with your client's token
client.login(process.env.TOKEN);

function readyDiscord() {
  console.log("MOTHER FUCK");
}

import * as choochoo from "./commands/choochoo.js";

client.on(Events.InteractionCreate, handleInteraction);

async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "choochoo") {
    await choochoo.execute(interaction);
  }
}
