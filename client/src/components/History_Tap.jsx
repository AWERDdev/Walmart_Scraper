import { Copy } from "lucide-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function HistoryTap({ onClose }) {
  const [URL, setURL] = useState("");
  const [urls, setUrls] = useState([]);
  const [WarningText, setWarningText] = useState("");

  // Improved regex to allow URLs with or without http(s)
  const urlRegex = /^(https?:\/\/)([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*(\?.*)?$/i;

  // console.log(urlRegex.test("https://google.com")); // Should be true
  // console.log(urlRegex.test("www.google.com")); // Should be true
  // console.log(urlRegex.test("google.com")); // Should be true
  // console.log(urlRegex.test("ftp://example.com")); // Should be false
  

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleAddURL = () => {
    const trimmedURL = URL.trim();
    console.log("Raw Input:", URL);
    console.log("Trimmed Input:", trimmedURL);
  
    // Test the new regex
    const isValid = urlRegex.test(trimmedURL);
    console.log("Regex Test Result:", isValid);
  
    if (isValid) {
      setUrls((prev) => [trimmedURL, ...prev]);
      console.log("Updated URLs:", [trimmedURL, ...urls]); // Debugging line
      setURL("");
      setWarningText("");
    } else {
      console.log("Invalid URL:", trimmedURL);
      setWarningText("Please enter a valid URL");
    }
  };
  
  useEffect(() => {
    console.log("State Updated URLs:", urls);
  }, [urls]); // Logs updated URLs whenever they change

  return (
    <div className="history-container flex flex-col absolute left-[5px] top-[55px] bg-white h-[90%] w-[21%] min-w-[200px] box-shadow-lg rounded-md overflow-y-auto overflow-x-hidden p-3">
      <div className="show&Hide_Historybar flex justify-end">
        <button className="close-Container" onClick={onClose}>X</button>
      </div>

      {/* Input Box */}
      <div className="flex flex-col gap-3 p-3 rounded-md bg-white shadow-md">
        <input
          type="url"
          className="w-full h-10 p-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a URL"
          value={URL}
          onChange={(e) => setURL(e.target.value)}
        />
        <button
          onClick={handleAddURL}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add URL
        </button>
      </div>

      {/* URL List */}
      <div className="mt-3 flex flex-col gap-2">
        {urls.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">No URLs added yet</p>
        ) : (
          urls.map((url, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
              <p className="text-[0.9rem] md:text-[1rem] truncate w-full">{url}</p>
              <button 
                onClick={() => handleCopy(url)} 
                className="p-1 rounded-md hover:bg-gray-200"
              >
                <Copy size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Warning Text */}
      {WarningText && (
        <div className="warningText-container flex justify-center mt-2">
          <p className="Warning text-[0.9rem] text-red-500 md:text-[1rem]">{WarningText}</p>
        </div>
      )}
    </div>
  );
}

HistoryTap.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default HistoryTap;
