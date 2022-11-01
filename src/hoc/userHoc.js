import React from 'react';

const UserHoc = (WrappedComponent, WrappedComp2, arg1) => {



    return (props) =>{
        <>
            {arg1}
            <WrappedComp2 />
            <WrappedComponent {...props}/>
        </>
    }
}

export default UserHoc;