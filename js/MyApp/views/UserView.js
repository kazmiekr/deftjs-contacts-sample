Ext.define('MyApp.views.UserView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.UserView',
	mixins: [ 'Deft.mixin.Controllable' ],
    controller: 'MyApp.controllers.UserViewController',
	config:{
		userRecord: null
	},
	initComponent: function(){
		console.log('MyApp.views.UserView.initComponent()');
		this.callParent(arguments);
		this.setTitle(this.getUserRecord().get('first'));
		this.loadRecord(this.getUserRecord());
	},
	bodyPadding: 5,
    defaults: {
        xtype: 'textfield',
        anchor: '100%'
    },
    items: [{
        fieldLabel: 'First Name',
        name: 'first'
    }, {
        fieldLabel: 'Last Name',
        name: 'last'
    }, {
        fieldLabel: 'Email',
        name: 'email'
    }],
    buttons: [{
    	itemId: 'saveButton',
        text: 'Save'
    }, {
    	itemId: 'cancelButton',
        text: 'Cancel'
    }]
});
