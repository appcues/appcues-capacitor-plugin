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

        if let configParams = call.getObject("config") {

            if let logging = configParams["logging"] as? Bool {
                config.logging(logging)
            }

            if let apiHost = configParams["apiBasePath"] as? String, let url = URL(string: apiHost) {
                config.apiHost(url)
            }

            if let sessionTimeout = configParams["sessionTimeout"] as? Int {
                config.sessionTimeout(UInt(sessionTimeout))
            }

            if let activityStorageMaxSize = configParams["activityStorageMaxSize"] as? Int {
                config.activityStorageMaxSize(UInt(activityStorageMaxSize))
            }

            if let activityStorageMaxAge = configParams["activityStorageMaxAge"] as? Int {
                config.activityStorageMaxAge(UInt(activityStorageMaxAge))
            }
        }

        let appcues = Appcues(config: config)
        appcues.analyticsDelegate = self

        self.implementation = appcues

        call.resolve()
    }
    
    @objc func version(_ call: CAPPluginCall) {
        let version = Appcues.version() as String
    
        call.resolve(["version": version])
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
        guard let experienceID = call.getString("experienceId") else { return call.reject("Missing experience ID") }

        implementation.show(experienceID: experienceID) { success, _ in
            call.resolve(["showed": success])
        }
    }
    
    @objc func debug(_ call: CAPPluginCall) {
        implementation?.debug()
        
        call.resolve()
    }
    
    @objc func reset(_ call: CAPPluginCall) {
        implementation?.reset()
        
        call.resolve()
    }
    
    @objc func didHandleURL(_ call: CAPPluginCall) {
        guard let implementation = implementation else { return call.reject("Must call initialize") }
        guard let urlParam = call.getString("url") else { return call.reject("Missing url") }
        guard let url = URL(string: urlParam) else { return call.reject("Invalid url: \(urlParam)") }

        let handled = implementation.didHandleURL(url)
    
        call.resolve(["handled": handled])
    }
}

extension AppcuesPlugin: AppcuesAnalyticsDelegate {
    public func didTrack(analytic: AppcuesKit.AppcuesAnalytic, value: String?, properties: [String : Any]?, isInternal: Bool) {

        let analyticName: String
                switch analytic {
                case .event:
                    analyticName = "EVENT"
                case .screen:
                    analyticName = "SCREEN"
                case .identify:
                    analyticName = "IDENTIFY"
                case .group:
                    analyticName = "GROUP"
                }

        notifyListeners("analytics",
                        data: [
                            "analytic": analyticName,
                            "value": value ?? "",
                            "properties": formatProperties(properties),
                            "isInternal": isInternal
                        ])
    }

    /// Map any value types that need to be handled in a custom fashion for cross platform consistency
    private func formatProperties( _ properties: [String: Any]?) -> [String: Any] {
        guard var properties = properties else { return [:] }

        properties.forEach { key, value in
            switch value {
            case let date as Date:
                // dates will format ISO8601 by default, but we'll match Android and
                // format to a double value
                properties[key] = (date.timeIntervalSince1970 * 1000).rounded()
            case let dict as [String: Any]:
                properties[key] = formatProperties(dict)
            case let arr as [Any]:
                properties[key] = formatProperties(arr)
            default:
                break
            }
        }

        return properties
    }

    private func formatProperties( _ properties: [Any]?) -> [Any] {
        guard var properties = properties else { return [] }

        properties.enumerated().forEach { index, value in
            switch value {
            case let date as Date:
                properties[index] = (date.timeIntervalSince1970 * 1000).rounded()
            case let dict as [String: Any]:
                properties[index] = formatProperties(dict)
            case let arr as [Any]:
                properties[index] = formatProperties(arr)
            default:
                break
            }
        }

        return properties
    }
}
