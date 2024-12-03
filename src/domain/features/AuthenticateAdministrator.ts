export interface AuthenticateAdministrator {
  execute(input: AuthenticateAdministrator.Input): Promise<AuthenticateAdministrator.Output>
}

export namespace AuthenticateAdministrator {
  export type Input = {
    email: string;
    password: string;
  }
  export type Output = { token: string };
}