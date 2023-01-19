Ext.define('ModernApp.view.main.center.CenterViewStore', {
    extend: 'Ext.data.TreeStore',

    proxy: {
        type: 'ajax',
        reader: 'json',
        url: 'resources/desktop/tree.json'
    },

    lazyFill: false
});