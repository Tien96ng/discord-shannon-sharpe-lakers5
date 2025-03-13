const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lakers')
		.setDescription('Replies with random Lakers in 5 Joke'),
	async execute(interaction) {
		await interaction.reply(randomQuote());
	},
};

let quoteArr = [
    "serge ibaka, chewbacca, waka flocka",
    "Jayson Tatum, Jason Statham, Jason Bateman",
    "OKC, UFC, KFC",
    "Jayson Tatum, Channing Tatum, Andrew Tate",
    "Stephen Curry, Tempero Cury, Mc Flury",
    "Celtics, Jellyfish, Hurricane Chris",
    "Let it shine, Porcupine, Lemon Lime",
    "Steph Threes, Embiids Kness, Austin Reaves",
    "SGA, PGA, USA",
    "Jimmy Tran, Matthew Tran, Tranny Trans"
]

const randomQuote = () => quoteArr[Math.floor(Math.random() * quoteArr.length)].concat(" ... LAKERS IN 5!");