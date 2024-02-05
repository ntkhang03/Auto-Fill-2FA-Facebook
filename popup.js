chrome.storage.sync.get('status', function (data) {
	if (data.status == 'on') {
		document.querySelector('input').checked = true;
	}
});

document.querySelector('#toggle').addEventListener('change', function () {
	if (this.checked) {
		chrome.storage.sync.set({
			status: 'on'
		});
	} else {
		chrome.storage.sync.set({
			status: 'off'
		});
	}
});