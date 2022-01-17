import React from 'react';
import './Company.css'
import Spinner from '../Spinner/Spinner'

const Companies = ({info,handleAdd,spinner}) => {
    console.log(info.registryCode)
    console.log(spinner)
    return (
        <div className={`Company ${info.id && 'selected'} `} >
            <span>{info.name}</span>      
            <span>Reg.nr: {info.registryCode}</span>   
            {!info.id && (spinner==info.registryCode ? <Spinner/> : <button onClick={()=>handleAdd(info.registryCode)}>ADD to SYSTEM</button>)}   
        </div>
    );
};

export default Companies;