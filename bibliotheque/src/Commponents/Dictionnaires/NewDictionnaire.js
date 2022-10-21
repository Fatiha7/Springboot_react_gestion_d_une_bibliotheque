import React, { Fragment, useState } from 'react'
import DictionnairesService from '../../services/DictionnairesService';
import {useNavigate} from "react-router-dom"
import { Dialog,Transition} from '@headlessui/react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const NewDictionnaire = ({forceUpdate}) => {
  const [isOpen, setIsOpen] = useState(false);
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
      const [Dictionnaires, setDictionnaires] = useState({
          nom:"",
          langue:"",
          prix_vente:0,
      });
      const navigaye = useNavigate();
      const handleChange =(e) =>{
          const value = e.target.value;
          setDictionnaires({...Dictionnaires,[e.target.name]:value})
      };
      const saveDictionnaires =(e) =>{
          e.preventDefault();
          console.log(Dictionnaires)
          DictionnairesService.saveDictionnaires(Dictionnaires).then((Response) =>{
              console.log(Response);
              setIsOpen(false)
              forceUpdate();
              navigaye("/DictionnairesList");
          }).catch((error) =>{
              console.log(error);
              
          });
      };
  return (
    <>
    <div className='container mx-auto my-8'>
          <div className='h-12'>
              <button onClick={openModel} className="rounded text-white px-6 py-2 font-serif font-semibold" style={{backgroundColor: "#3f51b5"}}><AddCircleIcon/>add Dictionary</button>
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
            
                  <Dialog.Title as='h3' className=" text-4xl font-semibold tracking-wider text-center font-serif leading-6 text-gray-800">Add New Dictionary</Dialog.Title>
                 <div className="flex max-w-md max-auto">
                  <div className='py-2 ml-7'>
                  <br></br>
              <div className='items-center justify-center h-14 my-4 ' >
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Name</label>
                  <input type="text" name="nom" value={Dictionnaires.nom} onChange={(e) => handleChange(e)} className=" h-12 w-96 text-gray-800 font-serif font-bold border-b-2 px-2 mt-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Language</label>
                  <input type="text" name="langue" value={Dictionnaires.langue} onChange={(e) => handleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 px-2 mt-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full mt-6 my-4'>
                  <label className='block text-gray-800 text-sm ml-2 font-semibold font-serif'>Price</label>
                  <input type="text" name="prix_vente" value={Dictionnaires.prix_vente} onChange={(e) => handleChange(e)} className="h-12 w-96 text-gray-800 font-serif font-bold border-b-2 mt-2 px-2 py-2"></input>
              </div>
              <div className='items-center justify-center h-14 w-full ml-2 mt-6 my-4 space-x-4'>
                <button onClick={saveDictionnaires} className='rounded text-white font-semibold font-serif justify-center bg-gray-600 hover:bg-gray-800 hover:text-white mt-4 py-4  px-16'>Save</button> 
                
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

export default NewDictionnaire