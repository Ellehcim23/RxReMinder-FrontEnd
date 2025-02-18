"use client";
import React from 'react';
import CustomCalendar from '../components/calendar/Calender';
import DayDoses from '../components/day doses/DayDoses';
import Layout from 'src/app/sidebarTest/page.js';
import DailyPercentage from '../components/daily percentage/DailyPercentage';

function Dashboard() {
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    {/* FIRST COLUMN (Navbar) */}
                    {/* <div className="column is-one-quarter navbar-column">
                        <div className="card full-height">
                            <div className="card-content">
                                {/* <navbar /> */}
                    {/* <div>Placeholder for navbar card</div>
                            </div>
                        </div> */}
                    {/* </div> */}

                    {/* SECOND COLUMN */}
                    <div className="column is-half">
                        <div className="level">
                            {/* user greeting */}
                            <div className="level-left">
                                <h1 className="title is-2">Hello, [User's Name]!</h1>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <CustomCalendar />
                            </div>
                        </div>
                        <br />
                        <div className="columns">
                            {/* First card */}
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        <div>Placeholder content for first card</div>
                                    </div>
                                </div>
                            </div>

                            {/* Second card */}
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        {/* <div>Placeholder content for second card</div> */}
                                        {/* <DailyPercentage /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THIRD COLUMN */}
                    <div className="column is-one-quarter">
                        <div className="level">
                            {/* Spacer for the left side */}
                            <div className="level-left"></div>

                            {/* profile image icon on the right */}
                            <div className="level-right">
                                <figure className="image is-48x48">
                                    <img src="/path-to-user-profile-icon.jpg" alt="User's Profile" />
                                </figure>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-content">
                                <DayDoses />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default Dashboard;





