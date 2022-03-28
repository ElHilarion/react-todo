import React from "react";
// import {useState} from "react";

function Memo({
        idMemo, 
        titleMemo, 
        textMemo, 
        themeMemo, 
        deleteMemo, 
        // toggleOpenCreate,
        // handleSelectMemo
    }){

    // const openEditMemo = () => {
    //     handleSelectMemo();
    // };
        
    return(
        <div className="memo" key={idMemo}>
            <div className="memo__header">
                <div className="date">
                    <img width={22} src="./img/time.png" alt="remind"/>
                    <span>09.03.2022</span>
                </div>
                <div className="actions">
                    <div className="edit">
                        <span>EDIT</span>
                        <img width={22} src="./img/edit.png" alt="remind"/>
                    </div>
                    <div className="delete" onClick={deleteMemo}>
                        <span>DELETE</span>
                        <img width={22} src="./img/cart.png" alt="remind"/>
                    </div>
                </div>
            </div>
            <h3>{titleMemo}</h3>
            <p>{textMemo}</p>
            <h2 className="memo__theme">{themeMemo}</h2>
        </div>
    );
}

export default Memo;
