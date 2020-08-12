import React from 'react'

const kycStatus = (props) => {

    switch (props.status) {
        case "Pending":
            return <><h style={{color:'yellow',margin:'5px'}}>{props.status}</h><br/></>
        case "Approved":
            return <><h style={{color:'green',margin:'5px'}}>{props.status}</h><br/></>
        case "Reject":
            return <><h style={{color:'red',margin:'5px'}}>{props.status}</h><br/></>
        default :
            return <><h style={{color:'black',margin:'5px'}}>{props.status}</h> <button type='button'style={{padding:'2px',marginLeft:'10px'}} className='btn btn-dark'>Confirm identity</button><br/></>


    }

    
}

export default kycStatus
