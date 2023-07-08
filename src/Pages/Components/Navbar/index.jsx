import React, { useContext,useEffect,useState,useRef } from 'react';
import { Container,ButtonTheme,Link } from './style.sc';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../Context.site';
import {BsSun,BsMoon} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';

export const Navbar = () => {
  const {theme,alterTheme} = useContext(ThemeContext);
  const[logo,setLogo]=useState(<BsSun />)
  const[open,setOpen]=useState(false);
  const home=useRef();
  const project=useRef();
  const sobre=useRef();
  const contato=useRef();
  const Home = () => home.current.scrollIntoView({ behavior: 'smooth' });
  const Project = () => project.current.scrollIntoView({ behavior: 'smooth' });   
  const Contato = () => contato.current.scrollIntoView({ behavior: 'smooth' });   
  const Sobre = () => sobre.current.scrollIntoView({ behavior: 'smooth' });   
  useEffect(()=>{
    console.log(theme)
    if(theme.theme === 'light'){
      setLogo(<BsSun/>)
    }else{
      setLogo(<BsMoon type='moon'/>)
    }
  },[theme])
  return (
    <Container aberto={open}>
       <RxHamburgerMenu type='hamburger'  onClick={()=>setOpen(!open)}/>
        <Link><NavLink onClick={Home} >Menu</NavLink></Link>
        <Link><NavLink onClick={Sobre} >Sobre</NavLink></Link>
        <Link><NavLink onClick={Project} >Projetos</NavLink></Link>
        <Link><NavLink onClick={Contato}>Contato</NavLink></Link>
      <ButtonTheme onClick={()=>alterTheme()}>{logo}</ButtonTheme>
     
    </Container>
  );
};