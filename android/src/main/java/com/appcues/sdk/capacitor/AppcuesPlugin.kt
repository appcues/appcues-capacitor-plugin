package com.appcues.sdk.capacitor

import android.content.Intent
import android.net.Uri
import com.appcues.AnalyticType
import com.appcues.AnalyticsListener
import com.appcues.Appcues
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject

@Suppress("unused")
@CapacitorPlugin(name = "Appcues")
class AppcuesPlugin : Plugin() {

    private lateinit var implementation: Appcues

    private val mainScope = CoroutineScope(Dispatchers.Main)

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun initialize(call: PluginCall) {
        val accountId = call.getString("accountId")
        val applicationId = call.getString("applicationId")
        if (accountId != null && applicationId != null) {
            implementation = Appcues(context, accountId, applicationId) {
                AppcuesPluginConfig(call).applyAppcuesConfig(this)
            }
            implementation.analyticsListener = object : AnalyticsListener {
                override fun trackedAnalytic(
                    type: AnalyticType,
                    value: String?,
                    properties: Map<String, Any>?,
                    isInternal: Boolean
                ) {
                    val data = JSObject().apply {
                        put("analytic", type.name)
                        put("value", value ?: "")
                        put("properties", formatForListener(properties ?: emptyMap<String, Any>()))
                        put("isInternal", isInternal)
                    }
                    notifyListeners("analytics", data)
                }
            }
            call.resolve()
        }
    }

    private fun formatForListener(values: Map<*, *>): Map<*, *> {
        return values.mapValues {
            with(it.value) {
                when (this) {
                    // The Android SDK passes dates as a Long Unix timestamp
                    is Long -> this.toDouble()
                    is Map<*, *> -> formatForListener(this)
                    is List<*> -> formatForListener(this)
                    else -> this
                }
            }
        }
    }

    private fun formatForListener(values: List<*>): List<*> {
        return values.map {
            when (it) {
                // The Android SDK passes dates as a Long Unix timestamp
                is Long -> it.toDouble()
                is Map<*, *> -> formatForListener(it)
                is List<*> -> formatForListener(it)
                else -> this
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

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun identify(call: PluginCall) {
        val userId = call.getString("userId")
        if (userId != null) {
            implementation.identify(userId, call.getPropertiesMap())
        }
        call.resolve()
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun group(call: PluginCall) {
        val groupId = call.getString("groupId")
        implementation.group(groupId, call.getPropertiesMap())
        call.resolve()
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun anonymous(call: PluginCall) {
        implementation.anonymous(call.getPropertiesMap())
        call.resolve()
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun screen(call: PluginCall) {
        val title = call.getString("title")
        if (title != null) {
            implementation.screen(title, call.getPropertiesMap())
        }
        call.resolve()
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
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
                if (implementation.show(experienceId)) {
                    call.resolve()
                } else {
                    call.reject("unable to show experience $experienceId")
                }
            }
        } else {
            call.reject("Missing experienceId")
        }
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    fun debug(call: PluginCall) {
        implementation.debug(activity)

        call.resolve()
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
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
        return data.getJSObject("properties")?.let {
            mapProperties(it)
        }
    }

    private fun mapProperties(obj: JSONObject): Map<String, Any> {
        val mapped = mutableMapOf<String, Any>()
        obj.keys().forEach {
            val value = obj[it]
            mapped[it] = when (value) {
                is JSONObject -> mapProperties(value)
                is JSONArray -> mapProperties(value)
                else -> value
            }
        }
        return mapped
    }

    private fun mapProperties(array: JSONArray): List<Any> {
        val mapped = mutableListOf<Any>()
        (0 until array.length()).forEach {
            val value = array.get(it)
            mapped.add(
                when (value) {
                    is JSONObject -> mapProperties(value)
                    is JSONArray -> mapProperties(value)
                    else -> value
                }
            )
        }
        return mapped
    }
}
