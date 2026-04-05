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
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly name: string;
  readonly program: string;
  readonly university: string;
  readonly quote: string;
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly address: string;
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
