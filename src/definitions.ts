export interface AppcuesPlugin {
  initialize(options: AppcuesConfig): Promise<void>;
  identify(options: IdentifyOptions): Promise<void>;
  screen(options: ScreenOptions): Promise<void>;
  track(options: TrackOptions): Promise<void>;
  show(options: ShowOptions): Promise<void>;  
}

export interface AppcuesConfig {
  accountID: string;
  applicationID: string;
  logging?: boolean;
}

export interface IdentifyOptions {
  userID: string;
  properties?: object
}

export interface ScreenOptions {
  title: string;
  properties?: object
}

export interface TrackOptions {
  name: string;
  properties?: object
}

export interface ShowOptions {
  experienceID: string;
}
