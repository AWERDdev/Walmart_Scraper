import './App.css'
import {useState} from 'react'
import NavBar from './components/NavBar'
import Result from './components/Result'
function App() {
  const [URL,setURL] = useState('')
  const [WarningText,setWarningText] = useState('')
  const [scrapedData,setscrapedData] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  
  const sendData = async () => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/\S*)?$/i;
    if(urlPattern.test(URL)) {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3500/fetchURL?value=${URL}`);
        const data = await response.json();
        setWarningText('');
        setscrapedData(data.data);
      } catch(error) {
        console.log(`failed to send data ${error}`);
      } finally {
        setIsLoading(false);
      }
    } else {
      setWarningText('Please enter a valid URL');
    }
  };
  

  return (
    <>
<main className='h-screen bg-gradient-to-b from-blue-100 to-white min-w-[650px]  '>
  <div className="Nav-Bar">
    <NavBar/>
  </div>
    <div className="Title-Container min-w-[650px]">

      <div className="Title  grid justify-center items-center">
        <h1 className='text-[2.5rem] text-blue-600 font-bold'>WALWeb Scraper</h1>
      </div>

      <div className="context-Container  grid justify-center items-center ">
        <p className='context text-gray-600 text-[1.5rem]'>Extract data from any website with ease</p>
      </div>

    </div>

  <div className="Scraper-container grid justify-center items-center w-auto h-auto">
    <div className="container  bg-white h-auto w-[55vw]  box-shadow-lg rounded-md pr-5 pl-5 pb-5 ">
    
      <div className="Context">
        <h1 className='text-[1.5rem] p-1'>Start Scraping</h1>
        <p className='text-gray-600 p-1'>Enter a URL to begin extracting data</p>
      </div>
    
      <div className="URLinput-container  mt-[1rem] p-1">
        <input type="url"
         className="URL w-full h-[5vh] rounded-md p-2 font-thin text-[0.8rem] "
         required
         id='URL-input'
          placeholder='https://example.com'
           onChange={(e)=>{setURL(e.target.value)}}
           />
           <label htmlFor="URL-input"className='text-red-600'>{WarningText}</label>
      </div>
      <div className="button-container mt-[1rem] flex justify-center p-1">
        <button className="Scrape-BTN w-full bg-[#0D1117] rounded-md text-white h-[5vh] hover:bg-[hsl(216,28%,15%)] "onClick={sendData}>Scrape</button>
      </div>
    </div>
  </div>
  <div className="Result-container grid justify-center items-center w-auto h-auto mt-[5rem]">
  {isLoading ? (
    <div className="loading">Loading...</div>
  ) : scrapedData && (
    <Result
      Item_name={scrapedData.product_name}
      Item_Image={scrapedData.image_url}
      wasPrice={scrapedData.was_price}
      currentPrice={scrapedData.current_price}
      discount={scrapedData.discount}
    />
  )}
</div>

</main>
    </>
  )
}

export default App