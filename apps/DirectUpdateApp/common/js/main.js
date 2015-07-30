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
