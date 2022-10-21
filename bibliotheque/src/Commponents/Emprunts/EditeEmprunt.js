import React ,{ Fragment, useState ,useEffect } from 'react'
import { Dialog,Transition} from '@headlessui/react';
import EmpruntsService from '../../services/EmpruntsService';
const EditeEmprunt = ({id_emprunt,forceUpdate}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [Document,setDocument]=useState(null);
  useEffect(() => {
    const fetchDate = async ()=>{
      setLoading(true);
      try {
        const response = await EmpruntsService.getListDocument();
          setDocument(response.data);
      }catch(error){
          console.log(error);
      }
      setLoading(false);
    };
    fetchDate();
  }, []);
  function colseModal(){
      setIsOpen(false);
  }
  function openModel(){
      setIsOpen(true);
  }
  
  const [Emprunts, setEmprunts] = useState({
    id_emprunt:id_emprunt,
    dateRet:"",
    id_document:0,
  });

  const handleChange =(e) =>{
  const value = e.target.value;
  setEmprunts({...Emprunts,[e.target.name]:value})
  };
  useEffect(() => {
      const fetchDate = async () => {
  try{
      const response = await EmpruntsService.getEmpruntById(id_emprunt);
      console.log(id_emprunt)

      setEmprunts(response.data)
   
      openModel()
         
   
       
  }catch(error){
      console.log(error);
  }    
  };
  if(id_emprunt){
  fetchDate(); }  
  }, [id_emprunt])
  const returnaslist = (e) =>{
      e.preventDefault();
      setIsOpen(false);
    }
  const updateEmprunts = (e) =>{
      e.preventDefault();
      console.log(Emprunts)
      EmpruntsService.updateEmprunt(Emprunts,id_emprunt).then(
  (response) => {

      setIsOpen(false)
      forceUpdate();
  }
  ).catch((error)=> {
  console.log(error)
  })}
  
  return (
    <>
    <Transition appear show={isOpen} as={Fragment} >
          <Dialog as="div" className="fixed inset-0 z-10  overflow-auto" onClose={colseModal} >
          <div className='min-h-screen px-4 text-center '  >
              <Transition.Child 
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              >
              <div className='inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle border-4 transition-all transform bg-gray-100 shadow-xl rounded-md'>
            
                  <Dialog.Title as='h3' className=" text-4xl font-semibold tracking-wider text-center font-serif leading-6 text-gray-800">Update Loan</Dialog.Title>
                 <div className="flex max-w-md max-auto">
                  <div className='py-2 ml-7'>
                  <br></br>
              <div className='items-center justify-center h-14 my-4 ' >
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>date to return</label>
                  <input type="text" name="dateRet" value={Emprunts.dateRet} onChange={(e) => handleChange(e)} className=" h-12 w-96 text-gray-800 font-serif font-bold border-b-2 px-2 mt-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Document Id</label>
                        {!loading && (  
                  <select name="id_document" className=" h-12 w-96 text-gray-800 font-serif border-b-2 px-2 mt-2 py-2"
                  onChange={handleChange}
                  >
            
                  {Document.map((doc) => (          
                  <option className=" h-12 w-96"  value={parseInt(doc.id)} key={doc.id}>{doc.id}" : "{doc.nom}</option>
                ) )} </select>)}
                  </div>
              <div className='items-center justify-center h-14 w-full ml-2 mt-6 my-4 space-x-4'>
                <button onClick={updateEmprunts} className='rounded text-white font-semibold font-serif justify-center bg-gray-600 hover:bg-gray-800 hover:text-white mt-4 py-4  px-16'>Save</button> 
                
                <button onClick={returnaslist} className='rounded text-white font-semibold font-serif justify-center bg-gray-600 hover:bg-gray-800 hover:text-white mt-3 py-4 px-16'>Cancel</button> 
              </div>
                  </div>
                  </div> 
                  </div> 
              </Transition.Child>
          </div>
  
          </Dialog>
      </Transition>
    </>
  )
}

export default EditeEmprunt