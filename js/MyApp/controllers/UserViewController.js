Ext.define('MyApp.controllers.UserViewController', {
	extend:'Deft.mvc.ViewController',
	mixins:[ 'Deft.mixin.Injectable' ],
	config:{
		userRecord:null
	},
	control:{
		saveButton:{
			click:'onSaveClick'
		},
		cancelButton:{
			click:'onCancelClick'
		}
	},
	onCancelClick:function () {
		console.log('MyApp.controllers.UserViewController.onCancelClick()');
		//TODO: This doesn't work
		this.getView().fireEvent('closeUserView', this.getView());
	},
	onSaveClick:function () {
		console.log('MyApp.controllers.UserViewController.onSaveClick()');
		//TODO: How can I reference the user record?
		console.log(this.getView().getUserRecord().get('first'));
	}
});