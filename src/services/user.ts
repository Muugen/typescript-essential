import user from "../mock/user.json";
import { UserInterface } from "models/User";

export const getUser = () => {
  return new Promise<UserInterface>((resolve) => resolve(user));
};

type updatableUserProps = Partial<Omit<UserInterface, "id">>;

export const updateUser = (updatedUser: updatableUserProps) => {
  return new Promise<UserInterface>((resolve) =>
    resolve({ ...user, ...updatedUser })
  );
};
