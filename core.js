function go(issue) {
	chrome.storage.sync.get("options", function(val) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.update(tabs[0].id, {url: val["options"]["endpoint"]+"/secure/QuickSearch.jspa?searchString="+encodeURI(issue)});
		});
	});
}

function setOptions(options) {
	chrome.storage.sync.set({"options": options}, null);
}

// watch for "jira <issue>" entered into omnibox
chrome.omnibox.onInputEntered.addListener(function(text) { go(text); });
