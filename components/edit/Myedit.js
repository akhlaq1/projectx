/**
 * Created by Akhlaq on 7/5/2015.
 */

app = angular.module('myApp.edit', []);
app.controller("EditController",function($routeParams,service1){


    this.get=service1.getArray;
    var array = this.get

  var  Newid = $routeParams.id;
    this.indexOfArray = Newid;

    this.person = array.$getRecord(Newid)


});
