import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './ChangeTheme.css'

export default function ChangeTheme() {

    const theme = useContext(ThemeContext);
    console.log(theme);

  return (
    <div>
        <button className='changeThemeButton'>
            Change Theme
        </button>
    </div>
  )
}
