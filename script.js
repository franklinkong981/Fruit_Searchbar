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
		clearSuggestions(); //Delete all existing suggestions in DOM to reset suggestion list.
		if (currentSearch !== "") { //No suggestions if search bar is empty
			findAndDisplaySuggestions(event.target.value.toLowerCase());
		}
	}
}); 

suggestionsList.addEventListener("click", (event) => {
	if (event.target.tagName === "LI" || event.target.parentElement.tagName === "LI") { //user might press bolded part of suggestion.
		if (event.target.tagName === "LI") {
			useSuggestion(event.target.innerText); //innerText ignores <em> and </em>.
			updateCurrentSearch(event.target.innerText);
		}
		else {
			useSuggestion(event.target.parentElement.innerText);
			updateCurrentSearch(event.target.parentElement.innerText);
		}
		clearSuggestions();
		searchBar.focus(); //So user doesn't need to click on search bar again to modify search.
	}
});

function updateCurrentSearch(currentSearchValue) {
	currentSearch = currentSearchValue;
}

function findAndDisplaySuggestions(searchBarValue) { //filter and display dropdown suggestions each time value in search bar changes.
	const matchingSuggestions = findMatchingSuggestions(searchBarValue);
	const suggestionList = createSuggestionList(matchingSuggestions, searchBarValue); 
	displaySuggestions(suggestionList);
}

function findMatchingSuggestions(searchBarValue) { //filter fruits array to return all entries that contain current value in the search bar.
	return fruits.filter((value) => value.toLowerCase().includes(searchBarValue));
}

function createSuggestionList(matchingSuggestions, searchBarValue) { //creates a list item HTMLElement for each of the filtered suggestions.
	return matchingSuggestions.map((value) => {
		const suggestion = document.createElement("li");
		suggestion.innerHTML = boldSuggestion(value, searchBarValue);
		suggestion.classList.add("suggestion");
		return suggestion;
	});
}

function boldSuggestion(suggestionText, partToBold) { //returns HTML that bolds the substring in the suggestion that matches the current value in the search bar.
	let boldIndex = suggestionText.toLowerCase().indexOf(partToBold);
	let unboldIndex = suggestionText.toLowerCase().indexOf(partToBold) + partToBold.length;
	return suggestionText.slice(0, boldIndex) + "<em>" + suggestionText.slice(boldIndex, unboldIndex) + "</em>" + suggestionText.slice(unboldIndex);
}

function displaySuggestions(suggestionList) { //add all suggestion HTMLElements to the DOM so they're visible.
	for (suggestion of suggestionList) {
		suggestionsList.append(suggestion);
	}
}

function useSuggestion(suggestionText) { //updates search bar with suggestion that was clicked.
	searchBar.value = suggestionText;
} 

function clearSuggestions() {
	const suggestionsToClear = suggestionsList.children;
	for (let i = suggestionsToClear.length - 1; i >= 0; i--) {
		suggestionsToClear[i].remove();
	}
}




