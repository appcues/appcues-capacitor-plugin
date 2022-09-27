#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(AppcuesPlugin, "Appcues",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(version, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(identify, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(group, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(anonymous, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(screen, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(track, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(show, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(debug, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(reset, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(didHandleURL, CAPPluginReturnPromise);
)
