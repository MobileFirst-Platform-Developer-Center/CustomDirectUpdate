/*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.
*/

function wlCommonInit(){
	WL.Client.connect({onSuccess: onConnectSuccess, onFailure: onConnectFailure});
}

function onConnectSuccess() {
	WL.Logger.debug ("Successfully connected to MobileFirst Server.");
}

function onConnectFailure() {
	WL.Logger.debug ("Failed connecting to MobileFirst Server.");
}

wl_directUpdateChallengeHandler.handleDirectUpdate = function(directUpdateData, directUpdateContext) {
	// custom WL.SimpleDialog for Direct Update
	var customDialogTitle = 'Custom Title Text';
	var customDialogMessage = 'Custom Message Text';
	var customButtonText1 = 'Update Application';
	var customButtonText2 = 'Not Now';
	
	    WL.SimpleDialog.show(customDialogTitle, customDialogMessage, 
	        [{
	            text : customButtonText1,
	            handler : function() {
	                directUpdateContext.start();
	            }
	        },
	        {
	            text : customButtonText2,
	            handler : function() {
	                wl_directUpdateChallengeHandler.submitFailure();
	            }
	        }]
	    );
	};
