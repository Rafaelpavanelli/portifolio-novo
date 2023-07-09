import React, { useContext,useEffect,useState } from 'react';
import { ButtonTheme } from './style';
import { ThemeContext } from '../../../Context.site';
import {BsSun,BsMoon} from 'react-icons/bs';

export const ButtonThemes = () => {
  const {theme,alterTheme} = useContext(ThemeContext);
  const[logo,setLogo]=useState(<BsSun />)
  useEffect(()=>{
    console.log(theme)
    if(theme.theme === 'light'){
      setLogo(<BsSun/>)
    }else{
      setLogo(<BsMoon type='moon'/>)
    }
  },[theme])
  return (
      <ButtonTheme onClick={()=>alterTheme()}>{logo}</ButtonTheme>
  );
};