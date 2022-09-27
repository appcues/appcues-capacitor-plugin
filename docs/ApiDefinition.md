# appcues-capacitor-plugin

Capacitor plugin to bridge the native Appcues SDKs in an Ionic application.

## Install

```bash
npm install @appcues/capacitor
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`version()`](#version)
* [`identify(...)`](#identify)
* [`group(...)`](#group)
* [`anonymous(...)`](#anonymous)
* [`reset()`](#reset)
* [`track(...)`](#track)
* [`screen(...)`](#screen)
* [`show(...)`](#show)
* [`debug()`](#debug)
* [`didHandleURL(...)`](#didhandleurl)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: InitializeOptions) => Promise<void>
```

Initialize the plugin

| Param         | Type                                                            | Description                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#initializeoptions">InitializeOptions</a></code> | The initialization options to initialize appcues. provide the accountId and applicationId for the application using the plugin. Optionally provide config to configure the plugin |

--------------------


### version()

```typescript
version() => Promise<VersionResponse>
```

Returns the current version of the Appcues SDK

**Returns:** <code>Promise&lt;<a href="#versionresponse">VersionResponse</a>&gt;</code>

--------------------


### identify(...)

```typescript
identify(options: IdentifyOptions) => Promise<void>
```

Identify a user in the application

| Param         | Type                                                        | Description                                                                                       |
| ------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#identifyoptions">IdentifyOptions</a></code> | To identify a known user, pass the userId and optionally specify any additional custom properties |

--------------------


### group(...)

```typescript
group(options: GroupOptions) => Promise<void>
```

Identify a group for the current user

| Param         | Type                                                  | Description                                                                                                                                           |
| ------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#groupoptions">GroupOptions</a></code> | To specify that the current user belongs to a certain group, pass the groupId and optionally specify any additional custom group properties to update |

--------------------


### anonymous(...)

```typescript
anonymous(options: AnonymousOptions) => Promise<void>
```

Generate a unique Id for the current user when there is not a known 
identity to use in the [idenfity]{@link AppcuesPlugin#idenfity} call.

This will cause the plugin to begin tracking activity and checking 
for qualified content

| Param         | Type                                                          | Description                            |
| ------------- | ------------------------------------------------------------- | -------------------------------------- |
| **`options`** | <code><a href="#anonymousoptions">AnonymousOptions</a></code> | Specify extra properties for this call |

--------------------


### reset()

```typescript
reset() => Promise<void>
```

Clear out the current user in this session.

This can be used when the user logs out of your application

--------------------


### track(...)

```typescript
track(options: TrackOptions) => Promise<void>
```

Track an event for an action taken by a user

| Param         | Type                                                  | Description                                                                                           |
| ------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#trackoptions">TrackOptions</a></code> | Specify any name for the event and optionally any properties that supply more context about the event |

--------------------


### screen(...)

```typescript
screen(options: ScreenOptions) => Promise<void>
```

Track a screen viewed by a user

| Param         | Type                                                    | Description                                                                                                         |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#screenoptions">ScreenOptions</a></code> | Specify the title of the screen and optionally any properties that provide additional context about the screen view |

--------------------


### show(...)

```typescript
show(options: ShowOptions) => Promise<void>
```

Forces a specific Appcues experience to appear for the current user by passing in the experienceId.

Promise will be rejected in case Appcues SDK does not show the experience

| Param         | Type                                                | Description              |
| ------------- | --------------------------------------------------- | ------------------------ |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> | The experienceId to show |

--------------------


### debug()

```typescript
debug() => Promise<void>
```

Launch the Appcues debugger over your app's UI

--------------------


### didHandleURL(...)

```typescript
didHandleURL(options: DidHandleURLOptions) => Promise<DidHandleURLResponse>
```

Verifies if the incoming url value is intended for the Appcues SDK

| Param         | Type                                                                | Description        |
| ------------- | ------------------------------------------------------------------- | ------------------ |
| **`options`** | <code><a href="#didhandleurloptions">DidHandleURLOptions</a></code> | containing the url |

**Returns:** <code>Promise&lt;<a href="#didhandleurlresponse">DidHandleURLResponse</a>&gt;</code>

--------------------


### Interfaces


#### InitializeOptions

| Prop                | Type                       | Description                                |
| ------------------- | -------------------------- | ------------------------------------------ |
| **`accountId`**     | <code>string</code>        | appcues account id                         |
| **`applicationId`** | <code>string</code>        | application id using the plugin            |
| **`config`**        | <code>AppcuesConfig</code> | extra configuration options for the plugin |


#### VersionResponse

| Prop          | Type                | Description                             |
| ------------- | ------------------- | --------------------------------------- |
| **`version`** | <code>string</code> | version of the Appcues plugin installed |


#### IdentifyOptions

| Prop             | Type                | Description        |
| ---------------- | ------------------- | ------------------ |
| **`userId`**     | <code>string</code> | identified user id |
| **`properties`** | <code>object</code> | extra properties   |


#### GroupOptions

| Prop             | Type                | Description                         |
| ---------------- | ------------------- | ----------------------------------- |
| **`groupId`**    | <code>string</code> | group user is being identified with |
| **`properties`** | <code>object</code> | extra properties                    |


#### AnonymousOptions

| Prop             | Type                | Description      |
| ---------------- | ------------------- | ---------------- |
| **`properties`** | <code>object</code> | extra properties |


#### TrackOptions

| Prop             | Type                | Description       |
| ---------------- | ------------------- | ----------------- |
| **`name`**       | <code>string</code> | name of the event |
| **`properties`** | <code>object</code> | extra properties  |


#### ScreenOptions

| Prop             | Type                | Description        |
| ---------------- | ------------------- | ------------------ |
| **`title`**      | <code>string</code> | name of the screen |
| **`properties`** | <code>object</code> | extra properties   |


#### ShowOptions

| Prop               | Type                | Description   |
| ------------------ | ------------------- | ------------- |
| **`experienceId`** | <code>string</code> | experience id |


#### DidHandleURLResponse

| Prop          | Type                 | Description                                   |
| ------------- | -------------------- | --------------------------------------------- |
| **`handled`** | <code>boolean</code> | whether the url was handled by Appcues plugin |


#### DidHandleURLOptions

| Prop      | Type                | Description        |
| --------- | ------------------- | ------------------ |
| **`url`** | <code>string</code> | incoming deep link |

</docgen-api>