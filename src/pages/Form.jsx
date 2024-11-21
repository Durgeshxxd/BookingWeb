import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";

const Form = () => {
  return (
    <div className='form'>
<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/108288925607677851776/form/1FAIpQLSdA5SQGU4apMXnVkJDxcXYzZ2krphKfeViXoACSWL5jJyf7mg/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>

















    </div>
    
  )
}

export default Form
