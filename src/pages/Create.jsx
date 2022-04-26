import React from "react";
import { useState } from 'react';

function Create({ toggleHideCreate, addMemoToContent }) {
    const [memoTheme, setMemoTheme] = useState('');
    const [memoTitle, setMemoTitle] = useState('');
    const [memoText, setMemoText] = useState('');
    const [memoPicture, setMemoPicture] = useState(null);

    const handleMemoThemeChange = (e) => {
        setMemoTheme(e.target.value);
    };
    const handleMemoTitleChange = (e) => {
        setMemoTitle(e.target.value);
    };
    const handleMemoTextChange = (e) => {
        setMemoText(e.target.value);
    };

    const createMemo = (e) => {
        e.preventDefault();
        const memo = {
            theme: memoTheme,
            title: memoTitle,
            text: memoText,
            date: currentDate,
            picture: memoPicture
        }

        addMemoToContent(memo);
    };

    // добавление даты 
    const currentDate = new Date().toLocaleDateString();

    // добавление изображения заметки 
    const handleMemoPicture = (e) => {
    };

    const ImageMemo = ({image}) => {
        // удаление фото
        const handleDeletePicture = () => {
            setMemoPicture((image) => {
                image.slice();
            });
        };
        return (
            <div className="addPhoto__images">
                <div className="addPhoto__img">
                    <img src="" alt={image.name} />
                    <div className="overlay">
                        <img width={25} height={25} src="./img/deletePhoto.png" className="delete__img" onClick={() => handleDeletePicture()}/>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="content">
            <div className="content__header">
                <div className="header__buttons">
                    <div className="button btn-1">
                        <img width={30} src="./img/arrow.png" alt="arrow" onClick={toggleHideCreate} />
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
                        <div className="edit" onClick={createMemo}>
                            <span>SAVE</span>
                            <img width={22} src="./img/save.png" alt="Save"/>
                        </div>
                        <div className="delete" onClick={toggleHideCreate}>
                            <span>CANCEL</span>
                            <img width={22} src="./img/cancel.png" alt="Cancel"/>
                        </div>
                    </div>
                </div>
                <div className="textareas">
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
                </div>
                <div className="addPhoto__block">
                    <label className="addPhoto__label" onChange={handleMemoPicture}>
                        <span>Add photo</span>
                        <img width={25} height={25} src="./img/addPhoto.png" alt="add photo"/>
                        <input type="file" className="input__file"/>
                    </label>
                    {memoPicture && <ImageMemo image={memoPicture} />}
                </div>
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

export default Create;