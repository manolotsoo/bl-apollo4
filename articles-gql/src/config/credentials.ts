export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
export const tokenExpireDateTime: {
  AccessToken: String;
  RefreshToken: String;
} = {
  AccessToken: "1h",
  //   AccessToken: "5s",
  RefreshToken: "1d",
};
