import React from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import style from './EmptyData.module.css'


const EmptyData = () => {
    return (
        <div className={style.EmptyData}>
            <span>No data</span>
            <DeleteForeverOutlinedIcon/>
        </div>
    );
};

export default EmptyData;