# Configuring Views for Anchored Tooltips

> [!IMPORTANT]
> Anchored tooltips require version 5 of the Appuces Capacitor Plugin.
 
The Appcues Capacitor Plugin supports anchored tooltips targeting any node in your application's layout.

Instrumenting your application views as described below allows the Appcues Capacitor Plugin to create a mobile view selector for each view. This selector is used by the Appcues Mobile Builder to create and target anchored tooltips. When a user qualifies for a flow, this selector is used to render the anchored tooltip content.

## Instrumenting HTML Elements

The following element attributes are used to identify elements, in order of precedence:

* `data-appcues-id`
* `id`

At least one identifiable property must be set. The `data-appcues-id` or `id` value must be unique on the screen where an anchored tooltip may be targeted.

```html
<button id="my-button" type="button">My Button</button>
<div data-appcues-id="some-id">...</div>
```

## Other Considerations

### Selector Uniqueness
Ensure that view identifiers used for selectors are unique within the visible views on the screen at the time an anchored tooltip is attempting to render. If no unique match is found, the Appcues flow will terminate with an error. It is not required that selectors are globally unique across the application, but they must be on any given screen layout.

### Consistent View Identifiers
Maintain consistency with view identifiers as new versions of the app are released. For example, if a key navigation tab was using an identifier like "Home Tab" in several versions of the application, then changed to "Home" - this would break the ability for selectors using "Home Tab" to be able to find that view and target a tooltip in the newer versions of the app. You could build multiple flows targeting different versions of the application, but it helps keep things simplest if consistent view identifiers can be maintained over time.
