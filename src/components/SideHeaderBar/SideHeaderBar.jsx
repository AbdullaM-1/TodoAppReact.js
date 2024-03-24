import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function SideHeaderBar() {
return(

    <>
    <div>
    <Header>
        <nav>
            <div>
                    <Link to="/"> <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        /></Link>
                     <div>
                        <Link
                            to="#"
                        >
                            Show All tasks
                        </Link>
                        <Link
                            to="#">
                            Edit Todo Page
                        </Link>
                        </div>
            </div>
        </nav>
    </Header>
    </div>
    
    </>

);

}
 