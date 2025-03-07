import React from 'react'

const LocationSearchPanel = (props) => {
  const locations = [
   " 24B, Near thane",
   " 24B, Near dayal public school",
   " 24B, Near thane mata colony",
   "near medical pratap vihar "
  ]
  return (
    
    <div>
      {/* this is just the sample data */}
      {
        locations.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
            props.setPanelOpen(false)
            props.setVehiclePanel(true)
          }} className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full'><i className="ri-map-pin-fill"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }

      
       
    </div>
  )
}

export default LocationSearchPanel
