Ext.define('MyApp.stores.UserStore', {
	extend:'Ext.data.Store',
	requires:['MyApp.models.UserModel'],
	model:'MyApp.models.UserModel',
	autoLoad:true,
	proxy:{
		type:'ajax',
		url:'data/users.json',
		reader:{
			type:'json',
			root:'data'
		}
	}
});