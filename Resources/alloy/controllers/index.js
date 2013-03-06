function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.mainWindow = Ti.UI.createWindow({
        fullscreen: !1,
        navBarHidden: !0,
        exitOnClose: !0,
        backgroundColor: "#ddd",
        id: "mainWindow",
        title: "UI Test"
    });
    $.addTopLevelView($.__views.mainWindow);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#999",
                offset: 0
            }, {
                color: "#999",
                offset: 0.008
            }, {
                color: "#666",
                offset: 0.02
            }, {
                color: "#444",
                offset: 1
            } ]
        },
        id: "__alloyId0"
    });
    $.__views.mainWindow.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "UI Test",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "50dp",
        height: "5dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#707070",
                offset: 0
            }, {
                color: "#707070",
                offset: 0.1
            }, {
                color: "#333",
                offset: 0.15
            }, {
                color: "#333",
                offset: 0.25
            }, {
                color: "#202020",
                offset: 0.3
            }, {
                color: "#2c2c2c",
                offset: 0.6
            }, {
                color: "#fff",
                offset: 0.65
            }, {
                color: "#fff",
                offset: 1
            } ]
        },
        id: "__alloyId3"
    });
    $.__views.mainWindow.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mainWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;