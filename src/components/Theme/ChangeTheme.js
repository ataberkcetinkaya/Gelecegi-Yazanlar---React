import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './ChangeTheme.css'
import { useData } from '../../context/ThemeContext';

export default function ChangeTheme() {

    const { theme, toggleTheme } = useData();

  return (
    <div>
      <span>Current theme: {theme}</span>
      <br></br>
        <button onClick={toggleTheme} className='changeThemeButton'>
            Change Theme
        </button>
    </div>
  )
}
