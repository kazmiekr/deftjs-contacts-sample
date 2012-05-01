Ext.define('MyApp.views.ListView', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.ListView',
	requires : ['MyApp.stores.UserStore'],
	mixins: [ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
    controller: 'MyApp.controllers.ListViewController',
	title: 'Contact List',
	inject: {
        store: 'userStore'
    },
    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'email'
    }],
    tools: [{
         xtype: 'tool',
         itemId: 'refreshButton',
         type: 'gear'
     }]
});