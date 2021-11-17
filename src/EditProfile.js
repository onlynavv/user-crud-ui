import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import './EditProfile.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditProfile = () => {

    return (
        <>
            <article className="container">
                <Card className="edit-profile-wrapper">
                    <CardContent className="form-card">
                        <form className="form-div">
                            <h3>Enter Details</h3>
                            <div>
                                <label>Phone Number:</label>
                                <input type="text" placeholder="Enter Phone Number" name="phonenumber"></input>
                            </div>
                            <div>
                                <label>Qualification:</label>
                                <input type="text" placeholder="Enter Qualification" name="qualification"></input>
                            </div>
                            <div>
                                <label>Year of Passing:</label>
                                <input type="text" placeholder="0" name="passyear"></input>
                            </div>
                            <div>
                                <label>Year of Experience:</label>
                                <input type="text" placeholder="0" name="experience"></input>
                            </div>
                            <div>
                                <label>Notice Period:</label>
                                <input type="text" placeholder="0" name="period"></input>
                            </div>
                            <div>
                                <label>Github URL:</label>
                                <input type="text" placeholder="Enter Github URL" name="github"></input>
                            </div>
                            <div>
                                <label>Profile Image URL:</label>
                                <input type="text" placeholder="Enter Profile Image URL" name="profile"></input>
                            </div>
                            <div>
                                <label>Location:</label>
                                <input type="text" placeholder="Enter Location" name="location"></input>
                            </div>
                            <div className="btn-div">
                                <Button>Edit Profile</Button>
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

export default EditProfile
