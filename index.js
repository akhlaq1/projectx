/**
 * Created by Akhlaq on 5/21/2017.
 */
/**
 * Created by 192.168.3.11 on 6/7/2015.
 */
var app = angular.module("myApp",['firebase','ngMaterial','ngMessages','ngNewRouter','myApp.add','myApp.view','myApp.edit','myApp.home']);



app.controller("ctrl1",function($router){

    $router.config([

        {path : '/',        redirectTo:'home'},
        {path : '/home',        component:'home'},
        {path : '/add',    component:'add'},
        {path:'/view',   component:'view'},
        {path:'/edit/:id',   component:'edit'}
    ])



})

app.service('service1',function($firebaseArray){

    var messagesRef = new Firebase("https://projectx-46350.firebaseio.com/universities");
    var array = $firebaseArray(messagesRef);
    var main_arr =[];



    this.pushArray = function(object){
        main_arr.push(object);
        array.$add(object)
    }
    this.getArray = function(){
        return array
    }

})



