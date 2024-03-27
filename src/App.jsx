import { useEffect, useState } from 'react'
import userAxios from './Axios/UserAxios'
import './App.css'

function App() {
  

  const [districts,setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [constituency,setConstituency] = useState('')
  const [selectedconstituency,setSelectConst] = useState('')
  useEffect(()=>{
       userAxios.get(
        '/api/admin/districtv4'
       ).then((response)=>{
           setDistricts(response.data)
           
       })
  },[])
 
   
 const handleDistrictSelect = async (district) => {
    setSelectedDistrict(district);
   
 };
 useEffect(()=>{
  userAxios.get(
    `/api/admin/districtv4?district=${selectedDistrict}&constituency=${selectedDistrict}`
   ).then((response)=>{
       console.log(response.data,'response here');
       setConstituency(response.data)
       
   })
},[])

 const handleConstituency=(constituen)=>{
  setSelectConst(constituen)
  console.log(constituen);
  
 }
 
  

 

  return (
    <div className='p-4 h-screen flex items-center justify-center '>
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-0'>
          <h1 className=' text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-500'>Form</span></h1>
           <form>
           <label className="label p-2">
                    <span className='text-base text-white label-text'>Name</span>
                </label>
                <input type="text" placeholder='john Doe' className='w-full input input-bordered h-10'/>
                <label className="label p-2">
                    <span className='text-base text-white label-text'>Email</span>
                </label>
                <input type="text" placeholder='johnDoe@gmail.com' className='w-full input input-bordered h-10'/>
                <label className="label p-2">
                    <span className='text-base text-white label-text'>Password</span>
                </label>
                <input type="password" placeholder='' className='w-full input input-bordered h-10'/>
                <label className="label p-2">
                    <span className='text-base text-white label-text'>Date-of-birth</span>
                </label>
                <input type="date" placeholder='' className='w-full input input-bordered h-10'/>
                <label className="label p-2">
                    <span className='text-base text-white label-text'>district</span>
                </label>
                
                {selectedDistrict?(<div className="dropdown ">
                  <div tabIndex={0} role="button" className="btn m-1 w-full ">{selectedDistrict}</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {/* <li><a>{selectedDistrict}</a></li> */}
                    
                 </ul>
              </div>):( <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1 w-full ">Select your district</div>
      
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        
        {districts?.map((district, index) => (
          <li key={index} onClick={() => handleDistrictSelect(district)}>
            <a >{ district} </a>
          </li>
        ))}
      
      </ul>
    </div>)}
               
              <label className="label p-2">
                    <span className='text-base text-white label-text'>constituency</span>
                </label>



                {selectedDistrict?(
                  <div className="dropdown ">
                  <div tabIndex={0} role="button" className="btn m-1 w-full ">Select Your Constituency</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {constituency?.map((constituen,index)=>(
                    <li onClick={()=>handleConstituency(constituen)} ><a>{constituen}</a></li>
                  ))}
                  
                    
                 </ul>
              </div>
                ):(<div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1 w-full ">Select Your Constituency</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  
                <li><a>item</a></li>
                  
               </ul>
            </div>)}


              {/* <div className="dropdown ">
                  <div tabIndex={0} role="button" className="btn m-1 w-full ">Select Your Constituency</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>item</a></li> */}
                    
                 {/* </ul>
              </div> */}


           </form>
        </div>
</div>
</div>
  )
}

export default App
