import {Link,React} from 'react-router-dom'
const TypeOfAmbulance = () => {
  return (
    <>
    
       <div className="abhead"><h2>Services We Provide</h2></div>
      <div className="abcol3">
      <Link to='/ambdetails/Basic' > 
      <div class="  mx-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img class=" w-full" src="https://www.ambulanceoncall.com/assets/images/gallery/bls4.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Basic Life Support Ambulance</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>
 </Link>
   <Link to='/ambdetails/Mortuary' > 
<div class=" mx-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img class="h-[230px] w-full " src="https://www.patelambulanceservice.com/Services-Gallery/8485Dead%20Body%20Mortuary%20Van.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Mortuary Ambulance Service</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>
     </Link>

     <Link to='/ambdetails/Advance' > 
<div class=" mx-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img class="h-[230px] w-full" src="https://i0.wp.com/www.mbambulance.org/wp-content/uploads/2019/10/mba-als-ambulance.jpg?fit=400%2C357&ssl=1" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Advance Life Support Ambulance</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>
 </Link>

 <Link to='/ambdetails/Patient' > 
<div class=" mx-4 max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://busimg.cardekho.com/p/630x420/in/force/patient-transport-ambulance-type-b/force-patient-transport-ambulance-type-b.jpg?impolicy=resize&imwidth=480" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Patient Transport Ambulance</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>

</div>
</Link>
   
 </div>

    </>
  )
}

export default TypeOfAmbulance
