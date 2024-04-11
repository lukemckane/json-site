let mainGrid;

// players
let	nymValric = {
	'name' : 'Nym Valric',
	'race' : 'Wood Elf',
	'class' : 'Monk',
	'prefered weapons' : 'Quarter Staff and Fists',
	'thumbnail' : 'nym-headshot.webp',
	'fullshot' : 'nym-action.webp',
	'type' : 'player',
	'id' : 'nymValric',
};

let	sequoia = {
	'name' : 'Seqoia',
	'race' : 'Wood Elf',
	'class' : 'Druid',
	'prefered weapons' : 'Quarter Staff and Wild Shape',
	'thumbnail' : 'sequoia-headshot.webp',
	'fullshot' : 'sequoia-action.webp',
	'type' : 'player',
	'id' : 'sequoia',
};

let	hakkiSalvar = {
	'name' : 'Hakki Salvar',
	'race' : 'Elf',
	'class' : 'Wizard',
	'prefered weapons' : 'Magic and Bad Plans',
	'thumbnail' : 'hakki-headshot.webp',
	'fullshot' : 'hakki-action.webp',
	'type' : 'player',
	'id' : 'hakkiSalvar',
};

let	farekForkris = {
	'name' : 'Farek Forkris',
	'race' : 'Dragonborn',
	'class' : 'Paladin',
	'prefered weapons' : 'Halberd and Fire Breath',
	'thumbnail' : 'farek-headshot.webp',
	'fullshot' : 'farek-action.webp',
	'type' : 'player',
	'id' : 'farekForkris',
};

// array of players JSONs
let party = [nymValric, sequoia, hakkiSalvar, farekForkris];

// NPCs
let daetraHornrace = {
	'name' : 'Daetra Hornrace',
	'race' : 'Elf',
	'occupation' : 'High Priestess of the Temple of Zesla',
	'description' : 'The High Priestess of the Temple of Zesla, elegant yet decisive Daetra Hornrace commands authority and respect throughout all of Layman\'s Shelter. She wears silky blue and white robes, with braided blonde hair that beautifully wraps itself around her shoulders. Yet, her piercing blue eyes permeate the mind with an uncanny aire of determination and power.',
	'thumbnail' : 'Daetra-Hornrace-Headshot.webp',
	'fullshot' : 'Daetra-Hornrace-Action.webp',
	'type' : 'npc',
	'id' : 'daetraHornrace',
}

let argoCarsion = {
	'name' : 'Argo Carsion',
	'race' : 'Gnome',
	'occupation' : 'Rhynian Cleric and High Vicar of the Temple of Khaleesi',
	'description' : 'Argo Carsion, otherwise known as the Rhynian Cleric Ernar Stonewind, is the Grand Vicar of the Temple of Khaleesi, a necromantic organization dedicated to serving the evil Goddess of War. Carsion, a stout gnome with polished appearance, has dark lines and scars across his face, a toll of the horrible necromancy he conducts on innocents. He wears dark crimson robes, and a hood that casts a terrifying shadow upon all those who look at him. ',
	'thumbnail' : 'Argo-Carsion-Headshot.webp',
	'fullshot' : 'Argo-Carsion-Action.webp',
	'type' : 'npc',
	'id' : 'argoCarsion',
}

let thorbirJawfeet = {
	'name' : 'Thorbir Jawfeet',
	'race' : 'Dwarf',
	'occupation' : 'Right Hand to Argo Carsion',
	'description' : 'Thorbir Jawfeet is Argo\'s second in command, a red-haired dwarven menace who strikes without hesitation. He dons battle-proven dwarven plate armor, and has a thick red beard knotted in a Viking fashion. On his back lies a huge warhammer, stained red with the blood of his enemies.',
	'thumbnail' : 'Thorbir-Jawfeet-Headshot.webp',
	'fullshot' : 'Thorbir-Jawfeet-Action.webp',
	'type' : 'npc',
	'id' : 'thorbirJawfeet',
}

