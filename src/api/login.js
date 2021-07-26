import axios from "axios";

export const login = async (userName, password) => {
  let res = await axios({
    method: "post",
    url: "https://reqres.in/api/login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      userName,
      password,
    }),
  });
  return res;
};