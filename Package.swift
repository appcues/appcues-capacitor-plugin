// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "AppcuesCapacitor",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "AppcuesCapacitor",
            targets: ["AppcuesPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/appcues/appcues-ios-sdk", from: "5.0.0"),
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "AppcuesPlugin",
            dependencies: [
                .product(name: "AppcuesKit", package: "appcues-ios-sdk"),
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppcuesPlugin"),
        .testTarget(
            name: "AppcuesPluginTests",
            dependencies: ["AppcuesPlugin"],
            path: "ios/Tests/AppcuesPluginTests")
    ]
)