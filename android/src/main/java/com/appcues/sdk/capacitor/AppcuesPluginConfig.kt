package com.appcues.sdk.capacitor

import com.appcues.AppcuesConfig
import com.appcues.LoggingLevel
import com.getcapacitor.PluginCall

class AppcuesPluginConfig(call: PluginCall) {
    private val config = call.getObject("config")

    fun applyAppcuesConfig(appcuesConfig: AppcuesConfig) {
        config?.let { config ->
            config.getBool("logging")
                ?.let { appcuesConfig.loggingLevel = if (it) LoggingLevel.DEBUG else LoggingLevel.NONE }

            config.getString("apiBasePath")
                ?.let { appcuesConfig.apiBasePath = it }

            config.getInteger("sessionTimeout")
                ?.let { appcuesConfig.sessionTimeout = it }

            config.getInteger("activityStorageMaxSize")
                ?.let { appcuesConfig.activityStorageMaxSize = it }

            config.getInteger("activityStorageMaxAge")
                ?.let { appcuesConfig.activityStorageMaxAge = it }
        }
        appcuesConfig.additionalAutoProperties = mapOf("_applicationFramework" to "capacitor")
    }
}
