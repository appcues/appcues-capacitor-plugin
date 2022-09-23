import {Plugin} from "@capacitor/core";

export interface AppcuesPlugin extends Plugin {
  initialize(options: InitializeOptions): Promise<void>;
  version(): Promise<VersionResponse>;
  identify(options: IdentifyOptions): Promise<void>;
  group(options: GroupOptions): Promise<void>;
  anonymous(options: AnonymousOptions): Promise<void>;
  reset(): Promise<void>;
  track(options: TrackOptions): Promise<void>;
  screen(options: ScreenOptions): Promise<void>;
  show(options: ShowOptions): Promise<void>;
  debug(): Promise<void>;
  didHandleURL(options: DidHandleURLOptions): Promise<DidHandleURLResponse>;
}

export interface InitializeOptions {
  accountId: string;
  applicationId: string;
  config?: AppcuesConfig;
}

export interface AppcuesConfig {
  logging?: boolean;
  apiBasePath?: string;
  sessionTimeout?: number;
  activityStorageMaxSize?: number;
  activityStorageMaxAge?: number;
}

export interface VersionResponse {
  version: string;
}

export interface IdentifyOptions {
  userId: string;
  properties?: object
}

export interface GroupOptions {
  groupId?: string;
  properties?: object
}

export interface AnonymousOptions {
  properties?: object
}

export interface TrackOptions {
  name: string;
  properties?: object
}

export interface ScreenOptions {
  title: string;
  properties?: object
}

export interface ShowOptions {
  experienceId: string;
}

export interface DidHandleURLOptions {
  url: string;
}

export interface DidHandleURLResponse {
  handled: boolean;
}