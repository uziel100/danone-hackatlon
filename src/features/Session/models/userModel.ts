export interface UserSettings {
  calories: {
    consumed: number;
    remaining: number;
    total: number;
  };
}

export interface User {
  id?: string;
  fullName?: string;
  email?: string;
  token?: string;
  settings?: UserSettings;
}
