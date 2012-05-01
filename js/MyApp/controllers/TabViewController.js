Ext.define( 'MyApp.controllers.TabViewController', {
    extend: 'Deft.mvc.ViewController',
    mixins: [ 'Deft.mixin.Injectable' ],
    control: {
        view: {
            closeUserView: 'onCloseUserView'
        }
    },
    onCloseUserView: function(userView){
        console.log('MyApp.controllers.TabViewController.onCloseUserView()');
        this.getView().remove(userView);
    }
});