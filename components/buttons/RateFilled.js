import React from 'react'
import ChevronUp from '../../assets/svg/chevronUp'

const styles  = {
    RateFilled:'ng-green-600 flex items-center px-3 ml-3 rounded-xl'
}

const RateFilled = () => {
  return (
    <div className={styles.RateFilled}>
        <ChevronUp />
        <small className='p1-1'>23.32%</small>
    </div>
  )
}

export default RateFilled