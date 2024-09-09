sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("exp.controller.ERP", {
        onBack: function () {
            const onRount=this.getOwnerComponent().getRouter();
            onRount.navTo("RouteEXP")
        }
    });
});
