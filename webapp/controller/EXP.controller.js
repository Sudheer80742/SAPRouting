sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast"
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("exp.controller.EXP", {
        onNext: function () {
            const username=this.getView().byId("uname").getValue();
            const password=this.getView().byId("pword").getValue();
            if(username==="Sudheer" && password==="lakshmi"){
                MessageToast.show("Login Success");
            const onRount=this.getOwnerComponent().getRouter();
            onRount.navTo("RouteERP");
        }
        else{
            alert("Incorrect credentials");
        }
        },
        onFree:function(){
            const username=this.getView().byId("uname").setValue("");
            const password=this.getView().byId("pword").setValue("");
        }
    });
});
