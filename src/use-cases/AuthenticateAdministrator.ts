import { AuthenticateAdministrator } from "@/domain/features/AuthenticateAdministrator";
import { AxiosInstance } from "axios";

export default class AuthenticateAdministratorUseCase implements AuthenticateAdministrator {
  constructor(readonly client: AxiosInstance) { }

  async execute(input: AuthenticateAdministrator.Input): Promise<AuthenticateAdministrator.Output> {
    try {
      const { data } = await this.client.post<{ token: string; }>("/administrator/login", input);
      if (!data.token) throw new Error("Senha ou email inválidos. Tente novamente");
      return data;
    } catch (error: any) {
      throw new Error(`Authentication: ${error.message}`);
    }
  }

}