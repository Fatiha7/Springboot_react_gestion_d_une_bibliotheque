import React, {useEffect,useState,useReducer } from 'react'
import AdherentsService from '../../services/AdherentsService';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/Update';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NewMember from './NewMember';
import EditeAdherent from './EditeAdherent';
import {useNavigate} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function AdherentsList() {
  const navigaye = useNavigate();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  //add aderent -----------------

  const classes = useStyles();
  const [adh, setadh] = useState(null);
  const editAdherent = (e,cin) =>{
    e.preventDefault();
      setadh(cin);    
  }
  
  //list
  const [loading, setLoading] = useState(true)
  const [Adherents,setAdherents]=useState(null);
  useEffect(() => {
    const fetchDate = async ()=>{
      setLoading(true);
      try {
          const response = await AdherentsService.getAdherents();
          setAdherents(response.data);
      }catch(error){
          console.log(error);
      }
      setLoading(false);
    };
    fetchDate();
  }, [ignored]);
  //search
  const [query,setQuery] = useState("");
  const handleChange =(e) =>{
    setQuery(e.target.value)
    
};
//delete
  const DeleteAdherents = (e,cin) =>{
    e.preventDefault();
    AdherentsService.DeleteAdherents(cin).then((response)=>{
      if(Adherents){
        setAdherents((prevElement)=>{
          return prevElement.filter((Adherent) => Adherent.cin !==cin);
        });
      }
    });
   
  }
  return (
    <>
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={(e)=>navigaye("/")}
          >
           <HomeIcon/>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
           Members
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => handleChange(e)} 
            />
          </div>
        </Toolbar>
      </AppBar>
      <NewMember forceUpdate={forceUpdate}/>
    </div>
    <div className='container mx-auto my-8'>
    
    <br></br>
    <div className='flex shadow border-b' >
<table className='min-w-full'>
  <thead className='py-10 font-serif text-center' style={{backgroundColor: "#3f51b5",color:'white' }}>
    <tr>
      <th className='py-2 px-4'>ID</th> 
      <th className='py-2 px-4'>CIN</th>
      <th className='py-2 px-4'>First Name</th>
      <th className='py-2 px-4'>Last Name</th>
      <th className='py-2 px-4'>Adress</th>
      <th className='py-2 px-4'>date of birth</th>
      <th className='py-2 px-4'></th>
    </tr>
  </thead>
  {!loading && (
  <tbody className=' whitespace-nowrap text-center  text-gray-700 bg-white font-serif '>
   {Adherents.filter((Adherent)=>Adherent.cin.includes(query)).map((Adherent) => (
    <tr key={Adherent.cin}>
      <td className='py-3 px-4 border-b-2'>{Adherent.id_adherent}</td>
      <td className='py-3 px-4 border-b-2'>{Adherent.cin}</td>
      <td className='py-3 px-4 border-b-2'>{Adherent.nom}</td>
      <td className='py-3 px-4 border-b-2'>{Adherent.prenom}</td>
      <td className='py-3 px-4 border-b-2'>{Adherent.adresse}</td>
      <td className='py-3 px-4 border-b-2'>{Adherent.datenaissance}</td>
      <td className='space-x-4 border-b-2'>
        <button onClick={(e,cin) =>editAdherent(e,Adherent.cin)} className='text-gray-700 hover:text-black py-1  px-2 hover:cursor-pointer'><UpdateIcon/></button>
        <button onClick={(e,cin) =>DeleteAdherents(e,Adherent.cin)} className='text-gray-700 hover:text-black py-1 hover:cursor-pointer'><DeleteOutlineIcon/></button>
       </td>
    </tr>
    ))}
  </tbody>)}
</table>
    </div>
    </div>
    <EditeAdherent cin={adh} forceUpdate={forceUpdate}/> 
    </>
  )
}

export default AdherentsList
