import jwtDecode from "jwt-decode";

export const decodeUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return { decoded: jwtDecode(token), token };
  } else {
    return {};
  }
};
