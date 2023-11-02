export interface AuthResponse {
  token:         string;
  bearer:        string;
  nombreUsuario: string;
  authorities:   Authority[];
}

export interface Authority {
  authority: string;
}
