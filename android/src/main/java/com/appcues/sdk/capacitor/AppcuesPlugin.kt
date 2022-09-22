package com.appcues.sdk.capacitor

import android.content.Intent
import android.net.Uri
import com.appcues.Appcues
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

@CapacitorPlugin(name = "Appcues")
class AppcuesPlugin : Plugin() {

    private lateinit var implementation: Appcues

    private val mainScope = CoroutineScope(Dispatchers.Main)

    @PluginMethod
    fun initialize(call: PluginCall) {
        val accountId = call.getString("accountId")
        val applicationId = call.getString("applicationId")
        if (accountId != null && applicationId != null) {
            mainScope.launch {
                implementation = Appcues(context, accountId, applicationId) {
                    AppcuesPluginConfig(call).applyAppcuesConfig(this)
                }
                call.resolve()
            }
        }
    }

    @PluginMethod
    fun version(call: PluginCall) {
        call.resolve(
            JSObject().apply {
                put("version", implementation.version)
            }
        )
    }

    @PluginMethod
    fun identify(call: PluginCall) {
        val userId = call.getString("userId")
        if (userId != null) {
            implementation.identify(userId, call.getPropertiesMap())
        }
        call.resolve()
    }

    @PluginMethod
    fun group(call: PluginCall) {
        val groupId = call.getString("groupId")
        implementation.group(groupId, call.getPropertiesMap())
        call.resolve()
    }

    @PluginMethod
    fun anonymous(call: PluginCall) {
        implementation.anonymous(call.getPropertiesMap())
        call.resolve()
    }

    @PluginMethod
    fun screen(call: PluginCall) {
        val title = call.getString("title")
        if (title != null) {
            implementation.screen(title, call.getPropertiesMap())
        }
        call.resolve()
    }

    @PluginMethod
    fun track(call: PluginCall) {
        val name = call.getString("name")
        if (name != null) {
            implementation.track(name, call.getPropertiesMap())
        }
        call.resolve()
    }

    @PluginMethod
    fun show(call: PluginCall) {
        val experienceId = call.getString("experienceId")
        if (experienceId != null) {
            mainScope.launch {
                implementation.show(experienceId)
            }
        }
        call.resolve()
    }

    @PluginMethod
    fun debug(call: PluginCall) {
        implementation.debug(activity)

        call.resolve()
    }

    @PluginMethod
    fun reset(call: PluginCall) {
        implementation.reset()
        call.resolve()
    }

    @PluginMethod
    fun didHandleURL(call: PluginCall) {
        val url = call.getString("url")
        val uri = Uri.parse(url)
        if (activity != null) {
            val intent = Intent(Intent.ACTION_VIEW)
            intent.data = uri
            val handled = implementation.onNewIntent(activity, intent)
            call.resolve(
                JSObject().apply {
                    put("handled", handled)
                }
            )
        } else {
            call.reject("no-activity", "unable to handle the URL, no current running Activity found")
        }
    }

    private fun PluginCall.getPropertiesMap(): Map<String, Any>? {
        return data.getJSObject("properties").toPropertiesMap()
    }

    private fun JSObject?.toPropertiesMap(): Map<String, Any>? {
        if (this == null || length() == 0) return null

        return hashMapOf<String, Any>().apply {
            this@toPropertiesMap.keys().forEach { put(it, this@toPropertiesMap[it]) }
        }
    }
}
