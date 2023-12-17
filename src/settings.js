var generatePassword = (
  length = 24,
  characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join("");

export const url = "http://35.187.239.47:8080";
export const get_header = () => {
  const Token = sessionStorage.getItem("accessToken");
  if (Token) {
    return { Authorization: `Bearer ${Token}` };
  }
  let Session = sessionStorage.getItem("sessionID");
  if (!Session) {
    Session = generatePassword();
    sessionStorage.setItem("sessionID", Session);
  }
  return { "Session-ID": `${Session}` };
};
