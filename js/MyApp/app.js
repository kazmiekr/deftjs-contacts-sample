Ext.Loader.setConfig({
	enabled:true,
	paths:{
		'MyApp':'js/MyApp'
	}
});

Ext.onReady(function () {

	Deft.Injector.configure({
		userStore:'MyApp.stores.UserStore',
		exampleName:{
			value:'Simple IoC and ViewController Example with DeftJS'
		},
		exampleVersion:{
			value:1.0
		}
	});

	Ext.create('MyApp.views.MainView', {
		renderTo:Ext.getBody()
	});
});