import React, { useState, Fragment, useEffect } from 'react'
import classes from './profile.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UpdateProfile } from '../../actions/profileActions'
import KycStatus from './kycStatus.profile'
const CreateProfile = ({ UpdateProfile , profile: {profile} , auth : { user } }) => {

    useEffect( ()=> {
        if(profile){
            setFormData({
                facebook : profile.facebook,
                instagram : profile.instagram,
                line : profile.line,
                twitter : profile.twitter
            })
        }
    },[profile])
    const socialMedia ={}


    const [formData, setFormData ] = useState( profile ? {
        facebook : profile.facebook,
        instagram : profile.instagram,
        line : profile.line,
        twitter : profile.twitter
    } : {})

    const onChange = e => {

        setFormData({...formData,[e.target.name]:e.target.value}) }

    
    const onSave = (e) => {
        e.preventDefault();
        UpdateProfile(formData);
    }


    const [editForm,setToEdit] = useState(false)
    

    

    

    return (
        
            <form  onSubmit={ e => onSave(e) } className={classes.ProfileForm}>
                
                <label>Fist Name</label>
                <input  disabled='disabled' value={profile && profile.firstName} name='firstName' className='form-control' type='text'  ></input>
                <label>Last Name</label>
                <input  disabled='disabled' value={profile && profile.lastName} name='lastName' className='form-control' type='text'   ></input>
                <label>Email</label>
                <input className='form-control' type='text' value={ user && user.email} disabled='disabled'></input>
                <h>KYC Status</h><br/>
                <KycStatus status={profile && profile.KYCstatus}/>
                <h>Trusted Point</h><br/>
                <h style={{color:'green',margin:'5px'}}>{profile && profile.tp}</h><br/>
                
                <hr/>
                <button type='button'onClick={ () => setToEdit(!editForm)} className='btn btn-secondary' style={{float: 'right'}}><i class="far fa-edit"></i>Edit</button><br/>
                <h1>Social Media</h1>
                <br/>
                <i className="icon-facebook icon-large" style={{marginBottom:'10px'}}></i> Facebook 
                { editForm ?  
                    <input placeholder='Facebook URL' name='facebook' value={  formData.facebook  } onChange={ e => onChange(e)} className='form-control' type='text'  style={{margin:'10px'}}></input> :
                    <p style={{marginLeft:'20px'}}><a href={profile && profile.facebook}>{profile && profile.facebook}</a></p> }
            
                <i className="fab fa-line icon-large" style={{marginBottom:'10px'}}></i> Line
                {
                    editForm ?
                    <input placeholder='Line ID' name='line' value={formData.line} onChange={ e => onChange(e)} className='form-control' type='text'  style={{margin:'10px'}}></input> :
                    <p style={{marginLeft:'20px'}}>{profile && profile.line}</p>
                }
                
                <i className="icon-instagram icon-large" style={{marginBottom:'10px'}}></i> Instagram
                {
                    editForm ?
                    <input placeholder='Instagram URL' name='instagram' value={formData.instagram} onChange={ e => onChange(e)} className='form-control' type='text'  style={{margin:'10px'}}></input> :
                    <p style={{marginLeft:'20px'}}><a href={profile && profile.instagram}>{profile && profile.instagram}</a></p>
                }
                
                <i className="icon-twitter-sign icon-large" style={{marginBottom:'10px'}}></i> Twitter 
                {
                    editForm ?
                    <input placeholder='Twitter URL' name='twitter' value={formData.twitter} onChange={ e => onChange(e)} className='form-control' type='text'  style={{margin:'10px'}}></input> :
                    <p style={{marginLeft:'20px'}}><a href={profile && profile.twitter}>{profile && profile.twitter}</a></p>
                }
                
                <br/>
                {
                  editForm ?   <button type="submit" className="btn btn-info" >Save</button> : null
                }
                
                
                

            </form>
        
    )
}

CreateProfile.propTypes = {
    profile : PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile : state.profileReducer,
    auth : state.authReducer
})

export default connect(mapStateToProps,{ UpdateProfile })(CreateProfile)
