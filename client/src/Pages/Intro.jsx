import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar'
import "./Intro.css"
function Intro() {
  const navigate = useNavigate(); // ✅ Use useNavigate() correctly

  const handleNavigate = () => {
    navigate("/"); // ✅ Correct navigation
  };

  return (
    <>
 
       <NavBar className="overflow-hidden"/>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-3xl md:text-5xl text-blue-600 font-bold">WALWeb Scraper</h1>
      <p className="text-gray-600 text-lg md:text-xl mt-2">
        Extract data from any website with ease
      </p>
      <div className="button-container">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-5"
          onClick={handleNavigate}
        >
          Get Started
        </button>
      </div>
    </div>
  
    </>
  );
}

export default Intro;
