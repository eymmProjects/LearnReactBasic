import React from 'react';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = () =>{
    return(
        <>
        <Auth>

            <Card>
                Profile

            </Card>
        </Auth>
        </>
    ) 
}


export default Profile;