import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './ChangeTheme.css'

export default function ChangeTheme() {

    const theme = useContext(ThemeContext);

  return (
    <div>
      <span>Current Theme: {theme}</span>
      <br></br>
        <button className='changeThemeButton'>
           Change Theme
        </button>
    </div>
  )
}
