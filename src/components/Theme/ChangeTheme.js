import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './ChangeTheme.css'
import { useData } from '../../context/ThemeContext';

export default function ChangeTheme() {

    const theme = useContext(ThemeContext);

    const { white } = useData();

  return (
    <div>
      <span>Curren theme: {white}</span>
      <br></br>
        <button className='changeThemeButton'>
            Change Theme
        </button>
    </div>
  )
}
