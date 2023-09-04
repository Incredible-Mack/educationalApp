import { useState } from 'react'


const Card = ({title, description, count}) => {
    const [toggleInfo, setToggleInfo] = useState(false)
  return (
    <div className='col-span-full md:col-span-1'>
        <div className=" flex w-full relative items-baseline bg-purple-100  drop-shadow-[0_30px_25px_rgba(0,0,0,.04)] p-3 rounded-xl">
          <div className="w-full p-2 font-bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 bg-purple-10 text-purple-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
            {title}
          </div>
          <div className="absolute right-0 top-0 mr-4 mt-2 ">
            <div className="relative"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 cursor-pointer"
                onClick={() => setToggleInfo(!toggleInfo)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              
                
            </div>
            
          </div>

          <p className="text-2xl text-purple-700 font-bold">{count}</p>
        </div>
        { toggleInfo &&
                    <div className={`text-xs absolute w-80 border bg-purple-100 p-2 z-[1000] rounded-lg opacity-0 ${toggleInfo && "opacity-100"} transition duration-300 `}>
                        {description}
                    </div>
              }
    </div>
  )
}

export default Card