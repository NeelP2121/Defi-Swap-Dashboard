import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'

const styles = {
    dropDownBtn:'flex items-center mr-2 rounded-md px-2 bg-blue-700 cursor-pointer',
}

const DropDownBtn = ({label}) => {
  return (
    <div className={styles.dropDownBtn}>
        <p className='mr-2'>{label}</p>
        <ChevronDown />
    </div>
  )
}

export default DropDownBtn