Ext.define('MyApp.views.TabView', {
	extend: 'Ext.TabPanel',
	alias: 'widget.TabView',
	mixins: [ 'Deft.mixin.Controllable', 'Deft.mixin.Injectable' ],
    controller: 'MyApp.controllers.TabViewController',
    requires: ['MyApp.views.UserView'],
	addTab: function(record){
		// This would be cool to forward to a viewcontroller
		console.log('MyApp.views.TabView.addTab()');
		var newTab = this.add({
			userRecord: record,
			xtype: 'UserView',
			closable: true
		});
		this.setActiveTab(newTab);
	}
});