import React from 'react';
import './Bottombar.css';
import newspeed from './icon/newspeed.png';
import unselected_newspeed from './icon/newspeed_un.png';
import unselected_recommand from './icon/recommand_un.png';
import unselected_event from './icon/event_un.png';
import personal from './icon/personal.png';
import unselected_personal from './icon/personal_un.png';

import {NavLink} from 'react-router-dom';

const Bottombar = props => (
    <header className="bottombar">
        <nav className="bottombar__navigation">
            <ul className="bottombar__list">
                <li className="bottombar__listItem">
                    <NavLink to="/newspeed">
                        <img className="bottombar__icon" src={props.isnewspeed ? newspeed : unselected_newspeed}/>
                    </NavLink>
                </li>
                <li className="bottombar__listItem"><img className="bottombar__icon" src={unselected_recommand}/></li>
                <li className="bottombar__listItem"><img className="bottombar__icon" src={unselected_event}/></li>
                <li className="bottombar__listItem">
                    <NavLink to="/personal">
                        <img className="bottombar__icon" src={props.ispersonal ? personal : unselected_personal}/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Bottombar;