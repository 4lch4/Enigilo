# Project Enmeti

Enmeti is a [Visual Studio Code][0] extension that's sole purpose is to make it easier to insert and manage your links in Markdown files.

## How to Use It

The simplest way to insert a link would be to select some text, right click, and then select `Insert Link`. It will show an **InputBox** so you can give it the URL of your link:

![Example-1][1]

As you can see in the gif, you can also use the default `Ctrl+Alt+I` keybinding, or even change it to whatever you prefer in [keybindings.json][7]:

![Keybindings.json][2]

## Up Next (2018/08/20)

Thanks to [a great suggestion][3] by [Andrew Bone][4], my next step is to make it so you can insert images similarly to how links are inserted. What I'm thinking is something along the lines of:

- Select the text to turn into an image
- Execute the command (`Ctrl+Shift+I`)
- Input the path to the image in an **InputBox**
- Add the reference to the image at the end just as we do links

As usual, any and all input is welcome and much appreciated 😊

[0]: http://code.visualstudio.com
[1]: https://i.imgur.com/1XHFVoq.gif
[2]: https://i.imgur.com/7NKAy7e.png
[3]: https://dev.to/link2twenty/comment/4k81
[4]: https://dev.to/link2twenty