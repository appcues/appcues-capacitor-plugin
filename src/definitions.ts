export interface AppcuesPlugin {
  initialize(options: InitializeOptions): Promise<void>; // ios

  getVersion(): Promise<VersionResponse>; // ios
  identify(options: IdentifyOptions): Promise<void>; // ios
  group(options: GroupOptions): Promise<void>; // ios
  anonymous(options: AnonymousOptions): Promise<void>; // ios
  reset(): Promise<void>; // ios
  track(options: TrackOptions): Promise<void>; // ios
  screen(options: ScreenOptions): Promise<void>; // ios
  show(options: ShowOptions): Promise<void>; // ios
  trackScreens(): Promise<void>; // ios
  stop(): Promise<void>; // ios
  debug(): Promise<void>;
  
}

export interface InitializeOptions {
  accountId: string;
  applicationId: string;
  config: AppcuesConfig;
}

export class AppcuesConfig {
  loggingLevel: AppcuesLoggingLevel = AppcuesLoggingLevel.NONE;
  apiBasePath: string | null = null;
  sessionTimeout: number | null = null;
  activityStorageMaxSize: number | null = null;
  activityStorageMaxAge: number | null = null;
}

export enum AppcuesLoggingLevel {
  NONE, INFO, DEBUG
}

export interface VersionResponse {
  version: string;
}

export interface IdentifyOptions {
  userId: string;
  properties?: JSON
}

export interface GroupOptions {
  groupId: string;
  properties?: JSON
}

export interface AnonymousOptions {
  properties?: JSON
}

export interface TrackOptions {
  name: string;
  properties?: JSON
}

export interface ScreenOptions {
  title: string;
  properties?: JSON
}

export interface ShowOptions {
  experienceId: string;
}
