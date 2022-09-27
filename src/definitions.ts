import {Plugin} from "@capacitor/core";

export interface AppcuesPlugin extends Plugin {
  /**
   * Initialize the plugin
   * 
   *
   * @param {InitializeOptions} options The initialization options to initialize appcues. provide the accountId
   * and applicationId for the application using the plugin. Optionally provide config to configure the plugin
   */
  initialize(options: InitializeOptions): Promise<void>;

  /**
   * Returns the current version of the Appcues SDK
   */
  version(): Promise<VersionResponse>;

  /**
   * Identify a user in the application
   * 
   * @param {IdentifyOptions} options To identify a known user, pass the userId and optionally specify
   * any additional custom properties
   */
  identify(options: IdentifyOptions): Promise<void>;

  /**
   * Identify a group for the current user
   * 
   * @param {GroupOptions} options To specify that the current user belongs to a certain group, 
   * pass the groupId and optionally specify any additional custom group properties to update
   */
  group(options: GroupOptions): Promise<void>;

  /**
   * Generate a unique Id for the current user when there is not a known 
   * identity to use in the [idenfity]{@link AppcuesPlugin#idenfity} call.
   * 
   * This will cause the plugin to begin tracking activity and checking 
   * for qualified content
   * 
   * @param {AnonymousOptions} options Specify extra properties for this call
   */
  anonymous(options: AnonymousOptions): Promise<void>;

  /**
   * Clear out the current user in this session.
   * 
   * This can be used when the user logs out of your application
   */
  reset(): Promise<void>;

  /**
   * Track an event for an action taken by a user
   * 
   * @param {TrackerOptions} options Specify any name for the event and optionally any
   *        properties that supply more context about the event
   */
  track(options: TrackOptions): Promise<void>;

  /**
   * Track a screen viewed by a user
   * 
   * @param {ScreenOptions} options Specify the title of the screen and optionally
   *        any properties that provide additional context about the screen view
   */
  screen(options: ScreenOptions): Promise<void>;

  /**
   * Forces a specific Appcues experience to appear for the current user by passing in the experienceId.
   * 
   * Promise will be rejected in case Appcues SDK does not show the experience
   * 
   * @param {ShowOptions} options The experienceId to show
   */
  show(options: ShowOptions): Promise<void>;

  /**
   * Launch the Appcues debugger over your app's UI
   */
  debug(): Promise<void>;

  /**
   * Verifies if the incoming url value is intended for the Appcues SDK
   * 
   * @param {DidHandleURLOptions} options containing the url
   * @return {DidHandleURLResponse} `true` if the url matches the Appcues scheme or 
   *         `false` if the url is not known by the Appcues SDK and should be handled by
   *         your application. If the url is an Appcues URL, this function may 
   *         launch an experience or otherwise alter the UI state
   */
  didHandleURL(options: DidHandleURLOptions): Promise<DidHandleURLResponse>;
}

export interface InitializeOptions {
  /**
   * appcues account id
   */
  accountId: string;
  /**
   * application id using the plugin
   */
  applicationId: string;
  /**
   * extra configuration options for the plugin
   */
  config?: AppcuesConfig;
}

export class AppcuesConfig {
  /**
   * Determines wheter logging is enabled or disabled
   */
  logging?: boolean;
  /**
   * The API base path to be used for Appcues requests
   */
  apiBasePath?: string;
  /**
   * The timeout value, in seconds, used to determine if a new session is
   * started upon the application returning to the foreground.
   * 
   * The default  value is 1800 seconds (30 minutes)
   */
  sessionTimeout?: number;
  /**
   * The number of analytics requests that can be stored on the local device
   * and retried later, in the case of the device network connection being 
   * unavailable.
   * 
   * Only the most request requests, up to this cound, are retained.
   * 
   * The default and maxmum value is 25
   */
  activityStorageMaxSize?: number;
  /**
   * The duration, in seconds, that an analytics request can be stored on
   * the local device and retried later, in the case of the device network
   * connection being unavailable.
   * 
   * Only requests that are more recent than the max age will be retried.
   * There is no max age limitation if this value is left unset
   */
  activityStorageMaxAge?: number;
}

export interface VersionResponse {
  /**
   * version of the Appcues plugin installed
   */
  version: string;
}

export interface IdentifyOptions {
  /**
   * identified user id
   */
  userId: string;
  /**
   * extra properties
   */
  properties?: object
}

export interface GroupOptions {
  /**
   * group user is being identified with
   */
   groupId?: string;
  /**
   * extra properties
   */
  properties?: object
}

export interface AnonymousOptions {
  /**
   * extra properties
   */
  properties?: object
}

export interface TrackOptions {
  /**
   * name of the event
   */
  name: string;
  /**
   * extra properties
   */
  properties?: object
}

export interface ScreenOptions {
  /**
   * name of the screen
   */
  title: string;
  /**
   * extra properties
   */
  properties?: object
}

export interface ShowOptions {
  /**
   * experience id
   */
  experienceId: string;
}

export interface DidHandleURLOptions {
  /**
   * incoming deep link
   */
  url: string;
}

export interface DidHandleURLResponse {
  /**
   * whether the url was handled by Appcues plugin
   */
  handled: boolean;
}