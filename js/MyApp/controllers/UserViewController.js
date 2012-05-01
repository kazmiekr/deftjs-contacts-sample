Ext.define( 'MyApp.controllers.UserViewController', {
    extend: 'Deft.mvc.ViewController',
    mixins: [ 'Deft.mixin.Injectable' ],
    config:{
        userRecord: null
    },
    control: {
    	saveButton: {
    		click: 'onSaveClick'
    	},
    	cancelButton: {
    		click: 'onCancelClick'
    	}
    },
    onCancelClick: function(){
    	console.log('MyApp.controllers.UserViewController.onCancelClick()');
        console.log(this.getView().hasListener('closeUserView'));
        //console.log(this.getView().fireEvent('closeUserView', this.getView()));
    },
    onSaveClick: function(){
    	console.log('MyApp.controllers.UserViewController.onSaveClick()');
        console.log(this.getView().getUserRecord().get('first'));
    }
});