let theSpider = {
	'name' : 'The Spider',
	'race' : 'unknown',
	'occupation' : 'Mysterious Underworld Organization',
	'description' : 'Members of the secretive organization named only the Spider, such as this unnamed person, keep their identities well hidden. Clad in white robes with a hood that covers their entire face, this member is distinguishable only by the golden insignia of a Spider on their chest. The Spider sees all, but you never see the Spider.',
	'thumbnail' : 'The-Spider-Headshot.webp',
	'fullshot' : 'The-Spider-Action.webp',
	'type' : 'npc',
	'id' : 'theSpider',
}

let utrid = {
	'name' : 'Utrid',
	'race' : 'Half-Orc',
	'occupation' : 'none',
	'description' : 'Utrid is a burly half-orc who has been living in the woods outside of Layman\'s Shelter for hundreds of years. After evil beings discovered his wizard-like powers, extremely uncommon for a half-orc, they, fearing what the giant man might do, banished him to the forest. However, despite Utrid\'s menacing appearance, he is a friendly and educated being, seeking only to help those who find him in the forest, regardless of how scared they are.',
	'thumbnail' : 'Utrid-Headshot.webp',
	'fullshot' : 'Utrid-Action.webp',
	'type' : 'npc',
	'id' : 'utrid',
}

let mariaLeGrace = {
	'name' : 'Maria LeGrace',
	'race' : 'Human',
	'occupation' : 'Farmer',
	'description' : 'Maria Legrace, a young human woman in her 30s, inherited LeGrace farm when her father abruptly decided to leave the family. Maria runs the farm along with her son Jayce. She has long, auburn hair down to her waist, sports jeans, a rancher\'s hat, and is always willing to do the dirty work.',
	'thumbnail' : 'Maria-Legrace-Headshot.webp',
	'fullshot' : 'Maria-Legrace-Action.webp',
	'type' : 'npc',
	'id' : 'mariaLeGrace',
}

let nilmornTamarus = {
	'name' : 'Nilmorn Tamarus',
	'race' : 'Half-Elf',
	'occupation' : 'Bartender',
	'description' : 'Nilmorn Tamarus, a middle-aged man of half-elvish descent, has been bartender at Limping Crow for as long as anyone can remember. Always wearing his grey buttoned vest and black dress pants, the slender, silver haired man is as good at his job as any bartender in the Land of Edruan. He knows all about the doings of everyone in Layman\'s Shelter. For a price, of course.',
	'thumbnail' : 'Nilmorn-Tamarus-Headshot.webp',
	'fullshot' : 'Nilmorn-Tamarus-Action.webp',
	'type' : 'npc',
	'id' : 'nilmornTamarus',
}

let fernirFardream = {
	'name' : 'Fernir Fardream',
	'race' : 'Half-Elf',
	'occupation' : 'Assistant to Daetra Hornrace',
	'description' : 'Fernir Fardream is a sly and deceptive half-elf, seemingly Daetra Hornrace\'s close ally in the Temple of Zesla, when in actuality he serves Argo Carsion and the evil cult of Khaleesi. He wears silver and gold clergy robes, with a mysterious keychain hanging from its side.',
	'thumbnail' : 'Fernir-Fardream-Headshot.webp',
	'fullshot' : 'Fernir-Fardream-Action',
	'type' : 'npc',
	'id' : 'fernirFardream',
}

// array of NPCs
let npcs = [daetraHornrace, argoCarsion, thorbirJawfeet, theSpider, utrid, mariaLeGrace, nilmornTamarus, fernirFardream];

// locations
let limpingCrow = {
	'name' : 'The Limping Crow',
	'characters' : [nilmornTamarus, theSpider],
	'description' : 'A tavern off the road farthest to the left, in between the fork. It is an older wooden building with the sigil of a crow engraved on the awning. “Shouts and screams bounce across the walls, followed by the reverberating crash of ale mugs onto the bar. Despite the weather, joy is in the air, and you get the sense that this place serves as an escape for the hardworking people of Layman’s Shelter.”',
	'thumbnail' : 'Limping-Crow-Exterior.webp',
	'interior' : 'Limping-Crow-Interior.webp',
	'type' : 'location',
	'id' : 'limpingCrow',
}

