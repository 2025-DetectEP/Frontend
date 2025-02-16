import FacebookLogin from "@greatsumini/react-facebook-login";

export default function LoginBtn() {
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_ID}
      onSuccess={(response) => {
        console.log("로그인 성공!");
        console.log("id: ", response.userID);
        console.log("accessToken: ", response.accessToken);
        console.log("expiresIn: ", response.expiresIn);
        console.log("reauthorize_required_in: ", response.reauthorize_required_in);
        console.log("signedRequest: ", response.signedRequest);
      }}
      onFail={(error) => {
        console.log("로그인 실패!");
        console.log("status: ", error.status);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!");
        console.log("name: ", response.name);
        console.log("id: ", response.id);
        console.log("picture: ", response.picture);
        console.log("email: ", response.email);
      }}
    />
  );
}