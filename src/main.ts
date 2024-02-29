let uneVariableDeTypeString: number | string = "hello";

// later
uneVariableDeTypeString = 7;
console.log(uneVariableDeTypeString);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>${uneVariableDeTypeString}</div>
`;
