Ext.define('ModernApp.view.main.center.CenterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.centerviewcontroller',

    onSelectionChange: function(selectable, records, selecting, selection) {

        var inputField = this.lookup('newName'),
            addFileButton = this.lookup('addFileButton'),
            addFolderButton = this.lookup('addFolderButton'),
            deleteButton = this.lookup('deleteButton'),
            selectedNode;

        if (selection.getCount()) {
            selectedNode = records[0];
            if (selectedNode.data.text === "Root") {
                deleteButton.disable();
            } else {
                deleteButton.enable();
            }
            if (selectedNode.data.leaf) {
                inputField.disable();
                addFileButton.disable();
                addFolderButton.disable();
            } else {
                inputField.enable();
                addFileButton.enable();
                addFolderButton.enable();
            }
        }
    },

    onFieldAction: function(field, e) {
        if (e.ENTER === e.getKey()) {
            this.addFile();
        }
    },

    addFile: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('newName'),
            value = inputField.getValue(),
            node;

        if (value) {
            if (store.getNodeById(value)) {
                return Ext.Msg.alert('Error', 'A node with this name already exists.');
            }
            node = {
                text: value
            };
            node.leaf = true;
            node = target.appendChild(node);
            tree.ensureVisible(node.getPath(null, false), {
                select: true,
                focus: true
            });
            inputField.reset();
        }
    },

    addFolder: function() {
        var tree = this.getView(),
            store = tree.getStore(),
            target = tree.getSelections()[0] || store.getRoot(),
            inputField = this.lookup('newName'),
            value = inputField.getValue(),
            node;

        if (value) {
            if (store.getNodeById(value)) {
                return Ext.Msg.alert('Error', 'A node with this name already exists.');
            }
            node = {
                text: value
            };
            node.leaf = false;
            node = target.appendChild(node);
            tree.ensureVisible(node.getPath(null, false), {
                select: true,
                focus: true
            });
            inputField.reset();
        }
    },

    deleteItem: function() {
        var tree = this.getView(),
            node = tree.getSelections()[0];
        if (node) {
            node.remove(true);
        }
    }
});