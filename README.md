# volumio-sdk

This repository contains the Volumio SDK. The purpose of this plugin is to give developers means for developing third party plugins that can run inside the Volumio2 software.

## SDK structure

The SDK is composed of the following items:

*	A plugin skeleton for rapid startup of development
*	[API Documentation](Docs/API-main.md "API Documentation") 
*	A tester application for testing

## Development flow

It is expected that every developer follow the below steps before publishing a plugin:

*	Start a project by using the skeleton (Optional step)
*	Develop plugin lifecycle methods
*	Test the plugin by using the Plugin-Checker
*	Complete plugin internal logic
*	Test in a Volumio instance
*	Publish plugin

## Using the plugin skeleton

A developer can boost its development by using the skeleton that this SDK provides. The skeleton implements some of the plugin logic that is related to its lifecycle. 

To start simply copy the folder Skeleton to a proper directory and rename it.
Open into your editor and start developing!

