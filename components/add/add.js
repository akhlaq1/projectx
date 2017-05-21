/**
 * Created by 192.168.3.15 on 6/13/2015.
 */


app = angular.module('myApp.add',[])
app.controller('AddController',function(service1){


    this.data = function(){

       var objData = {
            name: this.name,
            age: this.age,
            email: this.email

        }
        this.state = 'private'

        console.log(this.state)


        service1.pushArray(objData)


        this.name = ""
            this.age = ""
            this.email = ""

        }
    console.log('add successfull !')


})