import React from 'react';
import moment from 'moment'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="footer-row">
                    {/* column1 */}
                    <div className="colu">
                        <h4>Thicc Memes INC</h4>
                        <ul className="list-unstyled">
                            <li>3232-2242-313</li>
                            <li>Moscow, Russia</li>
                            <li>123 Street South North</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                        <ul className="list-unstyled">
                            <li>Dank Memes</li>
                            <li>Moscow, Russia</li>
                            <li>123 Street South North</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4>Third Stuff</h4>
                        <ul className="list-unstyled">
                            <li>Other Memes</li>
                            <li>Moscow, Russia</li>
                            <li>123 Street South North</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <p className="col-sm">
                        &copy;{moment().format('YYYY')} THICC MEMES INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}
