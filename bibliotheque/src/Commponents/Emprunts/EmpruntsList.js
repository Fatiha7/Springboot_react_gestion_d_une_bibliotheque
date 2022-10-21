import React, {useEffect,useState,useReducer } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import EmpruntsService from '../../services/EmpruntsService';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import UpdateIcon from '@material-ui/icons/Update';
import EditeEmprunt from './EditeEmprunt';
import NewEmprunt from './NewEmprunt';
import HomeIcon from '@material-ui/icons/Home';
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
const EmpruntsList = () => {
  const navigaye = useNavigate();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const classes = useStyles();
    const [adh, setadh] = useState(null);
    const editemprunt = (e,id_emprunt) =>{
      e.preventDefault();
        setadh(id_emprunt);    
    }
    const [loading, setLoading] = useState(true)
    const [Emprunts,setEmprunts]=useState(null);
    useEffect(() => {
        const fetchDate = async ()=>{
          setLoading(true);
          try {
              const response = await EmpruntsService.getEmprunt();
              setEmprunts(response.data);
              
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
    setQuery(e.target.value)};
    const DeleteEmprunts = (e,id_emprunt) =>{
        e.preventDefault();
        EmpruntsService.DeleteEmprunt(id_emprunt).then((response)=>{
          if(Emprunts){
            setEmprunts((prevElement)=>{
              
              return prevElement.filter((Emprunt) =>Emprunt.id_emprunt !==id_emprunt);
            });
          }
        }); };

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
                Loans
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
          <NewEmprunt forceUpdate={forceUpdate}/>
        </div>
          <div className='container mx-auto my-8'>
      
          <br></br>
          <div className='flex shadow border-b' >
      <table className='min-w-full'>
        <thead className='py-10 font-serif text-center' style={{backgroundColor: "#3f51b5",color:'white' }}>
          <tr>
            <th className='py-2 px-4'>EID</th> 
            <th className='py-2 px-4'>Borrowing date</th>
            <th className='py-2 px-4'>date to return</th>
            <th className='py-2 px-4'>Document Id </th>
            <th className='py-2 px-4'>Member cin</th>
            <th className='py-2 px-4'></th>
          </tr>
        </thead>
        {!loading && (
  <tbody className=' whitespace-nowrap text-center  text-gray-700 bg-white font-serif '>
   {Emprunts.filter((Emprunt)=>Emprunt.eid.includes(query)).map((Emprunt) => (
    <tr key={Emprunt.id_emprunt}>
    <td className='py-3 px-4 border-b-2'>{Emprunt.eid}</td>
      <td className='py-3 px-4 border-b-2'>{Emprunt.dateEmp}</td>
      <td className='py-3 px-4 border-b-2'>{Emprunt.dateRet}</td>
      <td className='py-3 px-4 border-b-2'>{Emprunt.id_document}</td>
      <td className='py-3 px-4 border-b-2'>{Emprunt.adherent.cin}</td>
      <td className='space-x-4 border-b-2'>
      <button onClick={(e,id_emprunt)=>editemprunt(e,Emprunt.id_emprunt)} className='text-gray-700 hover:text-black py-1  px-2 hover:cursor-pointer'><UpdateIcon/></button>
        <button onClick={(e,id_emprunt)=>DeleteEmprunts(e,Emprunt.id_emprunt)} className='text-gray-700 hover:text-black py-1 hover:cursor-pointer'><DeleteOutlineIcon/></button>
       
      </td>
      </tr>))}</tbody>)}
        </table>
        </div>
        </div>
        <EditeEmprunt id_emprunt={adh} forceUpdate={forceUpdate}/>
  </>
    );
  }

export default EmpruntsList

