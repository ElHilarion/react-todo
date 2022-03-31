import React from "react";

function Content({toggleOpenCreate, contentMemos}){
    return(
        <div className="content">
            <div className="content__header">
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <img width={30} src="./img/search.png" alt="search"/>
                </div>
                <div className="header__buttons">
                    <div className="button" onClick={toggleOpenCreate}>
                        <span>Create entry</span>
                        <img width={40} src="./img/plus.png" alt="create a new entry"/>
                    </div>
                    <div className="button">
                        <span>Remind</span>
                        <img width={30} src="./img/remind.png" alt="remind"/>
                    </div>
                </div>
            </div>
            <div className="content__memos">
                <div className="content__items">
                
                    {contentMemos}
                
                </div>
            </div> 
        </div> 
    );
}

export default Content;