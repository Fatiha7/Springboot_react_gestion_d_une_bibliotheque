import React from 'react'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import {useNavigate} from "react-router-dom"

const FirstPage = () => {
  const navigate = useNavigate();   
  return (<div>
    <div style={{backgroundColor: "#3f51b5"}}>
      <div className='h-16 justify-center px-8 flex items-center'>
        <div  className='text-white font-bold font-serif'>
          <p>Welcome in Fatiha Ait Aadi bibliothèque</p></div>
      </div>
    </div ><br></br>
    <div style={{height: '600px'}} className='h-16 justify-center px-9 flex items-center'>
   <ButtonComponent onClick={() => navigate("/AdherentsList")} style={{height: '50px', width : '200px',backgroundColor: "#3f51b5"}} cssClass='e-primary'>Adherents</ButtonComponent>
   &nbsp;&nbsp;&nbsp;
   <ButtonComponent onClick={() => navigate("/LivresList")} style={{height: '50px', width : '200px',backgroundColor: "#3f51b5"}} cssClass='e-primary'>Documents</ButtonComponent>
   &nbsp;&nbsp;&nbsp;
   <ButtonComponent onClick={() => navigate("/EmpruntsList")} style={{height: '50px', width : '200px',backgroundColor: "#3f51b5"}} cssClass='e-primary'>Emprunts</ButtonComponent>
   </div> 
    </div>
  )
}

export default FirstPage
