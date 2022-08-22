export interface AppcuesPlugin {
  initialize(options: InitializeOptions): Promise<void>;
  getVersion(): Promise<VersionResponse>;
  identify(options: IdentifyOptions): Promise<void>;
  group(options: GroupOptions): Promise<void>;
  anonymous(options: AnonymousOptions): Promise<void>;
  reset(): Promise<void>;
  track(options: TrackOptions): Promise<void>;
  screen(options: ScreenOptions): Promise<void>;
  show(options: ShowOptions): Promise<void>;
  stop(): Promise<void>;
  debug(): Promise<void>;
  
}

export interface InitializeOptions {
  accountId: string;
  applicationId: string;
  config: AppcuesConfig;
}

export class AppcuesConfig {
  logging: boolean = false;
  apiBasePath: string | null = null;
  sessionTimeout: number | null = null;
  activityStorageMaxSize: number | null = null;
  activityStorageMaxAge: number | null = null;
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
