import Foundation
import Capacitor
import AppcuesKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(AppcuesPlugin)
public class AppcuesPlugin: CAPPlugin {
    
    private var implementation: Appcues?
               
    @objc func initialize(_ call: CAPPluginCall) {
        guard let accountID = call.getString("accountId") else { return call.reject("Missing account ID") }
        guard let applicationID = call.getString("applicationId") else { return call.reject("Missing application ID") }

        let config = Appcues.Config(accountID: accountID, applicationID: applicationID)

        if let logging = call.getBool("logging") {
            config.logging(logging)
        }
        
        if let apiHost = call.getString("apiBasePath"), let url = URL(string: apiHost) {
            config.apiHost(url)
        }
        
        
        if let sessionTimeout = call.getInt("sessionTimeout") {
            config.sessionTimeout(UInt(sessionTimeout))
        }

        if let activityStorageMaxSize = call.getInt("activityStorageMaxSize") {
            config.activityStorageMaxSize(UInt(activityStorageMaxSize))
        }

        if let activityStorageMaxAge = call.getInt("activityStorageMaxAge") {
            config.activityStorageMaxAge(UInt(activityStorageMaxAge))
        }

        self.implementation = Appcues(config: config)

        call.resolve()
    }
    
    @objc func getVersion(_ call: CAPPluginCall) {
        if let version = implementation?.version() {
            call.resolve(["version": version])
        } else {
            call.reject("Appcues not initialized.")
        }
    }

    @objc func identify(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let userID = call.getString("userId") else { return call.reject("Missing user ID") }

        let properties = call.getObject("properties")

        implementation.identify(userID: userID, properties: properties)

        call.resolve()
    }
    
    @objc func group(_ call: CAPPluginCall) {
        let groupID = call.getString("groupId")
        let properties = call.getObject("properties")
        
        implementation?.group(groupID: groupID, properties: properties)
        
        call.resolve()
    }
    
    @objc func anonymous(_ call: CAPPluginCall) {
        implementation?.anonymous()
        
        call.resolve()
    }

    @objc func screen(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let title = call.getString("title") else { return call.reject("Missing page title") }

        let properties = call.getObject("properties")

        implementation.screen(title: title, properties: properties)

        call.resolve()
    }

    @objc func track(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let name = call.getString("name") else { return call.reject("Missing event name") }

        let properties = call.getObject("properties")

        implementation.track(name: name, properties: properties)

        call.resolve()
    }

    @objc func show(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let experienceID = call.getString("experienceID") else { return call.reject("Missing experience ID") }

        implementation.show(experienceID: experienceID)

        call.resolve()
    }
    
    @objc func debug(_ call: CAPPluginCall) {
        implementation?.debug()
        
        call.resolve()
    }
    
    @objc func reset(_ call: CAPPluginCall) {
        implementation?.reset()
        
        call.resolve()
    }
    
    @objc func stop(_ call: CAPPluginCall) {
        // does nothing on IOS.
        call.resolve()
    }
}
