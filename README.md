# bashprompt.js

[![Build Status](https://travis-ci.org/repejota/bashprompt.js.png?branch=master)](https://travis-ci.org/repejota/bashprompt.js)

![Dependencies Badge](https://david-dm.org/repejota/bashprompt.js.png)

bashprompt.js is a framework and a command line tool to create your own and
full featured prompt for bash. It is built in javascript and node.js.

Don't know about what I'm talking about? Take a look on this ancient HOWTO
<http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/>
;)

Convinced? Now see how you can get one:

## Download & Install

Install as a usual node.js package with *npm* utility:

```bash
$ npm install bashprompt
```

Note that you will also need a patched font in case you want to show
any of those unicode characters at your prompt.

If so, please choose and download a font at
<https://github.com/Lokaltog/vim-powerline/wiki/Patched-fonts>

Once you installed all this requirements you will be ready to setup and start
using bashprompt on your system. Let's start to setup the default
configuration:

Add these lines to your *.bashrc* :

```bash
function _bashPrompt() {
    export PS1="$(bp build $?)" # 2> /dev/null)"
}
# Bash provides an environment variable called PROMPT_COMMAND. The contents of this
# variable are executed as a regular Bash command just before Bash displays a prompt.
# http://www.gnu.org/software/bash/manual/bashref.html#index-PROMPT_005fCOMMAND
export PROMPT_COMMAND="_bashPrompt; $PROMPT_COMMAND"
```

## Screenshot

Here is an screenshot of my current bash prompt:

![bashprompt example](https://raw.github.com/repejota/bashprompt.js/master/doc/website/img/screenshot.png)

## Create your own prompt

To create your own prompt:

* TODO
* ..
* ..
* ..

## TODO

Want to help? There's always tasks to do!

* Look at the current issues : https://github.com/repejota/bashprompt.js/issues

## LICENSE

This utility is covered by MIT LICENSE : http://opensource.org/licenses/MIT
