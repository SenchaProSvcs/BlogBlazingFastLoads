# Special Folder
Note that build/chunked folder is included to demonstrate using build.sh for running "sencha compile". You can immediately preview the behavior by running the index.html from there.
Running build.sh will recompile the JS files in build/chunked.

# Normal Sencha CMD Build
You can run index.html in the root (aka dev mode) - does not demonstrate the technique.
For a standard build run any of the following:
* sencha app build
* sencha app build package
* sencha app build testing

At this point you can run the actual built app from build/[production|package|testing]

* I used Sencha Cmd v5.0.0.160