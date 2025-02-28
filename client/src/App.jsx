import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Result from './components/Result'
import History_Tap from './components/History_Tap'

function App() {
  const [URL, setURL] = useState('')
  const [WarningText, setWarningText] = useState('')
  const [scrapedData, setscrapedData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  const sendData = async () => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/\S*)?$/i
    if (urlPattern.test(URL)) {
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:3500/fetchURL?value=${URL}`)
        const data = await response.json()
        setWarningText('')
        setscrapedData(data.data)
      } catch (error) {
        console.log(`Failed to send data: ${error}`)
      } finally {
        setIsLoading(false)
      }
    } else {
      setWarningText('Please enter a valid URL')
    }
  }

  return (
    <>
    <main className="h-screen  bg-gradient-to-b from-blue-100 to-white px-4 pt-20 overflow-auto">
    {/* Navigation */}
    <NavBar />
    <div className="History-container w-auto h-auto">
    <div className="Display_Hide_container w-auto  relative p-5">
    <button 
    onClick={() => setIsVisible(true)} 
    className={`${isVisible ? "hidden" : "block"} px-4 py-2 bg-blue-500 text-white rounded-md`}
  >
    AddURL
  </button>
    </div>
      {isVisible && <History_Tap onClose={() => setIsVisible(false)} />}
    </div>
    
    
    {/* Title Section */}
    <div className="flex flex-col items-center text-center mt-5">
      <h1 className="text-3xl md:text-5xl text-blue-600 font-bold">WALWeb Scraper</h1>
      <p className="text-gray-600 text-lg md:text-xl mt-2">
        Extract data from any website with ease
      </p>
    </div>
  
    {/* Scraper Form */}
    <div className="flex justify-center  mt-5 md:mt-5">
      <div className="bg-white w-full max-w-[90%] md:max-w-[50vw] p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold">Start Scraping</h2>
        <p className="text-gray-600 mt-1">Enter a URL to begin extracting data</p>
  
        <div className="mt-4">
          <input
            type="url"
            className="w-full h-12 p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com"
            onChange={(e) => setURL(e.target.value)}
          />
          {WarningText && <p className="text-red-600 mt-1">{WarningText}</p>}
        </div>
  
        <button
          className="w-full mt-4 h-12 bg-[#0D1117] text-white rounded-md hover:bg-gray-800 transition-all duration-300"
          onClick={sendData}
        >
          Scrape
        </button>
      </div>
    </div>
  
    {/* Results */}
    <div className="flex justify-center mt-12">
      {isLoading ? (
        <div className="text-lg font-semibold">Loading...</div>
      ) : (
        scrapedData && (
          <Result
            Item_name={scrapedData.product_name}
            Item_Image={scrapedData.image_url}
            wasPrice={scrapedData.was_price}
            currentPrice={scrapedData.current_price}
            discount={scrapedData.discount}
          />
        )
      )}
    </div>
    
  </main>
      </>
  )
}

export default App
