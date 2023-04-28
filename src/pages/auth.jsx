import React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "../../firebase/clientApp"

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.githubAuthProvider.PROVIDER_ID], // firebase.auth.googleAuthProvider
}

function SignInScreen() {
    return (
        <div className="max-w[320px] flex flex-col items-center justify-center ">
            <h1>Sıgn ın via</h1>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    )
}
export default SignInScreen
