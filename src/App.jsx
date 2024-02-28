import { useState, useEffect } from 'react'
import link from './assets/link.svg'
import Regroup from './assets/Regroup.svg'
import Background  from './assets/bg-image-random-quote.svg'
import '@fontsource-variable/outfit';

const Api_Quote = 'https://api.quotable.io/random'

function App() {
  const [quote, setQuote] = useState([])

  const fetchNewQuote = () => {
    fetch(Api_Quote)
    .then(res => res.json())
    .then(data => setQuote(data))
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote.content)
  }

  useEffect(() => {
    fetchNewQuote()
  },[])

  return (
    <main className='bg-[#111729] h-screen w-screen flex items-center justify-center flex-col xl:px-0 px-20'>
      {quote && (
        <div className='bg-[#20293A] lg:w-[600px] sm:w-[500px] flex flex-col items-center justify-center px-10 py-8 rounded-xl gap-y-4 relative overflow-hidden'>
          <img src={Background} className='absolute right-0 bottom-0' alt="" />
          <h2 className='font-semibold text-xl text-white'>{quote.author}</h2>
          <div className='flex items-center justify-center gap-x-3'>
          {quote.tags && quote.tags.map((tag) => (
            <p className='border-2 rounded-full border-[#6466E9] text-[#6466E9] py-1 px-4 text-xs' key={tag}>{tag}</p>
          ))}  
          </div>
          <p className='text-[#97A3B6] text-2xl text-center text-pretty z-10'>"{quote.content}"</p>
        </div>
      )}    
      <div className='flex items-center justify-center mt-5'>
        <button className='border-2 border-[#20293A] rounded-l-lg border-r-0 py-2 px-4' type="button" onClick={fetchNewQuote}><img src={Regroup} alt="new quote" className='size-8'/></button>
        <button className='border-2 border-[#20293A] rounded-r-lg py-2 px-4' type="button" onClick={copyToClipboard}><img src={link} alt="copy to clipboard" className='size-8'/></button>
      </div>
    </main>
  )
}

export default App
