export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface ProcessStep {
  /** Display label, e.g. Roman numerals */
  readonly stepLabel: string;
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly name: string;
  readonly quote: string;
  /** Single line under the name (e.g. program / outcome) */
  readonly credential: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  /** Hours line as shown to visitors */
  readonly hours: string;
  readonly socials: readonly SocialLink[];
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
}

export interface ActionState {
  readonly success: boolean;
  readonly message: string;
  readonly errors?: Readonly<Record<string, readonly string[]>>;
}
