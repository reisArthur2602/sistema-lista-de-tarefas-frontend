export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: LoginRequest;
  accessToken: string;
};
