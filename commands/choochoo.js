import { SlashCommandBuilder } from "discord.js";

// Command Builder export
export const data = new SlashCommandBuilder()
  .setName("choochoo")
  .setDescription("Replies choo choo!");

// Execute function export
export async function execute(interaction) {
  await interaction.reply("C'mon maan");
}
