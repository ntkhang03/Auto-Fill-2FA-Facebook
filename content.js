function processInput() {
	// get value from chrome storage
	chrome.storage.sync.get('status', function (data) {
		if (data.status == 'on') {
			const inputElement = document.getElementById("approvals_code");

			if (inputElement && inputElement.value.length === 32) {
				const code2FATemp = inputElement.value;

				const code2FA = isNaN(code2FATemp) ?
					TOTP.TOTP.generate(
						code2FATemp.normalize("NFD")
							.toLowerCase()
							.replace(/[\u0300-\u036f]/g, "")
							.replace(/[đ|Đ]/g, (x) => x == "đ" ? "d" : "D")
							.replace(/\(|\)|\,/g, "")
							.replace(/ /g, "")
					) :
					code2FATemp;

				inputElement.value = code2FA.otp;
			}
		}
	});
}

// Bắt sự kiện khi trang được tải hoặc có sự kiện khác
document.addEventListener("DOMContentLoaded", processInput);
document.addEventListener("input", processInput);