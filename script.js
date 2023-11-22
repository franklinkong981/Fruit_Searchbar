const fruits = [
	'Apple', 
	'Apricot', 
	'Avocado', 
	'Banana', 
	'Bilberry', 
	'Blackberry', 
	'Blackcurrant', 
	'Blueberry', 
	'Boysenberry', 
	'Currant', 
	'Cherry', 
	'Coconut', 
	'Cranberry', 
	'Cucumber', 
	'Custard apple', 
	'Damson', 
	'Date', 
	'Dragonfruit', 
	'Durian', 
	'Elderberry', 
	'Feijoa', 
	'Fig', 
	'Gooseberry', 
	'Grape', 
	'Raisin', 
	'Grapefruit', 
	'Guava', 
	'Honeyberry', 
	'Huckleberry', 
	'Jabuticaba', 
	'Jackfruit', 
	'Jambul', 
	'Juniper berry', 
	'Kiwifruit', 
	'Kumquat', 
	'Lemon', 
	'Lime', 
	'Loquat', 
	'Longan', 
	'Lychee', 
	'Mango', 
	'Mangosteen',
	'Marionberry', 
	'Melon', 
	'Cantaloupe', 
	'Honeydew', 
	'Watermelon', 
	'Miracle fruit', 
	'Mulberry', 
	'Nectarine', 
	'Nance', 
	'Olive', 
	'Orange', 
	'Clementine',
	'Mandarine', 
	'Tangerine', 
	'Papaya', 
	'Passionfruit', 
	'Peach', 
	'Pear', 
	'Persimmon', 
	'Plantain', 
	'Plum', 
	'Pineapple', 
	'Pomegranate', 
	'Pomelo', 
	'Quince', 
	'Raspberry', 
	'Salmonberry', 
	'Rambutan', 
	'Redcurrant', 
	'Salak', 
	'Satsuma', 
	'Soursop', 
	'Star fruit', 
	'Strawberry', 
	'Tamarillo', 
	'Tamarind', 
	'Yuzu'
];

const searchBar = document.getElementById("search-bar");
const suggestionsList = document.getElementById("suggestions-list");
searchBar.addEventListener("keyup", (event) => {
	if (event.key !== "Shift") {
		const currentSearchValue = event.target.value;
		clearSuggestions(); //Delete all existing suggestions in DOM to reset it.
		if (currentSearchValue !== "") { //No suggestions if search bar is empty
			findAndDisplay(event.target.value.toLowerCase());
		}
	}
}); 

function findAndDisplay(searchBarValue) { //filter and display dropdown suggestions each time value in fruit search bar changes.
	const matchingSuggestions = findMatchingSuggestions(searchBarValue);
	const suggestionList = createSuggestionList(matchingSuggestions); //suggestion HTMLElements without event listeners.
	addClickEvents(suggestionList);
	displaySuggestions(suggestionList);
}

function findMatchingSuggestions(searchBarValue) { //filter fruits array to return all entries that contain current value in the search bar.
	return fruits.filter((value) => value.toLowerCase().includes(searchBarValue));
}

function createSuggestionList(matchingSuggestions) { //creates a list item HTMLElement for each of the filtered suggestions.
	return matchingSuggestions.map((value) => {
		const suggestion = document.createElement("li");
		suggestion.innerText = value;
		suggestion.classList.add("suggestion");
		return suggestion;
	});
}

function addClickEvents(suggestionList) { //Add an Event Listener to each suggestion that will populate search bar with suggestion when clicked.
	suggestionList.forEach((value) => {
		value.addEventListener("click", (event) => {
			useSuggestion(event.target.innerText);
			clearSuggestions();
		});
	});
}

function useSuggestion(suggestionText) { 
	searchBar.value = suggestionText;
}

function displaySuggestions(suggestionList) { //add all suggestion HTMLElements to the DOM so they're visible.
	for (suggestion of suggestionList) {
		suggestionsList.append(suggestion);
	}
}

function clearSuggestions() {
	const suggestionsToClear = suggestionsList.children;
	for (let i = suggestionsToClear.length - 1; i >= 0; i--) {
		suggestionsToClear[i].remove();
	}
}




