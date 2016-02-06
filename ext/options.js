document.addEventListener('DOMContentLoaded', function() {
	load();

	document.getElementById("save").addEventListener("click", function(ev) { save() });
	document.getElementById("cancel").addEventListener("click", function(ev) { window.close() });
});

function save() {
	opts = {
		"endpoint": document.getElementById("endpoint").value
	}

	setOptions(opts);

	window.close();
}

function load() {
	chrome.storage.sync.get("options", function(val) {
		document.getElementById("endpoint").value = val["options"]["endpoint"];
	});
}
