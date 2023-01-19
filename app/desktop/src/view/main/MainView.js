Ext.define('ModernApp.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    viewModel: {
        type: 'mainviewmodel'
    },
    requires: [
    'Ext.layout.Fit'
    ],
    layout: 'fit',
    items: [
        { xtype: 'centerview', reference: 'centerview' },
    ]
});
