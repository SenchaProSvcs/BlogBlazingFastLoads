Ext.define("TMChunkCompile.controller.Main", {
    extend: 'Ext.app.Controller',

    requires: ['TMChunkCompile.view.Page2'],

    config : {
        control : {
            'main' : {
                activeitemchange : 'onMainActiveCardChange'
            }
        }
    },

    onMainActiveCardChange: function(mainPanel, newItem, oldItem) {
        var didMask = false;
        
        // Skip if not "Next Card"
        if (newItem.getItemId() !== 'nextCard') {
            return;
        }

        // Skip if 2nd page loaded already
        if (newItem.down('page2')) {
            return;
        }
        
        // If this is a built app, we need to load page2 JS dynamically
        if (TMChunkCompile.isBuilt && !TMChunkCompile.view.Page2) {
            // show spinner
            mainPanel.setMasked(true);
            didMask = true;

            // synchronously load JS
            Ext.Loader.loadScriptFile(
                'page2.js',
                function() {
                    console.log('SUCCESS');
                },
                function() {
                    console.log('FAIL');
                },
                this,
                true
            );
        }

        // Show "Page 2" view
        newItem.add({ xtype: 'page2' });

        // hide spinner
        if (didMask) {
            mainPanel.setMasked(false);
        }
    }
});
