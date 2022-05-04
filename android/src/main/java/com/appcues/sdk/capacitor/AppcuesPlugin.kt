package com.appcues.sdk.capacitor

import com.appcues.Appcues
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import com.getcapacitor.Plugin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

@CapacitorPlugin(name = "Appcues")
class AppcuesPlugin : Plugin() {

    private lateinit var implementation: Appcues

    private val mainScope = CoroutineScope(Dispatchers.Main)

    @PluginMethod
    fun initialize(call: PluginCall) {
        val accountID = call.getString("accountID")
        val applicationID = call.getString("applicationID")
        if (accountID != null && applicationID != null) {
            mainScope.launch {
                implementation = Appcues(context, accountID, applicationID)
                call.resolve()
            }
        }
    }

    @PluginMethod
    fun identify(call: PluginCall) {
        val userID = call.getString("userID")
        if (userID != null) {
            implementation.identify(userID)
        }
        call.resolve()
    }

    @PluginMethod
    fun screen(call: PluginCall) {
        val title = call.getString("title")
        if (title != null) {
            implementation.screen(title)
        }
        call.resolve()
    }

    @PluginMethod
    fun show(call: PluginCall) {
        val experienceID = call.getString("experienceID")
        if (experienceID != null) {
            mainScope.launch {
                implementation.show(experienceID)
            }
        }
        call.resolve()
    }


}