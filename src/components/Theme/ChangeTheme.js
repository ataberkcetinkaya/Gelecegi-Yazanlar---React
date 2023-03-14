import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './ChangeTheme.css'
import { useData } from '../../context/ThemeContext';

export default function ChangeTheme() {

    const { light } = useData();

  return (
    <div>
      <span>Curren theme: {light}</span>
      <br></br>
        <button className='changeThemeButton'>
            Change Theme
        </button>
    </div>
  )
}
