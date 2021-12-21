# Project Enigilo

Enigilo is a [Visual Studio Code][0] extension that's sole purpose is to make it easier to insert and manage your links in Markdown files.

## How to Use It

The simplest way to insert a link would be to select some text, right click, and then select `Insert Link`. It will show an **InputBox** so you can give it the URL of your link:

![Example-1][1]

As you can see in the gif, you can also use the default `Ctrl+Shift+I` keybinding, or even change it to whatever you prefer in [keybindings.json][5]:

![Keybindings.json][2]

As usual, any and all input is welcome and much appreciated 😊

## Changelog

### 1.2.4

- Removed Webpack as it was causing issues after submission to the marketplace

### 1.2.3

- Added German and Slovenian to the available languages

### 1.2.2

- Added Brazilian Portuguese to the available languages
- Added webpack support (removed in 1.2.4)
- Fixed some typos in backend documentation
- Updated developer dependencies

### 1.2.0

- Added support for different languages
  - So far English, Spanish, and French are the only supported languages with English being the default.
  - You can set which language you'd like in your settings with the `enigilo.displayLanguage` property.
  - Changing the language does require a restart/reload of Visual Studio Code.
  - If you wish to fix any of the existing translations or add new ones, please open a PR or contact [Alcha][6]
- Fixed Enigilo from trying to insert a link when the **ESC** key is used on an **InputBox**.

[0]: http://code.visualstudio.com
[1]: https://i.imgur.com/XOLPFvF.gif
[2]: https://i.imgur.com/zOo6U4E.png
[3]: https://dev.to/link2twenty/comment/4k81
[4]: https://dev.to/link2twenty
[5]: https://code.visualstudio.com/docs/getstarted/keybindings
[6]: https://alcha.org
