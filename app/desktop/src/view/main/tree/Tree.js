Ext.define('ModernApp.view.main.Tree', {
    extend: 'Ext.grid.Tree',
    xtype: 'tree',
    title: 'Проводник',

    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Editable'
    ],

    height: 400,
    width: 300,

    bind: {
        store: '{treeData}'
    },

    plugins: {
        gridcellediting: true
    },

    columns: [{
        xtype: 'treecolumn',
        text: 'Название',
        flex: 1,
        dataIndex: 'text',
        editable: true
    }]
});
