# bashprompt.js

A bash prompt framework in node.js.

## Download & Install

Install as a usual node.js package with *npm* utility:

~~~~~~~~
$ npm install bashprompt
~~~~~~~~

Note that you will also need for a pactched font in case you want to show unicode characters on
your prompt. If so, please choose and download a font at
https://github.com/Lokaltog/vim-powerline/wiki/Patched-fonts.

## Usage

Add these lines to your *.bashrc*.

~~~~~~~~
function _bashPrompt() {
    export PS1="$(bp build $?)" # 2> /dev/null)"
}
# Bash provides an environment variable called PROMPT_COMMAND. The contents of this
# variable are executed as a regular Bash command just before Bash displays a prompt.
# http://www.gnu.org/software/bash/manual/bashref.html#index-PROMPT_005fCOMMAND
export PROMPT_COMMAND="_bashPrompt; $PROMPT_COMMAND"
~~~~~~~~

## TODO

* Look at the current issues : https://github.com/repejota/bashprompt.js/issues

## LICENSE

This utility is covered by MIT LICENSE : http://opensource.org/licenses/MIT
