import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
     <div className="headerTitleFlex">
    <h5>Lambda School</h5>
    <p className="gray">@LambdaSchool </p>
    <p className ='gray'>&#183;</p>
    <p className="gray">26 jan</p>
    </div>
    );
}

export default HeaderTitle;