/**
 * Created by 192.168.3.15 on 6/13/2015.
 */

app = angular.module('myApp.view',[])
app.controller('ViewController',function(service1,$interval){

    


    var array = service1.getArray()
    this.array2 = array


    this.remove = function (index) {
        array.$remove(index)
    };


console.log(array)


})