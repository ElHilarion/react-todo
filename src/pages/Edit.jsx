import React from "react";
import { useState } from 'react';

function Edit({ toggleHideEdit, editMemo, selectedMemo }) {
    const [memoTheme, setMemoTheme] = useState(selectedMemo.theme);
    const [memoTitle, setMemoTitle] = useState(selectedMemo.title);
    const [memoText, setMemoText] = useState(selectedMemo.text);

    const handleMemoThemeChange = (e) => {
        setMemoTheme(e.target.value);
    };
    const handleMemoTitleChange = (e) => {
        setMemoTitle(e.target.value);
    };
    const handleMemoTextChange = (e) => {
        setMemoText(e.target.value);
    };

    const saveMemo = (e) => {
        e.preventDefault();
        const memo = {
            id: selectedMemo.id,
            theme: memoTheme,
            title: memoTitle,
            text: memoText,
            date: currentDate
        }

        editMemo(memo);
    };

    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="content">
            <div className="content__header">
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <img width={30} src="./img/search.png" alt="search"/>
                </div>
                <div className="header__buttons">
                    <div className="button btn-1">
                        <img width={30} src="./img/arrow.png" alt="arrow" onClick={toggleHideEdit} />
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
                        <span>{currentDate}</span>
                    </div>
                    <div className="actions">
                        <div className="edit" onClick={saveMemo}>
                            <span>SAVE</span>
                            <img width={22} src="./img/save.png" alt="Save"/>
                        </div>
                        <div className="delete" onClick={toggleHideEdit}>
                            <span>CANCEL</span>
                            <img width={22} src="./img/cancel.png" alt="Cancel"/>
                        </div>
                    </div>
                </div>
                <textarea 
                    className="create__theme" 
                    placeholder="Theme"
                    value={memoTheme}
                    onChange={handleMemoThemeChange}
                >
                </textarea>
                <textarea 
                    className="create__title" 
                    placeholder="Title"
                    value={memoTitle}
                    onChange={handleMemoTitleChange}
                >
                </textarea>
                <textarea 
                    className="create__text" 
                    placeholder="Enter text..."
                    value={memoText}
                    onChange={handleMemoTextChange}
                >
                </textarea>
            </div>
        </div>
    );
}

export default Edit;