let templeOfZesla = {
	'name' : 'The Temple of Zesla',
	'characters' : [daetraHornrace, fernirFardream],
	'description' : 'Turning around the corner, a bright blue beacon of hope stands out amongst the rest of Layman\'s Shelter. Standing central in the plaza, The Temple of Zesla resembles an ancient Roman temple, with massive marble pillars supporting a blue-tiled roof. Intricately designed reliefs of the Water Goddess extend from the frieze, depicting beautiful scenes of water and creation.',
	'thumbnail' : 'Temple-of-Zesla-Exterior.webp',
	'interior' : 'Temple-of-Zesla-Interior.webp',
	'type' : 'location',
	'id' : 'templeOfZesla',
}

let templeOfRhynia = {
	'name' : 'The Temple of Rhynia',
	'characters' : [argoCarsion, thorbirJawfeet],
	'description' : 'The Rhynian temple lies on the outskirts of town, on the westernmost road that runs north to south. It is an elegantly shaped circular temple, with an ovular, flat dome, and red tiling that runs along all of the exterior and interior. There are dark, stained glass windows, yet the inside of the temple is lit only by candlelight.',
	'thumbnail' : 'Temple-of-Rhynia-Exterior.webp',
	'interior' : 'Temple-of-Rhynia-Interior.webp',
	'type' : 'location',
	'id' :  'templeOfRhynia',
}

let leGraceFarm = {
	'name' : 'LeGrace Farm',
	'characters' : [mariaLeGrace, utrid],
	'description' : 'On the edge of Layman\'s Shelter, the tall red barns, rows and rows of fields, and the rusted wooden stables of the LeGrace family farm serve as the main provider for meat, milk, wheat, and horses in this settlement.',
	'thumbnail' : 'LeGrace-Farm-Exterior.webp',
	'interior' : 'LeGrace-Farm-Interior.webp',
	'type' : 'location',
	'id' : 'leGraceFarm',
}

// array of locations
let locations = [limpingCrow, templeOfZesla, templeOfRhynia, leGraceFarm];



document.addEventListener("DOMContentLoaded", function(){

	mainGrid = document.getElementById('mainGrid');


	/* get URL params */
	let queryString = window.location.search;
 	let urlParams = new URLSearchParams(queryString);
 	let urlSection = urlParams.get('section');
 	let urlID = urlParams.get('id');

 	/* page generation */

 	if (urlID == "" || urlID == null) {
 		// home
	 	if (urlSection == "" || urlSection == null) {
	 		// the party section
	 		genHeader("The Party");
	 		for (let i = 0; i < party.length; i++) {
	 			createPrev(party[i]);
	 			console.log(party[i]);
	 		}


	 		// locations section
	 		genHeader("Locations");
	 		for (let i = 0; i < locations.length; i++) {
	 			createPrev(locations[i]);
	 			console.log(locations[i]);
	 		}

	 	} else {
	 		genHeader(urlSection);
	 			if (urlSection == "locations") {
	 				for (let i = 0; i < locations.length; i++) {
	 					createPrev(locations[i]);
	 				}
	 			} else {
	 				for (let i = 0; i < party.length; i++) {
	 					createPrev(party[i]);
	 				}
	 				for (let i = 0; i < npcs.length; i++) {
	 					createPrev(npcs[i]);
	 				}
	 			}
	 	}
 	}

 	if (urlSection == "player") {
 		for (i = 0; i < party.length; i++) {
 			if (party[i]['id'] == urlID) {
 				genPlayerPage(party[i]);
 			}
 		}
 	}
 	if (urlSection == "npc") {
 		for (i = 0; i < npcs.length; i++) {
 			if (npcs[i]['id'] == urlID) {
 				genNpcPage(npcs[i]);
 			}
 		}
 	}
 	if (urlSection == "location") {
 		for (i = 0; i < locations.length; i++) {
 			if (locations[i]['id'] == urlID) {
 				genLocationPage(locations[i]);
 			}
 		}
 	}

});


