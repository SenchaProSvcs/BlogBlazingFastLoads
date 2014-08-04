# See full list of options: http://docs.sencha.com/extjs/4.2.1/#!/guide/command_app_multi

sencha compile \
        union --recursive --file=app.js and  \
        save allcode and \
    \
        exclude --all and \
        include --tag Page2  and \
        include --namespace Ext.dataview and \
        save page2 and \
    \
        concat -y build/chunked/page2.js and \
    \
        restore allcode and \
        exclude --set page2  and \
    \
        concat -y build/chunked/rest-of-app-and-touch.js

# Insert "Build indicator" into code
echo "ChunkCompile.isBuilt = true;" >> build/chunked/rest-of-app-and-touch.js