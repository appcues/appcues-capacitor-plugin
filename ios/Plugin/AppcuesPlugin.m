#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(AppcuesPlugin, "Appcues",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(identify, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(screen, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(track, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(show, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(debug, CAPPluginReturnPromise);
)
