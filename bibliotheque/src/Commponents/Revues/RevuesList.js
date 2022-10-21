import React, {useEffect,useState,useReducer } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import RevuesService from '../../services/RevuesService';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/Update';
import EditeRevue from './EditeRevue';
import NewRevue from './NewRevue';
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
const RevuesList = () => {
  const navigaye = useNavigate();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const classes = useStyles();
    const [adh, setadh] = useState(null);
    const editrevue = (e,id) =>{
      e.preventDefault();
        setadh(id);    
    }
    const [loading, setLoading] = useState(true)
    const [Revues,setRevues]=useState(null);
    useEffect(() => {
        const fetchDate = async ()=>{
          setLoading(true);
          try {
              const response = await RevuesService.getRevues();
              setRevues(response.data);
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

const DeleteRevues = (e,id) =>{
    e.preventDefault();
    RevuesService.DeleteRevues(id).then((response)=>{
      if(Revues){
        setRevues((prevElement)=>{
          return prevElement.filter((Revue) =>Revue.id !==id);
        });
      }
    }); };
    return (<>
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
              Journals
            </Typography>
            <div >
          <IconButton
                edge="start"
                className=" text-black px-6 py-2 font-serif "
                
                aria-label="open drawer"
                onClick={(e)=>navigaye("/DictionnairesList")}
              >   
                Dictionary
              </IconButton> <IconButton
                edge="start"
                className=" text-black text-sm px-6 py-2 font-serif "
                
                aria-label="open drawer"
                onClick={(e)=>navigaye("/RevuesList")}
              >
                Journals
              </IconButton> <IconButton
                edge="start"
                className=" text-black px-6 py-2 font-serif "
               
                aria-label="open drawer"
                onClick={(e)=>navigaye("/LivresList")}
              >
                
                Books
              </IconButton></div>
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
        <NewRevue forceUpdate={forceUpdate}/>
      </div>
        <div className='container mx-auto my-8'>
    
        <br></br>
        <div className='flex shadow border-b' >
    <table className='min-w-full'>
      <thead className='py-10 font-serif text-center' style={{backgroundColor: "#3f51b5",color:'white' }}>
        <tr>
          <th className='py-2 px-4'>ID</th> 
          <th className='py-2 px-4'>Name</th>
          <th className='py-2 px-4'>Price</th>
          <th className='py-2 px-4'>Reference</th>
          <th className='py-2 px-4'>Year of the publication</th>
          <th className='py-2 px-4'>Available</th>
          <th className='py-2 px-4'></th>
        </tr>
      </thead>
      {!loading && (
  <tbody className=' whitespace-nowrap text-center  text-gray-700 bg-white font-serif '>
   {Revues.filter((Revue)=>Revue.nom.includes(query)).map((Revue) => (
    <tr key={Revue.id}>
    <td className='py-3 px-4 border-b-2'>{Revue.id}</td>
      <td className='py-3 px-4 border-b-2'>{Revue.nom}</td>
      <td className='py-3 px-4 border-b-2'>{Revue.prix_vente} DH</td>
      <td className='py-3 px-4 border-b-2'>{Revue.reference}</td>
      <td className='py-3 px-4 border-b-2'>{Revue.anneePub}</td>
      <td className='py-3 px-4 border-b-2'>{Revue.disponible}</td>
      <td className='space-x-4 border-b-2'>
      <button onClick={(e,id)=>editrevue(e,Revue.id)} className='text-gray-700 hover:text-black py-1  px-2 hover:cursor-pointer'><UpdateIcon/></button>
        <button onClick={(e,id)=>DeleteRevues(e,Revue.id)} className='text-gray-700 hover:text-black py-1 hover:cursor-pointer'><DeleteOutlineIcon/></button>
       
      </td>
      </tr>))}</tbody>)}
      </table>
      </div>
      </div>
      <EditeRevue id={adh} forceUpdate={forceUpdate}/>
</>
    );
  }

export default RevuesList

