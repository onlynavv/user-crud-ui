import React from 'react'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import './Users.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

const Users = () => {

    const history = useHistory()

    const rowStyle = {
        display:"flex"
    }

    return (
        <section className="users-wrapper container">
            <div className="wrapper-div">
                <div className="users-heading">
                    <div className="row" style={rowStyle}>
                        <div className="row-mobile">
                            <h4>Id</h4>
                        </div>
                        <div className="">
                            <h4>User</h4>
                        </div>
                        <div className="">
                            <h4>Email</h4>
                        </div>
                        <div className="">
                            <h4>Actions</h4>
                        </div>
                    </div>
                </div>
                <div className="users-body">
                        
                            <div className="row"  style={rowStyle}>
                                <div className="row row-mobile">
                                    1234
                                </div>
                                <div className="row">
                                    userName1
                                </div>
                                <div className="row">
                                    username@test.com
                                </div>
                                <div className="row btn-wrapper">
                                    <Button onClick={()=>{history.push(`/edit-user/`)}} className="action-btn edit-btn"><EditIcon /> Edit</Button>
                                    <Button onClick={()=>{history.push(`/profile/`)}} className="action-btn view-btn"><VisibilityIcon /> Profile</Button>
                                </div>
                            </div>
                        
                    
                </div>
            </div>
        </section>
    )
}

export default Users