function createPrev(incomingJSON) {
	// create link element
	let newPrevLink = document.createElement("A");
	newPrevLink.classList.add('prevLink');
	newPrevLink.href = "index.html?section=" + incomingJSON['type'] + "&id=" + incomingJSON['id'];
	

	// create contents of link and append
	let newPreviewElement = document.createElement("DIV");
	newPreviewElement.classList.add("thumbnailDiv");

	let newPreviewThumbnail = document.createElement("IMG");
  	newPreviewThumbnail.classList.add("thumbnail");
  	newPreviewThumbnail.src = incomingJSON["thumbnail"];
  	newPreviewElement.appendChild(newPreviewThumbnail);

  	newPrevLink.appendChild(newPreviewElement);

	// append link to the page
	mainGrid.appendChild(newPrevLink);

}

function createPrevLocation(incomingJSON, incomingDiv) {
	// create link element
	let newPrevLink = document.createElement("A");
	newPrevLink.classList.add('prevLinkLocation');
	newPrevLink.href = "index.html?section=" + incomingJSON['type'] + "&id=" + incomingJSON['id'];
	

	// create contents of link and append
	let newPreviewElement = document.createElement("DIV");
	newPreviewElement.classList.add("thumbnailDiv");

	let newPreviewThumbnail = document.createElement("IMG");
  	newPreviewThumbnail.classList.add("thumbnail");
  	newPreviewThumbnail.src = incomingJSON["thumbnail"];
  	newPreviewElement.appendChild(newPreviewThumbnail);

  	newPrevLink.appendChild(newPreviewElement);

	// append link to the page
	incomingDiv.appendChild(newPrevLink);

}

function genHeader(incTitle) {
	let newHeaderDiv = document.createElement("DIV");
 	newHeaderDiv.classList.add("headerDiv");
 	newHeaderDiv.classList.add("fullWidth");
 	let newHeaderText = document.createElement("H1");
 	newHeaderText.classList.add("headerText");
 	newHeaderText.innerText = incTitle;
 	newHeaderDiv.appendChild(newHeaderText);
 	mainGrid.appendChild(newHeaderDiv);
}

function genPlayerPage(incomingJSON) {
	let infoBank = document.createElement("DIV");
	infoBank.classList.add("sixthWidth");
	infoBank.classList.add('infoBank');
	infoBank.style.display = 'flex';
	infoBank.style.flexFlow = 'column'

	for (i = 0; i < 4; i++) {
		let tempKey = Object.keys(incomingJSON)[i];

		let infoSubDiv = document.createElement("DIV");
		infoSubDiv.classList.add('infoBankSub');
		infoSubDiv.style.display = 'grid';
		infoSubDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
		infoBank.appendChild(infoSubDiv);

		let infoSubLeft = document.createElement("DIV");
		infoSubLeft.classList.add('infoSubLeft');
		infoSubDiv.appendChild(infoSubLeft);

		let infoSubLeftText = document.createElement("H3");
		infoSubLeftText.style.margin = '0';
		infoSubLeftText.innerText = tempKey;
		infoSubLeft.appendChild(infoSubLeftText)

		let infoSubRight = document.createElement("DIV");
		infoSubRight.classList.add('infoSubRight');
		infoSubDiv.appendChild(infoSubRight);

		let infoSubRightText = document.createElement("H3");
		infoSubRightText.style.margin = '0';
		infoSubRightText.innerText = incomingJSON[tempKey];
		infoSubRight.appendChild(infoSubRightText)
	}

	mainGrid.appendChild(infoBank);

	document.body.style.backgroundImage = 'url(' + incomingJSON['fullshot']  + ')';
	document.body.style.backgroundSize = 'cover';

}

