import React from 'react';
import './myCompaniesInfo.css' 

const myCompaniesInfo = () => {
    return (
            <section className='myCompanies'>
                <div className='flower'>
                    <img src='flower.png' />
                </div>
                <div className='description'>
                    <span>My companies</span>
                    <p>According to the EE Business Register, the following companies are related to you. </p>
                </div>
            </section>
    );
};

export default myCompaniesInfo;