import React, { Children } from 'react';

const MyContainer = ({className, clidren}) => {
    return (
        <div className={`${className} container mx-auto`}>{Children} </div>
    );
};

export default MyContainer;