function genNpcPage(incomingJSON) {
	let infoBank = document.createElement("DIV");
	infoBank.classList.add("sixthWidth");
	infoBank.classList.add('infoBank');
	infoBank.style.display = 'flex';
	infoBank.style.flexFlow = 'column'

	for (i = 0; i < 3; i++) {
		let tempKey = Object.keys(incomingJSON)[i];

		let infoSubDiv = document.createElement("DIV");
		infoSubDiv.classList.add('infoBankSub');
		infoSubDiv.style.display = 'grid';
		infoSubDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
		infoBank.appendChild(infoSubDiv);

		let infoSubLeft = document.createElement("DIV");
		infoSubLeft.classList.add('infoSubLeft');
		infoSubDiv.appendChild(infoSubLeft);

		let infoSubLeftText = document.createElement("H3");
		infoSubLeftText.style.margin = '0';
		infoSubLeftText.innerText = tempKey;
		infoSubLeft.appendChild(infoSubLeftText)

		let infoSubRight = document.createElement("DIV");
		infoSubRight.classList.add('infoSubRight');
		infoSubDiv.appendChild(infoSubRight);

		let infoSubRightText = document.createElement("H3");
		infoSubRightText.style.margin = '0';
		infoSubRightText.innerText = incomingJSON[tempKey];
		infoSubRight.appendChild(infoSubRightText)
	}

	let descriptionHeader = document.createElement("DIV");
	descriptionHeader.classList.add('descriptionHeader');
	descriptionHeader.classList.add('sixthWidth');
	let descriptionHeaderText = document.createElement("H2");
	descriptionHeaderText.classList.add('descriptionHeaderText');
	descriptionHeaderText.innerText = 'Description';
	descriptionHeader.appendChild(descriptionHeaderText);

	let descriptionDiv = document.createElement("DIV");
	descriptionDiv.classList.add('descriptionHeader');
	descriptionDiv.classList.add('sixthWidth');
	let descriptionP = document.createElement("P");
	descriptionP.innerText = incomingJSON['description'];
	descriptionDiv.appendChild(descriptionP);

	mainGrid.appendChild(infoBank);

	mainGrid.appendChild(descriptionHeader);

	mainGrid.appendChild(descriptionDiv);


	document.body.style.backgroundImage = 'url(' + incomingJSON['fullshot']  + ')';
	document.body.style.backgroundSize = 'cover';
}

function genLocationPage(incomingJSON) {
	let descriptionHeader = document.createElement("DIV");
	descriptionHeader.classList.add('descriptionHeader');
	descriptionHeader.classList.add('sixthWidth');
	let descriptionHeaderText = document.createElement("H2");
	descriptionHeaderText.classList.add('descriptionHeaderText');
	descriptionHeaderText.innerText = incomingJSON['name'];
	descriptionHeader.appendChild(descriptionHeaderText);

	let descriptionDiv = document.createElement("DIV");
	descriptionDiv.classList.add('descriptionHeader');
	descriptionDiv.classList.add('sixthWidth');
	let descriptionP = document.createElement("P");
	descriptionP.innerText = incomingJSON['description'];
	descriptionDiv.appendChild(descriptionP);

	let charactersHeader = document.createElement("DIV");
	charactersHeader.classList.add('descriptionHeader');
	charactersHeader.classList.add('sixthWidth');
	let charactersHeaderText = document.createElement("H2");
	charactersHeaderText.classList.add('descriptionHeaderText');
	charactersHeaderText.innerText = 'Characters';
	charactersHeader.appendChild(charactersHeaderText);

	let charactersDiv = document.createElement("DIV");
	charactersDiv.classList.add('sixthWidth');
	charactersDiv.classList.add('charactersDiv');
	for (i = 0; i < incomingJSON['characters'].length; i++) {
		createPrevLocation(incomingJSON['characters'][i], charactersDiv);
	}

	mainGrid.appendChild(descriptionHeader);

	mainGrid.appendChild(descriptionDiv);

	mainGrid.appendChild(charactersHeader);

	mainGrid.appendChild(charactersDiv);

	document.body.style.backgroundImage = 'url(' + incomingJSON['interior']  + ')';
	document.body.style.backgroundSize = 'cover';

}