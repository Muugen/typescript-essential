import user from "../mock/user.json";
import { UserInterface } from "models/User";

export const getUser = (): Promise<UserInterface> => {
  return new Promise((resolve) => resolve(user));
};
