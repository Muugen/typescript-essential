import { AdminRoles } from "models/User";
import { getUser, updateUser } from "./services/user";

const updateDom = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>Hello ${user.username}</div>
  `;
};

let user = await getUser();
updateDom();

console.log(AdminRoles["Jedi_Master"]);

setTimeout(async () => {
  user = await updateUser({ username: "anthony" });
  console.log(user);
  updateDom();
}, 3000);
