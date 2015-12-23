/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var Messages = {
	headerText: "Default header",
	actionsLabel: "Default action label",
	sampleText: "Default sample text",
	englishLanguage : "English",
	frenchLanguage : "French",
	russianLanguage : "Russian",
	hebrewLanguage : "Hebrew"
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
    WL.client.checkForDirectUpdate();
}

wl_directUpdateChallengeHandler.handleDirectUpdate = function(directUpdateData, directUpdateContext) {
	// custom text for the dialog
	var customDialogTitle = 'Custom Title Text';
	var customDialogMessage = 'Custom Message Text';
	var customButtonText1 = 'Update Application';
	var customButtonText2 = 'Not Now';

	// Create dialog
	navigator.notification.confirm(
	    'Custom Message Text', 
	     onClick,
	    'Custom Title Text',
	    ['Update','Cancel']
	);
};

// Handle dialog buttons
function onClick(buttonIndex) {
	if (buttonIndex == 1) {
		directUpdateContext.start();
	} else {
		wl_directUpdateChallengeHandler.submitFailure();
	}
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
	
	// Update the DOM on a received event.
	receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
	}
};

app.initialize();
