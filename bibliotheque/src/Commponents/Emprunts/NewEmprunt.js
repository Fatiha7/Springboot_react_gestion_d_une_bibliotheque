import React, { Fragment, useEffect,useState  } from 'react'
import {useNavigate} from "react-router-dom"
import { Dialog,Transition} from '@headlessui/react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmpruntsService from '../../services/EmpruntsService';
const NewEmprunt = ({forceUpdate}) => {
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
const returnaslist = (e) =>{
    e.preventDefault();
    setIsOpen(false);
    }
    const [Adherent, setAdherents] = useState({
      cin:"",
  });
  const lhandleChange =(e) =>{
      const value = e.target.value;
      setAdherents({...Adherent,[e.target.name]:value})
  };

    const [Emprunts, setEmprunts] = useState({
      
      eid:"",
      id_document:0,
    });
    const navigaye = useNavigate();
 
    const handleChange =(e) =>{
        const value = e.target.value;
        setEmprunts({...Emprunts,[e.target.name]:value})
        
    };
    const saveEmprunts =(e) =>{
        e.preventDefault();
        Emprunts.adherent=Adherent
        console.log(Emprunts)
        EmpruntsService.saveEmprunt(Emprunts).then((Response)=>{
            console.log(Response);
            setIsOpen(false)
            forceUpdate();
            navigaye("/EmpruntsList");
        }).catch((error) =>{
            console.log(error);
            
        });
    };

  return (
    <>
    <div className='container mx-auto my-8'>
          <div className='h-12'>
              <button onClick={openModel} className="rounded text-white px-6 py-2 font-serif font-semibold" style={{backgroundColor: "#3f51b5"}}><AddCircleIcon/>add Loan</button>
          </div>
      </div>
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
            
                  <Dialog.Title as='h3' className=" text-4xl font-semibold tracking-wider text-center font-serif leading-6 text-gray-800">Add New Loan</Dialog.Title>
                 <div className="flex max-w-md max-auto">
                  <div className='py-2 ml-7'>
                  <br></br>
              <div className='items-center justify-center h-14 my-4 ' >
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>EID</label>
                  <input type="text" name="eid" value={Emprunts.dateEmp} onChange={(e) => handleChange(e)} className=" h-12 w-96 text-gray-800 font-serif font-bold border-b-2 px-2 mt-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Member cin</label>
                  <input type="text" name="cin" value={Adherent.cin} onChange={(e) => lhandleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 mt-2 px-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Document Id</label>
                        {!loading && (  
                  <select name="id_document" className=" h-12 w-96 text-gray-800 font-serif border-b-2 px-2 mt-2 py-2"
                  onChange={handleChange}>
                  {Document.map((doc) => (          
                  <option className=" h-12 w-96" value={parseInt(doc.id)} key={doc.id}>{doc.nom}</option>
                ) )} </select>)}
                  </div>
              <div className='items-center justify-center h-14 w-full ml-2 mt-6 my-4 space-x-4'>
                <button onClick={saveEmprunts} className='rounded text-white font-semibold font-serif justify-center bg-gray-600 hover:bg-gray-800 hover:text-white mt-4 py-4  px-16'>Save</button> 
                
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

export default NewEmprunt