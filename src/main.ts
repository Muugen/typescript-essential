import { getUser } from "./services/user";

const user = await getUser();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>${user.name}</div>
`;
