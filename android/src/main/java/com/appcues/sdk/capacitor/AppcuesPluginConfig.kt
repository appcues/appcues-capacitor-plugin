package com.appcues.sdk.capacitor

import com.appcues.AppcuesConfig
import com.appcues.LoggingLevel
import com.getcapacitor.PluginCall

class AppcuesPluginConfig(call: PluginCall) {
    private val jsObject = call.getObject("config")

    private val loggingLevel: LoggingLevel = jsObject.getBool("logging").toLoggingLevel()

    private val apiBasePath: String? = jsObject.getString("apiBasePath")

    private val sessionTimeout: Int? = jsObject.getInteger("sessionTimeout")

    private val activityStorageMaxSize: Int? = jsObject.getInteger("activityStorageMaxSize")

    private val activityStorageMaxAge: Int? = jsObject.getInteger("activityStorageMaxAge")

    fun applyAppcuesConfig(appcuesConfig: AppcuesConfig) {
        loggingLevel.let { appcuesConfig.loggingLevel = it }
        apiBasePath?.let { appcuesConfig.apiBasePath = it }
        sessionTimeout?.let { appcuesConfig.sessionTimeout = it }
        activityStorageMaxSize?.let { appcuesConfig.activityStorageMaxSize = it }
        activityStorageMaxAge?.let { appcuesConfig.activityStorageMaxAge = it }
    }

    private fun Boolean?.toLoggingLevel(): LoggingLevel {
        return when (this) {
            true -> LoggingLevel.DEBUG
            false -> LoggingLevel.NONE
            null -> LoggingLevel.NONE
        }
    }
}
