import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("leaf")
    .setDescription("Sends a random image of Leaf"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();
    const imageResponse = await fetch(
      "https://leafapi.starnumber12046.workers.dev/leaf"
    );
    const imageData = Buffer.from(await imageResponse.arrayBuffer());
    console.log(imageData.length);
    await interaction.followUp({ files: [imageData] });
  },
};
