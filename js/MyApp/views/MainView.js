Ext.define('MyApp.views.MainView', {
	extend: 'Ext.panel.Panel',
	requires: ['MyApp.views.ListView','MyApp.views.TabView'],
	mixins: [ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
    controller: 'MyApp.controllers.MainViewController',
	inject: {
		title: 'exampleName'
	},
	titleAlign: 'center',
	width: 700,
	height: 500,
	margin: '5 5 5 5',
	layout: {
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},
	items: [
		{
			xtype: 'ListView',
			itemId: 'listView',
			flex: 1
		},
		{
			xtype: 'splitter',
		},
		{
			xtype: 'TabView',
			itemId: 'tabView',
			flex: 2
		}
	]
});