// Generated by https://quicktype.io

export interface SingleUser {
  data:    Data;
  support: Support;
}

export interface Data {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
