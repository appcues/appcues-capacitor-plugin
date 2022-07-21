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
        guard let accountID = call.getString("accountID") else { return call.reject("Missing account ID") }
        guard let applicationID = call.getString("applicationID") else { return call.reject("Missing application ID") }

        var config = Appcues.Config(accountID: accountID, applicationID: applicationID)

        if let logging = call.getBool("logging") {
            config = config.logging(logging)
        }

        self.implementation = Appcues(config: config)

        call.resolve()
    }

    @objc func identify(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let userID = call.getString("userID") else { return call.reject("Missing user ID") }

//        let properties = call.getObject("properties")

        implementation.identify(userID: userID, properties: nil)

        call.resolve()
    }

    @objc func screen(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let title = call.getString("title") else { return call.reject("Missing page title") }

//        let properties = call.getObject("properties")

        implementation.screen(title: title, properties: nil)

        call.resolve()
    }

    @objc func track(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let name = call.getString("name") else { return call.reject("Missing event name") }

//        let properties = call.getObject("properties")

        implementation.track(name: name, properties: nil)

        call.resolve()
    }

    @objc func show(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let experienceID = call.getString("experienceID") else { return call.reject("Missing experience ID") }

//        let properties = call.getObject("properties")

        implementation.show(experienceID: experienceID)

        call.resolve()
    }
}
