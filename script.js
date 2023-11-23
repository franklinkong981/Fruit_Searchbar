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
let currentSearch = searchBar.value;
searchBar.addEventListener("keyup", (event) => {
	//If user presses a key that doesn't change what's currently typed into the search bar, don't update suggestions. 
	if (event.target.value !== currentSearch) {
		updateCurrentSearch(event.target.value);
		clearSuggestions(); //Delete all existing suggestions in DOM to reset it.
		if (currentSearch !== "") { //No suggestions if search bar is empty
			findAndDisplay(event.target.value.toLowerCase());
		}
	}
}); 

suggestionsList.addEventListener("click", (event) => {
	if (event.target.tagName === "LI") {
		useSuggestion(event.target.innerText);
		clearSuggestions();
		searchBar.focus(); //So user doesn't need to click on search bar again to modify search.
	}
});

function updateCurrentSearch(currentSearchValue) {
	currentSearch = currentSearchValue;
}

function findAndDisplay(searchBarValue) { //filter and display dropdown suggestions each time value in fruit search bar changes.
	const matchingSuggestions = findMatchingSuggestions(searchBarValue);
	const suggestionList = createSuggestionList(matchingSuggestions); 
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

function displaySuggestions(suggestionList) { //add all suggestion HTMLElements to the DOM so they're visible.
	for (suggestion of suggestionList) {
		suggestionsList.append(suggestion);
	}
}

function useSuggestion(suggestionText) {
	searchBar.value = suggestionText;
} 

function clearSuggestions() {
	const suggestionsToClear = suggestionsList.children;
	for (let i = suggestionsToClear.length - 1; i >= 0; i--) {
		suggestionsToClear[i].remove();
	}
}




