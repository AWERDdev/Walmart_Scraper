import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate(); // ✅ Use useNavigate() correctly

    const   handleNavigateToMainPage = () => {
      navigate("/"); // ✅ Correct navigation
    };
    const sendDataToAPI = async () => {
        try {
          const response = await fetch("http://localhost:3500/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: "your_username",
              password: "your_password",
            }),
          })
          const data = await response.json();
          console.log("Response:", data);
      }
          catch(error) {
            console.error("Error:", error);
          }
        }
        const Handlefunctions = () => {
          sendDataToAPI();
          handleNavigateToMainPage();
        };
    return (
        <>
     <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
            <div className="login-container">
                <div className="flex justify-center mt-10">
                    <div className="bg-white w-full max-w-[90%] md:max-w-[55vw] p-5 rounded-md shadow-lg">
                        <div className="Iputs-container">

                        </div>
                        <div className="button-container grid justify-center">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-5"onClick={Handlefunctions}>Sign In</button>
                        </div>
                        <div className="links grid justify-center mt-5"><a href="http://localhost:5173/Login">Already Have an Account</a></div>
                    </div>
                </div>
            </div>
        </main>
      </>
    );
  }
  export default Signup;