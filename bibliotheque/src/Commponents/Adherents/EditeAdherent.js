import React ,{ Fragment, useState ,useEffect } from 'react'
import { Dialog,Transition} from '@headlessui/react';
import AdherentsService from '../../services/AdherentsService';
const EditeAdherent = ({cin,forceUpdate}) => {
    
     const [isOpen, setIsOpen] = useState(false);
    function colseModal(){
        setIsOpen(false);
    }
    function openModel(){
        setIsOpen(true);
    }
    const [Adherentss, setAdherentss] = useState({
        cin:cin,
        nom:"",
        prenom:"",
        adresse:"",
        datenaissance:"",
    });

    const lhandleChange =(e) =>{
    const value = e.target.value;
        setAdherentss({...Adherentss,[e.target.name]:value})
    };
    useEffect(() => {
        const fetchDate = async () => {
    try{
        const response = await AdherentsService.getAdherentById(cin);
        console.log(cin)
        setAdherentss(response.data)
        openModel()
           
     
         
    }catch(error){
        console.log(error);
    }    
    };
    if(cin){
    fetchDate(); }  
    }, [cin])
    const returnaslist = (e) =>{
        e.preventDefault();
        setIsOpen(false);
      }
    const updateAdherents = (e) =>{
        e.preventDefault();
        console.log(Adherentss)
        AdherentsService.updateAdherents(Adherentss,cin).then(
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
          
                <Dialog.Title as='h3' className=" text-4xl font-semibold tracking-wider text-center font-serif leading-6 text-gray-800">Update Member</Dialog.Title>
               <div className="flex max-w-md max-auto">
                <div className='py-2 ml-7'>
                <br></br>
            <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>First Name</label>
                <input type="text" name="nom" value={Adherentss.nom} onChange={(e) => lhandleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 px-2 mt-2 py-2"></input>
            </div>
            <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Last Name</label>
                <input type="text" name="prenom" value={Adherentss.prenom} onChange={(e) => lhandleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 mt-2 px-2 py-2"></input>
            </div>
            <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Adress</label>
                <input type="text" name="adresse" value={Adherentss.adresse} onChange={(e) => lhandleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 mt-2 px-2 py-2"></input>
            </div>
            <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>date of birth</label>
                <input type="text" name="datenaissance" value={Adherentss.datenaissance} onChange={(e) => lhandleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 mt-2 px-2 py-2"></input>
            </div>
            <div className='items-center justify-center h-14 w-full ml-2 mt-6 my-4 space-x-4'>
              <button onClick={updateAdherents} className='rounded text-white font-semibold font-serif justify-center bg-gray-600 hover:bg-gray-800 hover:text-white mt-4 py-4  px-16'>Update </button> 
              
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

export default EditeAdherent