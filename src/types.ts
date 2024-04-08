export interface UserProfile {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: {
    value: string;
    verified: boolean;
  }[];
  photos: {
    value: string;
  }[];
  provider: string;
  _raw: string;
  _json: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
  };
}
export interface UserAttributes {
  id?: string;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  profile?: string | null;
  google_id: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}