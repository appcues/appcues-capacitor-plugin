# appcues-capacitor-plugin

Capcitor plugin to bridge the native Appcues SDKs in an Ionic application.

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

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#initializeoptions">InitializeOptions</a></code> |

--------------------


### version()

```typescript
version() => Promise<VersionResponse>
```

**Returns:** <code>Promise&lt;<a href="#versionresponse">VersionResponse</a>&gt;</code>

--------------------


### identify(...)

```typescript
identify(options: IdentifyOptions) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#identifyoptions">IdentifyOptions</a></code> |

--------------------


### group(...)

```typescript
group(options: GroupOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#groupoptions">GroupOptions</a></code> |

--------------------


### anonymous(...)

```typescript
anonymous(options: AnonymousOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#anonymousoptions">AnonymousOptions</a></code> |

--------------------


### reset()

```typescript
reset() => Promise<void>
```

--------------------


### track(...)

```typescript
track(options: TrackOptions) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#trackoptions">TrackOptions</a></code> |

--------------------


### screen(...)

```typescript
screen(options: ScreenOptions) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#screenoptions">ScreenOptions</a></code> |

--------------------


### show(...)

```typescript
show(options: ShowOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> |

--------------------


### debug()

```typescript
debug() => Promise<void>
```

--------------------


### didHandleURL(...)

```typescript
didHandleURL(options: DidHandleURLOptions) => Promise<DidHandleURLResponse>
```

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#didhandleurloptions">DidHandleURLOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#didhandleurlresponse">DidHandleURLResponse</a>&gt;</code>

--------------------


### Interfaces


#### InitializeOptions

| Prop                | Type                       |
| ------------------- | -------------------------- |
| **`accountId`**     | <code>string</code>        |
| **`applicationId`** | <code>string</code>        |
| **`config`**        | <code>AppcuesConfig</code> |


#### VersionResponse

| Prop          | Type                |
| ------------- | ------------------- |
| **`version`** | <code>string</code> |


#### IdentifyOptions

| Prop             | Type                                  |
| ---------------- | ------------------------------------- |
| **`userId`**     | <code>string</code>                   |
| **`properties`** | <code><a href="#json">JSON</a></code> |


#### JSON

An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (<a href="#json">JSON</a>) format.

| Method        | Signature                                                                                                                                  | Description                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **parse**     | (text: string, reviver?: ((this: any, key: string, value: any) =&gt; any) \| undefined) =&gt; any                                          | Converts a JavaScript Object Notation (<a href="#json">JSON</a>) string into an object.        |
| **stringify** | (value: any, replacer?: ((this: any, key: string, value: any) =&gt; any) \| undefined, space?: string \| number \| undefined) =&gt; string | Converts a JavaScript value to a JavaScript Object Notation (<a href="#json">JSON</a>) string. |
| **stringify** | (value: any, replacer?: (string \| number)[] \| null \| undefined, space?: string \| number \| undefined) =&gt; string                     | Converts a JavaScript value to a JavaScript Object Notation (<a href="#json">JSON</a>) string. |


#### GroupOptions

| Prop             | Type                                  |
| ---------------- | ------------------------------------- |
| **`groupId`**    | <code>string</code>                   |
| **`properties`** | <code><a href="#json">JSON</a></code> |


#### AnonymousOptions

| Prop             | Type                                  |
| ---------------- | ------------------------------------- |
| **`properties`** | <code><a href="#json">JSON</a></code> |


#### TrackOptions

| Prop             | Type                                  |
| ---------------- | ------------------------------------- |
| **`name`**       | <code>string</code>                   |
| **`properties`** | <code><a href="#json">JSON</a></code> |


#### ScreenOptions

| Prop             | Type                                  |
| ---------------- | ------------------------------------- |
| **`title`**      | <code>string</code>                   |
| **`properties`** | <code><a href="#json">JSON</a></code> |


#### ShowOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`experienceId`** | <code>string</code> |


#### DidHandleURLResponse

| Prop          | Type                 |
| ------------- | -------------------- |
| **`handled`** | <code>boolean</code> |


#### DidHandleURLOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>
