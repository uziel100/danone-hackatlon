export interface UserSettings {
  calories: {
    consumed: number;
    total: number;
  };
}

export interface User {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  token?: string;
  settings?: UserSettings;
}
