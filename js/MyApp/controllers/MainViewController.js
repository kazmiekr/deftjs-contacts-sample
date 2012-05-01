Ext.define('MyApp.controllers.MainViewController', {
	extend:'Deft.mvc.ViewController',
	mixins:[ 'Deft.mixin.Injectable' ],
	control:{
		tabView:{
			closeUserView:'onCloseUserView'
		},
		listView:{
			userSelected:'onSelectedRow'
		}
	},
	onSelectedRow:function (record) {
		console.log('MyApp.controllers.MainViewController.onSelectedRow()');
		this.getTabView().addTab(record);
	},
	onCloseUserView:function (userView) {
		// TODO: This currently never fires
		console.log('MyApp.controllers.MainViewController.onCloseUserView()');
		this.getView().remove(userView);
	}
});