import { Copy } from "lucide-react";
import { useState } from "react";

function HistoryTap() {
  const [URL, setURL] = useState("");
  const [urls, setUrls] = useState([]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleAddURL = () => {
    if (URL.trim()) {
      setUrls((prev) => [URL, ...prev]); // Adds new URLs to the top
      setURL(""); // Clears input after adding
    }
  };

  return (
    <div className="history-container flex flex-col absolute left-[5px] bg-white h-[90%] w-[21%] min-w-[200px] box-shadow-lg rounded-md overflow-y-auto overflow-x-hidden p-3">
      
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
    </div>
  );
}

export default HistoryTap;
