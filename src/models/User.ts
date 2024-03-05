export interface UserInterface {
  id: number;
  username?: string;
  email: string;
  bio: string;
  images: {
    profile: string;
    banner: string;
  };
}

export interface AdminUserInterface extends UserInterface {
  roles: AdminRoles[];
}

export enum AdminRoles {
  "Jedi_Knight",
  "Jedi_Master",
  "Grand_Master",
}
