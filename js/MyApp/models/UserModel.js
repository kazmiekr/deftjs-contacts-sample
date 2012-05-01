Ext.define('MyApp.models.UserModel', {
	extend:'Ext.data.Model',
	fields:[
		{
			name:'id',
			type:'int',
			useNull:true
		},
		'email',
		'first',
		'last'
	]
});