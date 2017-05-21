/**
 * Created by Umair on 6/28/2015.
 */
var app=angular.module('myApp.edit',[]);
app.controller('EditController', function (service1,$routeParams,$location) {
    this.get=service1.getArray();

    var id = $routeParams.id;
    var ind = $routeParams.ind;
    var updatedUser = this.get.$getRecord(id);
console.log("this is variable id "+id);


    console.log("this is variable $index "+ind);



    this.person = updatedUser;


    this.update= function () {

        this.get.$save(this.person)
        setTimeout(function(){console.log("Data updated")},1000);


    }
});


