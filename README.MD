<h1 align="center"><img src="./images/icon512.png" width="22px"> Auto Fill 2FA for Facebook</h1>

<p align="center">
  <img alt="visitors" src="https://visitor-badge.laobi.icu/badge?style=flat-square&page_id=ntkhang3.Auto-Fill-2FA-Facebook">
  <img alt="size" src="https://img.shields.io/badge/license-MIT-green?style=flat-square&color=brightgreen">
</p>

## Description

**Auto Fill 2FA for Facebook** is a Chrome extension designed to automatically retrieve and fill in 2FA codes for Facebook when you type the key into the "approvals_code" input field. This extension simplifies the process of entering 2FA codes, making it more convenient for users.

## Author

- NTKhang

## Features

- Automatically retrieves and fills in 2FA codes on Facebook.
- Enhances the user experience by reducing manual input for 2FA.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the folder where you cloned or downloaded the extension.

## Usage

1. Open Facebook in your Chrome browser.
2. Navigate to the page where you need to enter the 2FA code.
3. Start typing your 2FA key in the "approvals_code" input field.
4. The extension will automatically append `2FA code` to the end of the input if the length is 32 characters.

## Permissions

- activeTab
- storage

## Icons

- The extension comes with various icons to match different sizes (16px, 32px, 48px, 64px, 128px, 256px).

## Content Scripts

- The extension injects scripts into Facebook pages (`https://www.facebook.com/*`, `https://m.facebook.com/*`, `https://facebook.com/*`, `https://mbasic.facebook.com/*`) to monitor and modify the 2FA input field.

## Version

- 1.0

## Troubleshooting

If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/ntkhang03/Auto-Fill-2FA-Facebook/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
