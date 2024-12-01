import React from 'react'
import "../Styles/Plans.css"
import Navbar from '../Components/Navbar'
export default function Plans() {
    return (
        <React.Fragment>
            <div className='Plans-Container'>
                <Navbar />
                <div className='Plans-Content'>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Free Plan</th>
                                <th>Pro Plan</th>
                                <th>Premium Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lesson Access</td>
                                <td>Limited</td>
                                <td>Extended</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Group Classes</td>
                                <td>Limited</td>
                                <td>Small Groups</td>
                                <td>Exclusive Groups</td>
                            </tr>
                            <tr>
                                <td>1:1 Sessions</td>
                                <td>None</td>
                                <td>Monthly</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Progress Tracking</td>
                                <td>Basic</td>
                                <td>Advanced</td>
                                <td>AI-Powered</td>
                            </tr>
                            <tr>
                                <td>Resources</td>
                                <td>Free Downloads</td>
                                <td>Exclusive Content</td>
                                <td>Premium Materials</td>
                            </tr>
                            <tr>
                                <td>Community Access</td>
                                <td>Forum Only</td>
                                <td>Pro Events</td>
                                <td>Premium Events</td>
                            </tr>
                            <tr>
                                <td>Nutrition/Diet Planning</td>
                                <td>None</td>
                                <td>Limited Plans</td>
                                <td>Fully Customized</td>
                            </tr>
                            <tr>
                                <td>Webinars/Workshops</td>
                                <td>None</td>
                                <td>Limited Access</td>
                                <td>Unlimited Access</td>
                            </tr>
                            <tr>
                                <td>Offline Mode</td>
                                <td>None</td>
                                <td>Available</td>
                                <td>Available</td>
                            </tr>
                            <tr>
                                <td>Family/Group Sharing</td>
                                <td>None</td>
                                <td>None</td>
                                <td>Up to 4 Accounts</td>
                            </tr>
                            <tr>
                                <td>Support</td>
                                <td>Standard</td>
                                <td>Priority</td>
                                <td>24/7 Priority</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='button-td'><button>Free</button></td>
                                <td className='button-td'><button>3.99$/Month</button></td>
                                <td className='button-td'><button>12.99$/Month</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}
