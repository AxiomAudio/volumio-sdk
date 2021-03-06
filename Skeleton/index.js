'use strict';

var vconf=require('v-conf');


/**
 *    My plugin. Author:
 **/
module.exports = MyPlugin;


function MyPlugin(context) {
	var self = this;

	self.context = context;
	self.config = new (vconf)();
	self.commandRouter = self.context.coreCommand;
}

/*
 ************************************* Lifecycle *************************************
 */


/*
 * This method can be defined by every plugin which needs to be informed of the startup of Volumio.
 * The Core controller checks if the method is defined and executes it on startup if it exists.
 */
MyPlugin.prototype.onVolumioStart = function () {
	var self = this;

	// TODO: Add any logic that shall be performed at startup
};

/*
 * This method is called by Volumio to correctly handle plugin stop
 */
MyPlugin.prototype.onStop = function () {

};

/*
 * This method is called by Volumio to correctly handle plugin restart
 */
MyPlugin.prototype.onRestart = function () {
	
};

/*
 * This method is called by Volumio to correctly handle plugin install
 */
MyPlugin.prototype.onInstall = function () {
	//Perform installation task if needed
};

/*
 * This method is called by Volumio to correctly handle plugin uninstall
 */
MyPlugin.prototype.onUninstall = function () {
	//Perform uninstallation task if needed
};


/*
 ************************************* Configuration *************************************
 */

/*
 * This method is called by Volumio to know how many configuration files are handled by the plugin. 
 * These are then moved to a persistent location
 */
MyPlugin.prototype.getConfigurationFiles = function () {
	var self = this;

	return ['config.json'];
};

/*
 * This method is called by Volumio to retrieve the configuration page to be displayed on the UI
 */

MyPlugin.prototype.getUIConfig = function () {
	return {success: true, plugin: "dirble"};
};

/*
 * This method is called by Volumio to save changes in configuration
 */
MyPlugin.prototype.setUIConfig = function (data) {
	//Perform your installation tasks here
};
