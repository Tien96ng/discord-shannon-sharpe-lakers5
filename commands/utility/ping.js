const { SlashCommandBuilder } = require('discord.js');
const quoteArr = require("../../data/quoteArr");
const uncGifArr = require("../../data/uncGifArr")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lakers')
		.setDescription('Replies with random Lakers in 5 Joke rhyming scheme with a random gif of unc Shannon Sharpe.'),
	async execute(interaction) {
		// await interaction.reply(randomQuote());
        await interaction.reply({
            content: randomQuote(),
            files: [randomGif()] // Direct image URL
        });
	},
};

const rndNum = (arr) => Math.floor(Math.random() * arr.length);

const randomQuote = () => quoteArr[rndNum(quoteArr)].join(", ").concat(" ... \nLAKERS IN 5!");
const randomGif = () => uncGifArr[rndNum(uncGifArr)].concat(".gif");