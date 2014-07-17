# See full list of options: http://docs.sencha.com/extjs/4.2.1/#!/guide/command_app_multi

sencha compile -classpath=touch/src \
    union -r --file=app.js and  \
    save allcode and \
\
    exclude -all and \
    include -tag Page2  and \
    include --namespace Ext.dataview and \
    concat -cl build/chunked/page2.js and \
\
    restore allcode and \
    exclude -tag Page2  and \
    exclude --namespace Ext.dataview and \
    concat -cl build/chunked/all-common-classes.js

# Insert "Build indicator" into code
echo "TMChunkCompile.isBuilt = true;" >> build/chunked/all-common-classes.js


# some other options

# restore asp and \
# exclude -set boot,common and \
# concat -out build/ttt.js and \
# \
# restore zzz and \
# exclude -set boot,common and \
# concat -out build/zzz.js and \
# \
# restore sdfg and \
# exclude -set boot,common and \
# concat -out build/sdfg.js and \
# \
# restore sdf and \
# exclude -set boot,common and \
# concat -out build/sdf.js and \