import React from 'react'
import './EditUsers.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditUsers = () => {

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
                                <Button>Edit User</Button>
                            </div>
                            <div className="btn-div">
                                <Button><ArrowBackIcon /> Go Back</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default EditUsers
