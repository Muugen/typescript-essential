const user = {
  id: 1,
  name: "jean",
};

// Manual type
const user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "michel",
};

// Type
type UserType = {
  id: number;
  name: string;
};

// Interface
interface UserInterface {
  id: number;
  name: string;
}

// Class
class UserClass {
  constructor(private id: number, public name: string) {}
}

const _user: UserInterface = {};
