import React, { useState } from 'react';


function Create({ open, setOpen }) {


  
    return (
        <div className={open ? 'content' : 'content open'}>
            <div className="content__header">
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <img width={30} src="./img/search.png" alt="search"/>
                </div>
                <div className="header__buttons">
                    <div className="button btn-1" onClick={() => setOpen(false)}>
                        <img width={30} src="./img/arrow.png" alt="arrow"/>
                    </div>
                    <div className="button btn-2">
                        <span>Add photo</span>
                        <img width={30} src="./img/photo.png" alt="add photo"/>
                    </div>
                    <div className="button btn-3">
                        <span>Add to favourites</span>
                        <img width={30} src="./img/heart.png" alt="add to favourites"/>
                    </div>
                    <div className="button btn-2">
                        <span>Remind</span>
                        <img width={30} src="./img/remind.png" alt="remind"/>
                    </div>
                </div>
            </div>
            <div className="create__memo">
                <div className="create__top">
                    <div className="date">
                        <img width={22} src="./img/time.png" alt="date"/>
                        <span>06.03.2022</span>
                    </div>
                    <div className="actions">
                        <div className="edit">
                            <span>SAVE</span>
                            <img width={22} src="./img/save.png" alt="Save"/>
                        </div>
                        <div className="delete">
                            <span>CANCEL</span>
                            <img width={22} src="./img/cancel.png" alt="Cancel"/>
                        </div>
                    </div>
                </div>
                <textarea 
                    className="create__theme" 
                    placeholder="Theme"
                    
                    
                >
                </textarea>
                <textarea 
                    className="create__title" 
                    placeholder="Title"
                 
                    
                >
                </textarea>
                <textarea 
                    className="create__text" 
                    placeholder="Enter text..."
                    
                    
                >
                </textarea>
            </div>
        </div>
    );
}

export default Create;

