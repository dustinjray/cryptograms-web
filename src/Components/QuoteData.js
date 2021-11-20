const quoteData = [
    {
        "id":1,
        "quote":"Mr and Mrs Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":2,
        "quote":"The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":3,
        "quote":"“Harry – yer a wizard.”",
        "character":"Rubeus Hagrid",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":4,
        "quote":"“Welcome,” said Hagrid, “to Diagon Alley.”",
        "character":"Rubeus Hagrid",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":5,
        "quote":"“It is very curious indeed that you should be destined for this wand when its brother – why, its brother gave you that scar.”",
        "character":"Mr Ollivander",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":6,
        "quote":"“Help yourself,” said Harry. “But in, you know, the Muggle world, people just stay put in photos.” “Do they? What, they don’t move at all?” Ron sounded amazed. “Weird!”",
        "character":"Harry Potter and Ron Weasley",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":7,
        "quote":"“Welcome!” he said. “Welcome to a new year at Hogwarts! Before we begin our banquet, I would like to say a few words. And here they are: Nitwit! Blubber! Oddment! Tweak! Thank you!”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":8,
        "quote":"There was a lot more to magic, as Harry quickly found out, than waving your wand and saying a few funny words.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":9,
        "quote":"“Ah, yes,” he said softly, “Harry Potter. Our new - celebrity.”",
        "character":"Severus Snape",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":10,
        "quote":"Hermione Granger was almost as nervous about flying as Neville was. This was something you couldn't learn by heart out of a book – not that she hadn’t tried.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":11,
        "quote":"“If either of you get us caught, I'll never rest until I've learnt that Curse of the Bogies Quirrell told us about and used it on you.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":12,
        "quote":"“You don’t use your eyes, any of you, do you?” she snapped. “Didn’t you see what it was standing on?” “The floor?” Harry suggested. “I wasn’t looking at its feet, I was too busy with its heads.”",
        "character":"Hermione Granger and Harry Potter",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":13,
        "quote":"“I hope you're pleased with yourselves. We could all have been killed - or worse, expelled. Now, if you don't mind, I’m going to bed.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":14,
        "quote":"“The Chasers throw the Quaffle and put it through the hoops to score.” Harry recited. “So – that’s sort of like basketball on broomsticks with six hoops, isn’t it?” “What’s basketball?” said Wood curiously.",
        "character":"Harry Potter and Oliver Wood",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":15,
        "quote":"Harry was speechless. Hermione was the last person to do anything against the rules, and here she was, pretending she had, to get them out of trouble. It was as if Snape had started handing out sweets.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":16,
        "quote":"There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
        "character":"",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":17,
        "quote":"Ron was fascinated by the fifty pence. “Weird!” he said. “What a shape! This is money?”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":18,
        "quote":"“You haven’t got a letter on yours,” George observed. “I suppose she thinks you don’t forget your name. But we’re not stupid – we know we’re called Gred and Forge.”",
        "character":"George Weasley",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":19,
        "quote":"“One can never have enough socks,” said Dumbledore. “Another Christmas has come and gone and I didn’t get a single pair. People will insist on giving me books.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":20,
        "quote":"“Always the innocent are the first victims,” he said. “So it has been for ages past, so it is now.”",
        "character":"Ronan",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":21,
        "quote":"“Firenze!” Bane thundered. “What are you doing? You have a human on your back! Have you no shame? Are you a common mule?”",
        "character":"Bane",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":22,
        "quote":"“Good luck, Harry Potter,” said Firenze. “The planets have been read wrongly before now, even by centaurs. I hope this is one of those times.”",
        "character":"Firenze",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":23,
        "quote":"“So light a fire!” Harry choked. “Yes – of course – but there’s no wood!” Hermione cried, wringing her hands. “HAVE YOU GONE MAD?” Ron bellowed. “ARE YOU A WITCH OR NOT?”",
        "character":"Hermione Granger and Ron Weasley",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":24,
        "quote":"“I'll be in my bedroom, making no noise and pretending I'm not there.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":25,
        "quote":"Voldemort might be a ruin of his former self, but he was still terrifying, still cunning, still determined to regain power.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":26,
        "quote":"“Harry Potter must stay where he is safe. He is too great, too good to lose. If Harry Potter goes back to Hogwarts, he will be in mortal danger.”",
        "character":"Dobby",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":27,
        "quote":"“Famous Harry Potter,” said Malfoy. “Can't even go into a bookshop without making the front page.”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":28,
        "quote":"“Of all the trees we could’ve hit, we had to get one that hits back.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":29,
        "quote":"Of all the unusual things about Harry, this scar was the most extraordinary of all.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":30,
        "quote":"“Don't let the Muggles get you down!”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":31,
        "quote":"“What do we want to be prefects for?” said George, looking revolted at the very idea. “It’d take all the fun out of life.”",
        "character":"George Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":32,
        "quote":"“Harry, swear to me you won’t go looking for Black.”",
        "character":"Arthur Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":33,
        "quote":"“It is my very great pleasure to inform you that the Triwizard Tournament will be taking place at Hogwarts this year.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":34,
        "quote":"“Moody, we never use Transfiguration as a punishment!” said Professor McGonagall weakly. “Surely Professor Dumbledore told you that?”",
        "character":"Professor McGonagall",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":35,
        "quote":"“The Imperius Curse can be fought, and I’ll be teaching you how, but it takes real strength of character, and not everyone’s got it. Better avoid being hit with it if you can”",
        "character":"Alastor Moody",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":36,
        "quote":"“And there’s no counter-curse. There’s no blocking it. Only one known person has ever survived it, and he’s sitting right in front of me.”",
        "character":"Alastor Moody",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":37,
        "quote":"“Harry, please. You’re talking to the man who raised Fred and George.”",
        "character":"Arthur Weasley",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":38,
        "quote":"“I liked the DA! I learned loads with you!” “I enjoyed the meetings, too,” said Luna serenely. “It was like having friends.”",
        "character":"Neville Longbottom and Luna Lovegood",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":39,
        "quote":"“People expect you to have cooler friends than us,” said Luna, once again displaying her knack for embarrassing honesty.",
        "character":"Luna Lovegood",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":40,
        "quote":"Across the table, Ron was cursing fluently under his breath; his potion looked like liquid liquorice.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":41,
        "quote":"“You there! Give me your chair, I’m a hundred and seven!” Another redheaded Weasley cousin jumped off his seat, looking alarmed, and Auntie Muriel swung it round with surprising strength and plopped herself down upon it between Doge and Harry.",
        "character":"",
        "book":"Harry Potter and the Deathly Hallows"
    },
    {
        "id":42,
        "quote":"“And what in the name of Merlin’s most baggy Y-fronts was that about?”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Deathly Hallows"
    },
    {
        "id":43,
        "quote":"Harry and Hermione felt that it was best not to stay anywhere too long, and Ron agreed, with the sole proviso that their next move took them within reach of a bacon sandwich.",
        "character":"",
        "book":"Harry Potter and the Deathly Hallows"
    },
    {
        "id":44,
        "quote":"“Brilliant,” said Hermione. “This isn’t magic – it’s logic – a puzzle. A lot of the greatest wizards haven’t got an ounce of logic, they’d be stuck in here for ever.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":45,
        "quote":"“There is no good and evil, there is only power, and those too weak to seek it…”",
        "character":"Quirinus Quirrell",
        "book":"Harry Potter and the Philosopher's Stone"
    },
    {
        "id":46,
        "quote":"“After all, to the well-organised mind, death is but the next great adventure.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":47,
        "quote":"“Call him Voldemort, Harry. Always use the proper name for things. Fear of a name increases fear of the thing itself.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":48,
        "quote":"“The truth.” Dumbledore sighed. “It is a beautiful and terrible thing, and should therefore be treated with great caution.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":49,
        "quote":"“Not a scar, no visible sign . . . to have been loved so deeply, even though the person who loved us is gone, will give us some protection for ever. It is in your very skin.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":50,
        "quote":"“. . . for the best-played game of chess Hogwarts has seen in many years, I award Gryffindor house fifty points.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":51,
        "quote":"“There are all kinds of courage,” said Dumbledore, smiling. “It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":52,
        "quote":"“Oh, I will,” said Harry, and they were surprised at the grin that was spreading over his face. “They don’t know we’re not allowed to use magic at home. I’m going to have a lot of fun with Dudley this summer . . . ”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":53,
        "quote":"“It does not do to dwell on dreams and forget to live.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Philosopher's Stone "
    },
    {
        "id":54,
        "quote":"He was a thin man with sallow skin, a hooked nose and greasy, shoulder length black hair, and at this moment, he was smiling in a way that told Harry he and Ron were in very deep trouble.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":55,
        "quote":"“Harry Potter must stay where he is safe. He is too great, too good, to lose. If Harry Potter goes back to Hogwarts, he will be in mortal danger.”",
        "character":"Dobby",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":56,
        "quote":"“Everyone queue up!” Malfoy roared to the crowd. “Harry Potter's giving out signed photos!”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":57,
        "quote":"“Jealous?” . . . “Of what? I don't want a foul scar right across my head, thanks. I don't think getting your head cut open makes you that special, myself.”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":58,
        "quote":"Ron opened his mouth to speak, but no words came out. Instead he gave an almighty belch and several slugs dribbled out of his mouth onto his lap.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":59,
        "quote":"It was a voice, a voice to chill the bone-marrow, a voice of breath-taking, ice-cold venom. “Come… come to me… let me rip you… let me tear you… let me kill you…”",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":60,
        "quote":"THE CHAMBER OF SECRETS HAS BEEN OPENED. ENEMIES OF THE HEIR, BEWARE.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":61,
        "quote":"“Enemies of the heir, beware! You’ll be next, Mudbloods!”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":62,
        "quote":"“Hearing voices no one else can hear isn’t a good sign, even in the wizarding world.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":63,
        "quote":"“Of course, it would be difficult. And dangerous, very dangerous. We’d be breaking about fifty school rules, I expect.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":64,
        "quote":"Lockhart hadn’t mended Harry’s bones. He had removed them.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":65,
        "quote":"“If he doesn't stop trying to save your life he's going to kill you.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":66,
        "quote":"Deliberately causing mayhem in Snape's Potions class was about as safe as poking a sleeping dragon in the eye.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":67,
        "quote":"“Only a really powerful Dark Wizard could have survived a curse like that.” He dropped his voice until it was barely more than a whisper, and said, “That’s probably why You-Know-Who wanted to kill him in the first place.”",
        "character":"Ernie Macmillan",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":68,
        "quote":"Harry was just thinking that all he needed was for Dumbledore's pet bird to die while he was all alone in the office with it, when the bird burst into flames.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":69,
        "quote":"“Fawkes is a phoenix, Harry. Phoenixes burst into flame when it is time for them to die and are reborn from the ashes.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":70,
        "quote":"What could possibly do that to a ghost, people asked each other; what terrible power could harm someone who was already dead?",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":71,
        "quote":"The Great Hall looked magnificent. Not only were there a dozen frost-covered Christmas trees and thick streamers of holly and mistletoe criss-crossing the ceiling, but enchanted snow was falling, warm and dry, from the ceiling.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":72,
        "quote":"“I know one thing: last time the Chamber of Secrets was opened, a Mudblood died. So I bet it’s only a matter of time before one of them’s killed this time . . . I hope it’s Granger,” he said with relish.",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":73,
        "quote":"“Honestly, if you were any slower, you’d be going backwards.”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":74,
        "quote":"“Maybe he murdered Myrtle, that would’ve done everyone a favour . . .”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":75,
        "quote":"Hermione let her robes fall and Ron backed into the sink. Her face was covered in black fur. Her eyes had gone yellow and there were long pointed ears poking through her hair.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":76,
        "quote":"Snape was looking as though the first person to ask him for a Love Potion would be force-fed poison.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":77,
        "quote":"The door behind the large boy flew open with such force it knocked him into the wall opposite. And out of it came something that made Harry let out a long, piercing scream no one but he seemed to hear.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":78,
        "quote":"‘“Help will always be given at Hogwarts to those who ask for it.”’",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":79,
        "quote":"One person, however, seemed to be thoroughly enjoying the atmosphere of terror and suspicion. Draco Malfoy was strutting around the school as though he had just been appointed Head Boy.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":80,
        "quote":"Spiders. Not tiny spiders like those surging over the leaves below. Spiders the size of carthorses, eight-eyed, eight-legged, black, hairy, gigantic.",
        "character":"",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":81,
        "quote":"“It’s because I understand Parseltongue . . .”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":82,
        "quote":"“I’ve waited a long time for this, Harry Potter,” said Riddle. “For the chance to see you. To speak to you.”’   ",
        "character":"Tom Riddle",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":83,
        "quote":"“It is our choices, Harry, that show what we truly are, far more than our abilities”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":84,
        "quote":"“Proud?” said Harry. “Are you mad? All those times I could’ve died, and I didn’t manage it? They’ll be furious . . .”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Chamber of Secrets"
    },
    {
        "id":85,
        "quote":"“I don’t go looking for trouble,” said Harry nettled. “Trouble usually finds me.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":86,
        "quote":"“What do we want to be Prefects for?” said George, looking revolted at the very idea. “It’d take all the fun out of life.”",
        "character":"George Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":87,
        "quote":"“No one knows how he got out of Azkaban,” said Ron uncomfortably. “No one’s ever done it before. And he was a top-security prisoner, too.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":88,
        "quote":"The Hogwarts Express moved steadily north and the scenery outside the window became wilder and darker while the clouds overhead thickened",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":89,
        "quote":"An intense cold swept over them all. Harry felt his own breath catch his chest. The cold went deeper than his skin. It was inside his chest, it was inside his very heart . . .",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":90,
        "quote":"They reached their familiar, circular dormitory with its five four- poster beds and Harry, looking around, felt he was home at last.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":91,
        "quote":"“Yeah, we’ll call you,” muttered Ron as the knight disappeared, “If we ever need someone mental.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":92,
        "quote":"“I'm dying!” Malfoy yelled, as the class panicked. “I'm dying, look at me! It's killed me!”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":93,
        "quote":"“It was a Muggle who saw him. ’Course she didn’t really understand. The Muggles think he’s just an ordinary criminal, don’t they?”",
        "character":"Seamus Finnigan",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":94,
        "quote":"“Why would I want revenge on Black? He hasn’t done anything to me – yet.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":95,
        "quote":"“D’you get the feeling Hermione’s not telling us something?” Ron asked Harry.",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":96,
        "quote":"“Nobody knows what a boggart looks like when he is alone, but when I let him out, he will immediately become whatever each of us most fears.”",
        "character":"Professor Lupin",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":97,
        "quote":"The room went quiet. Harry thought . . . What scared him most in the world?",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":98,
        "quote":"“There’s no point in hiding it from you any longer, Potter,” she said, in a very serious voice. “I know this will come as a shock to you, but Sirius Black –” “I know he’s after me”, said Harry wearily.",
        "character":"Professor McGonagall and Harry Potter ",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":99,
        "quote":"It was getting harder and harder to hold his broom straight. The sky was getting darker, as though night had decided to come early.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":100,
        "quote":"Before he’d had time to think, Harry had taken his eyes off the Snitch and looked down. At least a hundred Dementors, their hidden faces pointing up at him, were standing below.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":101,
        "quote":"It was as though freezing water was rising in his chest, cutting at his insides. And then he heard it again . . . someone was screaming, screaming inside his head . . . a woman . . .",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":102,
        "quote":"“That was the scariest thing I’ve ever seen in my life.” Scariest . . . the scariest thing . . . hooded black figures . . . cold . . . screaming . . .",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":103,
        "quote":"Ron and Hermione only left Harry’s bedside at night. But nothing anyone said or did could make Harry feel any better, because they only knew half of what was troubling him.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":104,
        "quote":"“It has nothing to do with weakness,” said Professor Lupin sharply, as though he had read Harry’s mind. “The Dementors affect you worse than the others because there are horrors in your past that the others don’t have.”",
        "character":"Professor Lupin",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":105,
        "quote":"“I solemnly swear that I am up to no good.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":106,
        "quote":"By order of the Ministry of Magic: Customers are reminded that until further notice, Dementors will be patrolling the streets of Hogsmeade every night after sundown.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":107,
        "quote":"“They are here to protect you all from something much worse . . . we all know what Black’s capable of . . .”",
        "character":"Cornelius Fudge ",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":108,
        "quote":"“Do you know, I still have trouble believing it,” said Madam Rosmerta thoughtfully. “Of all the people to go over to the Dark side, Sirius Black was the last I’d have thought . . .",
        "character":"Madam Rosmerta",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":109,
        "quote":"“Not many people are aware that the Potters knew You-Know-Who was after them.”",
        "character":"Cornelius Fudge ",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":110,
        "quote":"“Nobody but trained Hit Wizards from the Magical Law Enforcement Squad would have stood a chance against Black once he was cornered.”",
        "character":"Cornelius Fudge ",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":111,
        "quote":"“I must say, You-Know-Who alone and friendless is one thing … but give him back his most devoted servant, and I shudder to think how quickly he’ll rise again . . .”",
        "character":"Cornelius Fudge ",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":112,
        "quote":"There was his mother, alight with happiness, arm in arm with his dad. And there . . . that must be him. Their best man . . . Harry had never given him a thought before.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":113,
        "quote":"A hatred such as he had never known before was coursing through Harry like poison.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":114,
        "quote":"“Harry, listen,” said Hermione, exchanging a look with Ron, “you must be really upset about what we heard yesterday. But the thing is, you mustn’t go doing anything stupid.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":115,
        "quote":"It was Defence Against the Dark Arts that Harry was keen to get to; after his conversation with Wood, he wanted to get started on his Anti-Dementor lessons as soon as possible.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":116,
        "quote":"“The Patronus is a kind of positive force, a projection of the very things that the Dementor feeds upon – hope, happiness, the desire to survive . . .”",
        "character":"Professor Lupin",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":117,
        "quote":"Harry cast about for a happy memory. Certainly, nothing that had happened to him at the Dursleys’ was going to do. Finally, he settled on the moment when he had first ridden a broomstick.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":118,
        "quote":"“Expecto patronum,” Harry repeated under his breath, “expecto patronum.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":119,
        "quote":"“They’re dead”, he told himself sternly. “They’re dead, and listening to echoes of them won’t bring them back.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":120,
        "quote":"“You’re expecting too much of yourself”, said Professor Lupin sternly, in their fourth week of practice. “For a thirteen-year-old wizard, even an indistinct Patronus is a huge achievement.”",
        "character":"Professor Lupin",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":121,
        "quote":"“They call it the Dementor’s Kiss, said Lupin, with a slightly twisted smile. “It’s what Dementors do to those they wish to destroy utterly.”",
        "character":"Professor Lupin",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":122,
        "quote":"Harry sat stunned for a moment at the idea of someone having their soul sucked out through their mouth.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":123,
        "quote":"Their seeker, Cho Chang, was the only girl in their team. She was shorter than Harry by about a head, and Harry couldn’t help noticing, nervous as he was, that she was extremely pretty.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":124,
        "quote":"No one in Gryffindor Tower slept that night. They knew that the castle was being searched again, and the whole house stayed awake in the common room, waiting to hear whether Black had been caught.",
        "character":"",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":125,
        "quote":"“How extraordinarily like your father you are, Potter” Snape said suddenly, his eyes glinting. “He too, was exceedingly arrogant.”",
        "character":"Professor Snape",
        "book":"Harry Potter and the Prisoner of Azkaban"
    },
    {
        "id":126,
        "quote":"“But I am not a man, Muggle,” said the cold voice, barely audible now over the crackling of the flames. “I am much, much more than a man.”",
        "character":"Lord Voldemort",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":127,
        "quote":"It had been enough of a shock for Harry to discover, on his eleventh birthday, that he was a wizard; it had been even more disconcerting to find out that everyone in the wizarding world knew his name.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":128,
        "quote":"“Anyone can speak Troll,” said Fred dismissively, “all you have to do is point and grunt.”",
        "character":"Fred Weasley",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":129,
        "quote":"Harry knew that the only way to turn a house-elf free was to present it with proper garments. It was pitiful to see the way Winky clutched at her tea-towel as she sobbed over Mr Crouch’s feet.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":130,
        "quote":"“Harry, that’s their idea of fun. Half the Muggle killings back when You-Know-Who was in power were done for fun”",
        "character":"Mr Weasley",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":131,
        "quote":"The Hogwarts Express, a gleaming scarlet steam engine, was already there, clouds of steam billowing from it, through which the many Hogwarts students and parents on the platform appeared like dark ghosts.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":132,
        "quote":"The Great Hall looked its usual splendid self, decorated for the start-of-term feast. Golden plates and goblets gleamed by the light of hundreds and hundreds of candles, floating over the tables in mid-air.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":133,
        "quote":"Harry’s loathing of Snape was matched only by Snape’s hatred of him . . .",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":134,
        "quote":"The tips of Dumbledore’s long, thin fingers were together and he was resting his chin upon them, staring up at the ceiling through his half-moon spectacles as though lost in thought.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":135,
        "quote":"“Now . . . those three curses – Avada Kedavra, Imperius and Cruciatus – are known as the Unforgivable Curses. The use of any one of them on a fellow human being is enough to earn a life sentence in Azkaban.”",
        "character":"Alastor Moody",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":136,
        "quote":"“The moment has come,” said Dumbledore, smiling around at the sea of upturned faces. “The Triwizard Tournament is about to start.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":137,
        "quote":"“The placing of your name in the Goblet constitutes a binding, magical contract. There can be no change of heart once you have become champion.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":138,
        "quote":"‘Dragons are extremely difficult to slay, owing to the ancient magic that imbues their thick hides, which none but the most powerful spells can penetrate . . .’ ",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":139,
        "quote":"Just then, Neville caused a slight diversion by turning into a large canary.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":140,
        "quote":"“Dobby likes work, but he wants to wear clothes and he wants to be paid, Harry Potter . . . Dobby likes being free!”",
        "character":"Dobby",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":141,
        "quote":"“Percy wouldn’t recognise a joke if it danced naked in front of him wearing Dobby’s tea-cosy.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":142,
        "quote":"“‘Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl!”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":143,
        "quote":"“I have gone temporarily deaf and haven't any idea what you said, Harry.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":144,
        "quote":"“Hagrid, how could you think we’d care what that – woman – wrote about you?” Two fat tears leaked out of Hagrid’s beatle-black eyes and fell slowly into his tangled beard.",
        "character":"Harry Potter",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":145,
        "quote":"“It will make Harry Potter breathe underwater, sir!” “Dobby”, said Harry frantically, “listen – are you sure about this?” He couldn’t quite forget that the last time Dobby had tried to ‘help’ him, he had ended up with no bones in his right arm.",
        "character":"Dobby and Harry Potter",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":146,
        "quote":"“What?” Harry gasped. “They’ve got … they’ve got Ron?” “The thing that Harry Potter will miss most, sir!” squeaked Dobby.",
        "character":"Harry Potter and Dobby",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":147,
        "quote":"“Don’t lie to me,” Snape hissed, his fathomless black eyes boring into Harry’s. “Boomslang skin. Gillyweed.  Both come from my private stores, and I know who stole them.”",
        "character":"Professor Snape",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":148,
        "quote":"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        "character":"Sirius Black",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":149,
        "quote":"“Well, times like that bring out the best in some people, and the worst in others.”",
        "character":"Sirius Black",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":150,
        "quote":"“Curiosity is not a sin,” he said. “But we should exercise caution with our curiosity . . . yes indeed . . .”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":151,
        "quote":"“I have a theory, no more than that . . . It is my belief that your scar hurts both when Lord Voldemort is near you, and when he is feeling a particularly strong surge of hatred.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":152,
        "quote":"“Because you and he are connected by the curse that failed,” said Dumbledore. “That is no ordinary scar.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":153,
        "quote":"“Good luck Harry,” Hagrid whispered, and the four of them walked away in different directions, to station themselves around the maze.”",
        "character":"Rubeus Hagrid",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":154,
        "quote":"“Understanding is the first step to acceptance, and only with acceptance can there be recovery.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":155,
        "quote":"“Numbing the pain for a while will make it worse when you finally feel it.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":156,
        "quote":"“It matters not what someone is born, but what they grow to be!”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":157,
        "quote":"“It is my belief . . . that the truth is generally preferable to lies.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":158,
        "quote":"“We are only as strong as we are united, as weak as we are divided.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":159,
        "quote":"Time will not slow down when something unpleasant lies ahead.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":160,
        "quote":" ‘As Hagrid had said, what would come, would come . . . and he would have to meet it when it did.",
        "character":"",
        "book":"Harry Potter and the Goblet of Fire"
    },
    {
        "id":161,
        "quote":". . . There was a cold, tingling sensation in his stomach. He had revisited the graveyard last night in his dreams.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":162,
        "quote":"“Anyway, I’ve always thought Dumbledore was cracked to trust Snape. Where’s the evidence he ever really stopped working for You-Know-Who?”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":163,
        "quote":"“But Dumbledore says he doesn’t care what they do as long as they don’t take him off the Chocolate Frog Cards.”",
        "character":"Bill Weasley ",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":164,
        "quote":"“But there can’t be anything worse than the Avada Kedavra Curse, can there?” said Ron. “What’s worse than death?”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":165,
        "quote":"“Don’t put your wand there, boy!” roared Moody. “What if it ignited? Better wizards than you have lost buttocks, you know!”",
        "character":"Alastor Moody",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":166,
        "quote":"“E”,’ George corrected her, ‘“E” for “Exceeds Expectations”. And I’ve always thought Fred and I should’ve got “E” in everything, because we exceeded expectations just by turning up for the exams.”",
        "character":"George Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":167,
        "quote":"“Half our year had minor breakdowns coming up to O.W.L.s.” said George happily.",
        "character":"George Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":168,
        "quote":"“I didn’t ask – I didn’t want – Voldemort killed my parents!” Harry spluttered. “I got famous because he murdered my family but couldn’t kill me! Who wants to be famous for that?”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":169,
        "quote":"“I take only the very best into my N.E.W.T. Potions class, which means that some of us will certainly be saying goodbye.”",
        "character":"Professor Snape",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":170,
        "quote":"“I want to be properly trained in defence because … because ...” she took a great breath and finished, “because Lord Voldemort is back.”",
        "character":"Hermione Granger ",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":171,
        "quote":"“If you’ve come to hear exactly what it looks like when Voldemort murders someone I can’t help you.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":172,
        "quote":"“In the old days he had huge numbers at his command: witches and wizards he’d bullied or bewitched into following him, his faithful Death Eaters, a great variety of Dark creatures.”",
        "character":"Sirius Black",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":173,
        "quote":"“Just because you’ve got the emotional range of a teaspoon doesn’t mean we all have.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":174,
        "quote":"“Let’s make it stand for Dumbledore’s Army, because that’s the Ministry’s worst fear, isn’t it?”",
        "character":"Ginny Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":175,
        "quote":"“Let’s say I dreamed I was ... drowning Snape in my cauldron.”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":176,
        "quote":"“Moronic though some of this class undoubtedly are, I expect you to scrape an ‘Acceptable’ in your O.W.L., or suffer my ... displeasure.”",
        "character":"Professor Snape",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":177,
        "quote":"“That’s the most stupid thing I’ve ever heard, including all the stuff that Luna Lovegood comes out with.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":178,
        "quote":"“The only people who can see Thestrals,” she said, “are people who have seen death.”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":179,
        "quote":"“This is school, Mr Potter, not the real world.” she said softly. “So we’re not supposed to be prepared for what’s waiting for us out there?” “There is nothing waiting out there, Mr Potter.”",
        "character":"Professor Umbridge",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":180,
        "quote":"“Trained in combat!” repeated Harry incredulously. “What does he think we’re doing here, forming some sort of wizard army?”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":181,
        "quote":"“Would you like us to clean out your ears for you?” enquired George, pulling a long and lethal-looking metal instrument from inside one of the Zonko’s bags.",
        "character":"George Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":182,
        "quote":"“You’re an Auror?” said Harry, impressed. Being a Dark-wizard-catcher was the only career he’d ever considered after Hogwarts.",
        "character":"Harry Potter",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":183,
        "quote":"“You’re less like your father than I thought,” he said finally, a definite coolness in his voice. “The risk would’ve been what made it fun for James.”",
        "character":"Sirius Black",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":184,
        "quote":"“You’re not supposed to abuse your position, Ron!” said Hermione sharply. “Yeah right, because Malfoy won’t abuse it at all,” said Ron sarcastically.",
        "character":"Hermione Granger and Ron Weasley",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":185,
        "quote":"Dementors caused a person to relive the worst moments of their life. What would spoiled, pampered, bullying Dudley have been forced to hear?",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":186,
        "quote":"He was a skinny, black-haired, bespectacled boy who had the pinched, slightly unhealthy look of someone who has grown a lot in a short space of time.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":187,
        "quote":"He was determined not to give Umbridge the satisfaction; over and over again he wrote I must not tell lies and not a sound escaped his lips, though the cut deepened with every letter.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":188,
        "quote":"How much power did Dumbledore have to override the Ministry of Magic?",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":189,
        "quote":"Snape and Umbridge, the two teachers he hated most. It was hard to decide which one he wanted to triumph over the other.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":190,
        "quote":"The order ‘wands away’ had never yet been followed by a lesson they had found interesting.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":191,
        "quote":"The revelation that his batty old cat-obsessed neighbour knew what Dementors were was almost as big a shock to Harry as meeting two of them down the alleyway.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":192,
        "quote":"The Slytherins at the front of the class all looked up eagerly; they loved hearing Snape taunt Harry.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":193,
        "quote":"They were surrounded by total, impenetrable, silent darkness, as though some giant hand had dropped a thick, icy mantle over the entire alleyway, blinding them.",
        "character":"",
        "book":"Harry Potter and the Order of the Phoenix"
    },
    {
        "id":194,
        "quote":"“It is unwise to linger overlong on doorsteps in these troubled times.”",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":195,
        "quote":"“You have never treated Harry as a son. He has known nothing but neglect and often cruelty at your hands.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":196,
        "quote":"Where a split second before there had been an armchair, there now crouched an enormously fat, bald old man who was massaging his lower belly and squinting up at Dumbledore.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":197,
        "quote":"It was hard to sympathise with Slughorn’s cosseted existence when he remembered Sirius, crouching in a cave and living on rats.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":198,
        "quote":"“He will undoubtedly try to collect you, Harry. You would be the jewel of his collection: the Boy Who Lived … or, as they call you these days, the Chosen One.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":199,
        "quote":"“I realised I can’t shut myself away or – or crack up. Sirius wouldn’t have wanted that, would he? And anyway, life’s too short …”",
        "character":"Harry Potter",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":200,
        "quote":"“You need your friends, Harry.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":201,
        "quote":"“Don’t count your owls before they are delivered.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":202,
        "quote":"Harry glanced down Ron’s grades: there were no ‘Outstandings’ there …",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":203,
        "quote":"It was odd really, seeing that it had been a Death Eater in disguise who had first told Harry he would make a good Auror, but somehow the idea had taken hold of him.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":204,
        "quote":"Neither can live while the other survives …",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":205,
        "quote":"It would have been a happy, peaceful holiday had it not been for the stories of disappearances, odd accidents, even of deaths now appearing almost daily in the Prophet.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":206,
        "quote":"Edible Dark Marks – They’ll Make Anyone Sick!",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":207,
        "quote":"“I liked the DA! I learned loads with you!” “I enjoyed the meetings, too,” said Luna serenely. “It was like having friends.”",
        "character":"Luna Lovegood",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":208,
        "quote":"“People expect you to have cooler friends than us,” said Luna, once again displaying her knack for embarrassing honesty.",
        "character":"Luna Lovegood",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":209,
        "quote":"Neville’s childhood had been blighted by Voldemort just as much as Harry’s had, but Neville had no idea how close he had come to having Harry’s destiny.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":210,
        "quote":"It was not like Malfoy to pass up the chance to demonstrate his power as prefect, which he had happily abused all the previous year.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":211,
        "quote":"“You know, I don’t believe any house has ever been in negative figures this early in the term – we haven’t even started pudding. You might have set a record, Potter.”",
        "character":"Severus Snape",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":212,
        "quote":"How could Snape be given the Defence Against the Dark Arts job after all this time? Hadn’t it been widely known for years that Dumbledore did not trust him to do it?",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":213,
        "quote":"Across the table, Ron was cursing fluently under his breath; his potion looked like liquid liquorice.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":214,
        "quote":"Harry bent forwards, took a deep breath, and plunged his face into the silvery substance. He felt his feet leave the office floor; he was falling, falling, through whirling darkness.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":215,
        "quote":"“Quidditch!” said Hermione angrily. “Is that all boys care about?”",
        "character":"Hermione Granger",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":216,
        "quote":"Hagrid gave another great snort. Harry rather thought some bogies landed on the potatoes, and was inwardly thankful that they were not staying for dinner.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":217,
        "quote":"Harry noticed that the contents proved difficult to empty into the Pensieve, as though they had congealed slightly; did memories go off?",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":218,
        "quote":"Together they raised their wands, concentrating with all their might, and pointed them at their flasks. Harry’s vinegar turned to ice; Ron’s flask exploded.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":219,
        "quote":"The battle still raged inside his head: Ginny or Ron?",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":220,
        "quote":"He felt his heart lift at the thought that there was still one last golden day of peace left to enjoy with Ron and Hermione.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":221,
        "quote":"“I am not worried, Harry,” said Dumbledore, his voice a little stronger despite the freezing water. “I am with you.”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":222,
        "quote":"“Severus … please …” Snape raised his wand and pointed it directly at Dumbledore. “Avada Kedavra!”",
        "character":"Albus Dumbledore",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":223,
        "quote":"“It’s very character-building stuff, learning to peel sprouts without magic, makes you appreciate how difficult it is for Muggles and Squibs –”",
        "character":"Fred Weasley",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":224,
        "quote":"“Dumbledore’s man through and through, aren’t you, Potter?” “Yeah, I am,” said Harry. “Glad we straightened that out.”",
        "character":"Rufus Scrimgeour and Harry Potter",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":225,
        "quote":"Just stick to Malfoy like a couple of wart plasters.",
        "character":"",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":226,
        "quote":"“Kreacher will not insult Harry Potter in front of Dobby, no he won’t, or Dobby will shut Kreacher’s mouth for him!” cried Dobby in a high-pitched voice.",
        "character":"Dobby",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":227,
        "quote":"“He’s got Crabbe and Goyle transforming into girls?” guffawed Ron. “Blimey … no wonder they don’t look too happy these days.”",
        "character":"Ron Weasley",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":228,
        "quote":"“No one can help me,” said Malfoy. His whole body was shaking. “I can’t do it … I can’t … it won’t work … and unless I do it soon … he says he’ll kill me …”",
        "character":"Draco Malfoy",
        "book":"Harry Potter and the Half-Blood Prince"
    },
    {
        "id":229,
        "quote":"“Why can’t I drink the potion instead?” asked Harry desperately. “Because I am much older, much cleverer, and much less valuable,” said Dumbledore.",
        "character":"Albus Dumbledore and Harry Potter",
        "book":"Harry Potter and the Half-Blood Prince"
    }
];

export default quoteData;