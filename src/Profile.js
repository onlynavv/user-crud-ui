import React from 'react'
import './Profile.css'
import { Button, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Profile = () => {

    return (
        <section className="container">
            <Card className="profile-wrapper">
                <CardContent className="profile-container">
                    <div className="profile-header">
                        <h3>Profile</h3>
                        <Button className="btn">Add Profile</Button>
                    </div>
                    <div className="profile-body">
                        <div className="profile-left">
                            <div className="user-div">
                                <img src="https://pbs.twimg.com/profile_images/1436192632338673667/GXyiOpHy_400x400.jpg" alt="userImage"></img>
                                <h4>onlynavv</h4>
                            </div>
                            <div>
                                <p><span>Username:</span> onlynavv</p>
                            </div>
                            <div>
                                <p><span>Phone:</span> 9876543210</p>
                            </div>
                            <div>
                                <p><span>Email:</span> username@test.com</p>
                            </div>
                            <div>
                                <p><span>Qualification:</span> B.E</p>
                            </div>
                            <div>
                                <p><span>Year of Passing:</span> 2018</p>
                            </div>
                            <div>
                                <p><span>Year of Experience:</span> 1</p>
                            </div>
                        </div>
                        <div className="profile-right">
                            <div>
                                <p><span>Notice Period:</span> 0</p>
                            </div>
                            <div>
                                <p><span>Github URL:</span> <a href='https://github.com/onlynavv' target="_blank" rel="noreferrer">https://github.com/onlynavv</a></p>
                            </div>
                            <div>
                                <p><span>Profile URL:</span> https://pbs.twimg.com/profile_images/1436192632338673667/GXyiOpHy_400x400.jpg</p>
                            </div>
                            <div>
                                <p><span>Location:</span>Test Location</p>
                            </div>
                            <div>
                                <Button><ArrowBackIcon /> Go Back</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Profile
