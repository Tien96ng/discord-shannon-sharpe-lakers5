const quoteArr = [
    ["Matthew Tran", "Broke the fan", "Flew to Japan"],
    ["Krystalina Truong", "Sang a song", "Danced all night long"],
    ["Long Le", "Spilled his tea", "Jumped with glee"],
    ["Tracie Huynh", "Broke her spine", "Drank expired wine"],
    ["Bright light", "Midnight", "Sky height"],
    ["Fast car", "Gold star", "Guitar"],
    ["Blue sea", "Tall tree", "Let it be"],
    ["Cold night", "Shining white", "Full sight"],
    ["Deep cave", "Ocean wave", "Brave save"],
    ["Big Ben", "Call my friend", "Don't pretend"],
    ["Tom Cruise", "Bad news", "Dancing shoes"],
    ["Grand Canyon", "Pet companion", "Sleepy stallion"],
    ["Eiffel Tower", "Sour power", "Bubble shower"],
    ["Elon Musk", "Rocket thrust", "Covered in dust"],
    ["The Rock", "Lost his sock", "Punching a clock"],
    ["Mount Rushmore", "Taco store", "Dinosaur roar"],
    ["Mona Lisa", "Cheesy pizza", "Trapped in Ibiza"],
    ["Kanye West", "Failed the test", "Screaming in jest"],
    ["Taylor Swift", "Unexpected gift", "Stuck in a rift"],
    ["Oprah Winfrey", "Broke my knee", "Fought a tree"],
    ["Snoop Dogg", "Jumping frog", "Lost in the smog"],
    ["Statue of Liberty", "Lack of humidity", "Nuclear stupidity"],
    ["Justin Bieber", "Angry beaver", "Fell in a freezer"],
    ["Niagara Falls", "Shopping malls", "Screamed at the walls"],
    ["Barack Obama", "Llama drama", "Ate my mama"],
    ["Cristiano Ronaldo", "Spilled his gelato", "Trapped in a grotto"],
    ["Drake's mistake", "Chocolate cake", "Jumped in a lake"],
    ["Gordon Ramsay", "Flipped a patty", "Fought a ratty"],
    ["Big Mac", "Fell off track", "Hugged a yak"],
    ["White House", "Tiny mouse", "Divorced my spouse"],
    ["Queen Elizabeth", "Out of breath", "Summoning Macbeth"],
    ["Bruno Mars", "Racing cars", "Tattooed scars"],
    ["Hollywood sign", "Tastes like wine", "Lost my spine"],
    ["Jeff Bezos", "Ate some queso", "Fought Jeff's pesos"],
    ["Shrek's regret", "Massive debt", "Frog as a pet"],
    ["Bigfoot's shoe", "Sticky glue", "Ate a kazoo"],
    ["Joe Biden", "Secret hide-in", "Fought Poseidon"],
    ["Obi-Wan Kenobi", "Knows Adobe", "Trapped in a Corgi"],
    ["Kim Kardashian", "Fashion passion", "Fell in a trash can"],
    ["Bill Gates", "Lost his plates", "Invented roller skates"],
    ["Dwayne Johnson", "Tiny Bronson", "Banned from Wisconsin"],
    ["Mark Zuckerberg", "Drank a Slurpee", "Fought a turkey"],
    ["Mike Tyson", "Wrestling bison", "Screamed I'm dyin"],
    ["Vladimir Putin", "Flute tootin'", "Gluten-shootin'"],
    ["Mr. Beast", "Massive feast", "Got canceled in Greece"],
    ["Spider-Man", "Laundry van", "Fell into a frying pan"],
    ["Elmo's laugh", "Tall giraffe", "Slipped in a bath"],
    ["Chuck Norris", "Famous chorus", "Summoned a tortoise"],
    ["Santa Claus", "Lost his paws", "Fell in some sauce"],
    ["Yoda's tea", "Wookiee flea", "Burned his knee"],
    ["Rick Astley", "Dancing nastily", "Dressed so ghastly"],
    ["Pikachu", "Stinky shoe", "Mountain dew"],
    ["DJ Khaled", "Ate a salad", "Yo momma ugly and invalid"],
    ["Jack Black", "Ate a Big Mac", "Wrestled a yak"],
    ["Post Malone", "Lost his phone", "Fell off a throne"],
    ["Morgan Freeman", "Laughed like a demon", "Turned into a seaman"],
    ["Harry Styles", "Ran for miles", "Wore fake smiles"],
    ["Shia LaBeouf", "Had enough", "Ate a cream puff"],
    ["Rihanna's stance", "Did a dance", "Lost her pants"],
    ["Lebron James", "Summoned flames", "Forgot his name"],
    ["Danny DeVito", "Ate a burrito", "Became a mosquito"],
    ["Michael Scott", "Fell in a pot", "Yelled That's hot!"],
    ["Keanu Reeves", "Flew with ease", "Slept in the trees"],
    ["Tom Holland", "Face was swollen", "Fell into Poland"],
    ["Goku's fist", "Made a twist", "Now he's missed"],
    ["Sailor Moon", "Ate a spoon", "Floated to Neptune"],
    ["Nicki Minaj", "Did a massage", "Started a mirage"],
    ["Kermit the Frog", "Lost in the fog", "Fell off a log"],
    ["Scooby-Doo", "Lost his shoe", "Took a big chew"],
    ["Willy Wonka", "Fell in Tonka", "Ate bad conchas"],
    ["Elvis Presley", "Dressed so messily", "Sang aggressively"],
    ["Jack Sparrow", "Shot an arrow", "Fell in a barrow"],
    ["Popeye the Sailor", "Crashed a trailer", "Became a nailer"],
    ["Shrek's surprise", "Ate some fries", "Stared at the skies"],
    ["Patrick Star", "Crashed my car", "Fell too far"],
    ["Batman's cape", "Stole my vape", "Made his escape"],
    ["Lightning McQueen", "Drank gasoline", "Screamed KA-CHOW! on the scene"],
    ["Donkey Kong", "Did me wrong", "Sang a country song"],
    ["Bob Ross", "Took a loss", "Painted a boss"],
    ["Thanos' plan", "Broke a pan", "Fought a man"],
    ["Chewbacca's scream", "Burnt some cream", "Ruined my dream"],
    ["Sonic the Hedgehog", "Lost in a bog", "Tripped on a log"],
    ["Walter White", "Started a fight", "Took a flight"],
    ["The Kool-Aid Man", "Flew to Iran", "Tripped on a pan"],
    ["Dora the Explorer", "Yelled NO MORE-A", "Kicked down the door-a"],
    ["Shoutout to Taco Bell", "She said she was 12", "Thats my Michelle"],
    ["D-Wade", "Luka Trade", "Gatorade"],
    ["6'7", "9/11",	"She was only 7"],
    ["Zion ate it", "AD sprained it", "Wait that's our ball ain't it"],
    ["2 Chainz", "Raisin canes", "Blocked by James"],
    ["Nancy Grace", "Beat the case", "Without a trace"],
    ["Lil Weezy", "Lemon squeezy", "Come on man that's too easy"],
    ["Steph curry", "McFlurry", "My dad left me in a hurry"],
    ["Kyrie Irving", "Mavs hurting", "Gelo swerving"],
    ["Winnie the Pooh", "Where is my shoe", "Cleveland this is for YOUUU"],
    ["Sexy Power", "Rosemary flower", "They just hit the second tower"],
    ["Shannon sharpe", "Tony Stark", "Play in the park"],
    ["Josh Giddey", "Hit the griddy", "Someone come get diddy"]
];  

module.exports = quoteArr;



