function processInput() {
	// get value from chrome storage
	chrome.storage.sync.get('status', function (data) {
		if (data.status == 'on') {
			let inputElement;
			// mbasic.facebook.com
			if (document.getElementById("approvals_code")) {
				inputElement = document.getElementById("approvals_code");
			}
			// www.facebook.com
			else if (window.location.href.includes("facebook.com/two_step_verification/two_factor")) {
				inputElement = document.getElementById(":r7:");
			}
			// m.facebook.com
			else if (
				document.cookie.split(";").find((x) => x.includes("checkpoint"))
				&& document.querySelector(`input[data-bloks-name="bk.components.TextInput"]`)
			) {
				inputElement = document.querySelector(`input[data-bloks-name="bk.components.TextInput"]`);
			}
			else {
				console.log("No input element found.");
			}

			if (
				inputElement
				&& (
					inputElement.value?.length === 32
					|| inputElement.value?.split(" ").every((x) => x.length === 4)
				)
			) {
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
				inputElement.dispatchEvent(new Event("input", { bubbles: true }));
			}
		}
	});
}

// Bắt sự kiện khi trang được tải hoặc có sự kiện khác
document.addEventListener("DOMContentLoaded", processInput);
document.addEventListener("input", processInput);