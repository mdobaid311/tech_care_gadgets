import jwt_decode from "jwt-decode";

export const decodeJWTRespnse = (token) => {
  const response = jwt_decode(token);
  console.log(response);
  return {
    email: response.email,
    name: response.name,
    picture: response.picture,
    given_name: response.given_name,
    family_name: response.family_name,
  };
};
