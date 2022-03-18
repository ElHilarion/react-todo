import React from 'react';

import '../scss/create.scss';

function Create() {
    return (
        <div class="todo__memo">
            <div class="memo__info">
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
            <textarea class="memo__theme" placeholder="Theme"></textarea>
            <textarea class="memo__title" placeholder="Title"></textarea>
            <textarea class="memo__text" placeholder="Enter text..."></textarea>
        </div>
    );
}

export default Create;