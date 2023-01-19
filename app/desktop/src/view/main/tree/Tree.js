Ext.define('ModernApp.view.main.Tree', {
    extend: 'Ext.grid.Tree',
    xtype: 'tree',
    title: 'Проводник',

    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Editable',
        'Ext.grid.plugin.TreeDragDrop'
    ],

    height: 400,
    width: 300,

    bind: {
        store: '{treeData}'
    },

    rootVisible: true,

    plugins: {
        gridcellediting: true,
        treedragdrop: true
    },

    columns: [{
        xtype: 'treecolumn',
        text: 'Название',
        flex: 1,
        dataIndex: 'text',
        editable: true
    }]
});
