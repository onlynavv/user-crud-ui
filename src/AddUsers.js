import React from 'react'
import './AddUsers.css'
import './index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AddUsers = () => {

    return (
        <>
            <article className="container">
                <Card className="add-user-wrapper">
                    <CardContent className="form-card">
                        <form className="form-div">
                            <div>
                                <label>UserName:</label>
                                <input type="text" placeholder='Enter Username' name="username"></input>
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="text" placeholder="Enter Email Address" name="email"></input>
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" placeholder="Enter Password" name="password"></input>
                            </div>
                            <div className="btn-div">
                                <Button>Add User</Button>
                            </div>
                            <div>
                                <Button><VisibilityIcon /> View Users List</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default AddUsers
