import React, { useState } from 'react'
import '../App.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css'


const Cities = () => {
        const [phone ,setphone] = useState('');
    
  return (
    <div>
      <PhoneInput 
      country={'in'}
      value={phone}
      onChange={phone => setphone(phone)}
      enableSearch={true}
      disableSearchIcon={false}
      searchPlaceholder="Search"
      containerStyle={{ width:'350px'}}
      inputStyle={{ width: '100%' }}
      />
    </div>
  )
    
}

export default Cities
