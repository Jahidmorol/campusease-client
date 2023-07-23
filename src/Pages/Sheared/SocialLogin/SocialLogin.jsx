import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-success font-bold"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
