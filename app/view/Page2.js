// @tag Page2
Ext.define('TMChunkCompile.view.Page2', {
    extend   : 'Ext.Container',
    xtype    : 'page2',
    requires : [
        'Ext.layout.VBox',
        'Ext.List',
        'TMChunkCompile.view.CustomComponent'
    ],
    config: {
        layout : 'vbox',
        items  : [{
            xtype: 'customcomponent'
        },{
            xtype   : 'list',
            flex    : 1,
            itemTpl : '{title}',
            data    : [
                { title: 'Item 1' },
                { title: 'Item 2' },
                { title: 'Item 3' },
                { title: 'Item 4' }
            ]
        }]
    } 
});
