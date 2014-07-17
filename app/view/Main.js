Ext.define('ChunkCompile.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
            xtype      : 'container',
            title      : 'Welcome',
            iconCls    : 'home',
            scrollable : true,
            html       : 'Switch to next card for dynamic JS load...',
            items: {
                docked : 'top',
                xtype  : 'titlebar',
                title  : 'Welcome to Sencha Touch 2'
            }
        },{
            xtype   : 'container',
            title   : 'NEXT CARD',
            itemId  : 'nextCard',
            iconCls : 'action',
            layout  : 'fit',
            items: [{
                docked : 'top',
                xtype  : 'titlebar',
                title  : '"Next Card"'
            }]
        }]
    }
});
