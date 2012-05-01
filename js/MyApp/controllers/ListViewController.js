Ext.define( 'MyApp.controllers.ListViewController', {
    extend: 'Deft.mvc.ViewController',
    mixins: [ 'Deft.mixin.Injectable' ],
    inject: [ 'userStore' ],
    config: {
    	userStore: null
    },
    control: {
    	view: {
    		listeners: {
    			select: 'onSelect'
    		}
    	},
    	refreshButton: {
    		click: 'onRefreshClick'
    	}
    },
    onRefreshClick: function(){
    	console.log('MyApp.controllers.ListViewController.onRefreshClick()');
    	this.getUserStore().load();
    },
    onSelect: function(theView, record, index, eOpts){
    	console.log('MyApp.controllers.ListViewController.onSelect()');
        console.log(this.getView().hasListener('userSelected123'));
    	this.getView().fireEvent('userSelected123', record);
    }
});