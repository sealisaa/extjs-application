Ext.define('ModernApp.view.main.center.CenterView', {
	extend: 'Ext.grid.Tree',
	xtype: 'centerview',
	title: 'Проводник',
	controller: 'centerviewcontroller',

	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.grid.plugin.Editable',
		'Ext.grid.plugin.TreeDragDrop'
	],

	height: 600,
	width: 300,

	bind: {
		store: '{treeData}'
	},

	plugins: {
		gridcellediting: true,
		treedragdrop: true
	},

	selectable: {
		deselectable: true
	},

	listeners: {
		selectionchange: 'onSelectionChange'
	},

	columns: [{
		xtype: 'treecolumn',
		text: 'Название',
		flex: 1,
		dataIndex: 'text',
		editable: true
	}],

	items: [{
		xtype: 'toolbar',
		docked: 'top',
		items: [{
			xtype: 'textfield',
			reference: 'newName',
			listeners: {
				action: 'onFieldAction'
			}
		}, {
			reference: 'addFileButton',
			text: '+ Новый файл',
			handler: 'addFile'
		}, {
			reference: 'addFolderButton',
			text: '+ Новая папка',
			handler: 'addFolder'
		}, {
			reference: 'deleteButton',
			text: 'Удалить',
			handler: 'deleteItem'
		}]
	}]
});
