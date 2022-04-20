# appcues-capacitor-plugin

Appcues Capcitor plugin to bridge the native Appcues SDKs in an Ionic application.

## Install

```bash
npm install appcues-capacitor
npx cap sync
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`identify(...)`](#identify)
* [`screen(...)`](#screen)
* [`show(...)`](#show)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: AppcuesConfig) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#appcuesconfig">AppcuesConfig</a></code> |

--------------------


### identify(...)

```typescript
identify(options: IdentifyOptions) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#identifyoptions">IdentifyOptions</a></code> |

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


### Interfaces


#### AppcuesConfig

| Prop                | Type                 |
| ------------------- | -------------------- |
| **`accountID`**     | <code>string</code>  |
| **`applicationID`** | <code>string</code>  |
| **`logging`**       | <code>boolean</code> |


#### IdentifyOptions

| Prop             | Type                |
| ---------------- | ------------------- |
| **`userID`**     | <code>string</code> |
| **`properties`** | <code>object</code> |


#### ScreenOptions

| Prop             | Type                |
| ---------------- | ------------------- |
| **`title`**      | <code>string</code> |
| **`properties`** | <code>object</code> |


#### ShowOptions

| Prop               | Type                |
| ------------------ | ------------------- |
| **`experienceID`** | <code>string</code> |

</docgen-api>
