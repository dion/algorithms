var dataStructure = [];


// push each unique letter into a obj and add counter
function createObj (input) {
	for (var i = 0, len = input.length; i < len; i++) {
		var character = input[i];

		if (!findCharacter(character)) {
			dataStructure.push({
				char: character,
				numTimes: 1
			});
		} else {
			findCharacter(character).numTimes++;
		}
	}

	console.log(dataStructure);
}

function findCharacter (query) {
	for (var i = 0, len = dataStructure.length; i < len; i++) {
		if (dataStructure[i].char == query) {
			return dataStructure[i];
		}
	}

	return false;
}

createObj('batman');