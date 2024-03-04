import { getUser, updateUser } from "./services/user";

const updateDom = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>Hello ${user.username}</div>
  `;
};

let user = await getUser();
updateDom();

setTimeout(async () => {
  user = await updateUser({ username: "anthony" });
  console.log(user);
  updateDom();
}, 3000);
