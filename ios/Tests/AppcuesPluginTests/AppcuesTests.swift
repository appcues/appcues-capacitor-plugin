import XCTest
import Capacitor
@testable import AppcuesPlugin

class AppcuesTests: XCTestCase {
    func testInitializeUsesConfig() throws {
        let plugin = AppcuesPlugin()
        let expectation = expectation(description: "initialize resolved")

        let call = try XCTUnwrap(CAPPluginCall(
            callbackId: "test-initialize",
            methodName: "initialize",
            options: [
                "accountId": "00000",
                "applicationId": "00000000-0000-0000-0000-000000000000"
            ],
            success: { _, _ in
                expectation.fulfill()
            },
            error: { error in
                XCTFail(error?.message ?? "plugin call failed")
                expectation.fulfill()
            }
        ))

        plugin.initialize(call)

        waitForExpectations(timeout: 2)
    }

    func testVersion() throws {
        let plugin = AppcuesPlugin()
        let expectation = expectation(description: "version resolved")
        var resolvedVersion: String?

        let call = try XCTUnwrap(CAPPluginCall(
            callbackId: "test-version",
            methodName: "version",
            options: [:],
            success: { result, _ in
                resolvedVersion = result?.data?["version"] as? String
                expectation.fulfill()
            },
            error: { error in
                XCTFail(error?.message ?? "plugin call failed")
                expectation.fulfill()
            }
        ))

        plugin.version(call)

        waitForExpectations(timeout: 1)
        XCTAssertNotNil(resolvedVersion)
    }
}
