
var DigiCDC_deviceIsReady = 0;
var DigiCDC = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        digicdc.register(function success(msg){
            console.log(msg);
            DigiCDC_deviceIsReady = 1;
        }, function error(){});

         
    },
    write: function(message){
        if(DigiCDC_deviceIsReady)
            digicdc.write(message, function success(){
                textelement = document.getElementById("chat");
                textelement.innerHTML = textelement.innerHTML + "\nSENT:" + message;

            }, function error(){});
        else
            return false;

    },
    read: function(){
        if(DigiCDC_deviceIsReady)
            digicdc.read(function success(msg){
                textelement = document.getElementById("chat");
                textelement.innerHTML = textelement.innerHTML + "\nREC:" + msg;
            }, function error(){});
        else
            return false;

    }

};
