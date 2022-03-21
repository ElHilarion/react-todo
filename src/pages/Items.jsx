import React, { useState } from 'react';
import Memo from '../components/Memo';
import Create from './Create';

import { dataMemos } from '../dataMemos';

function Items() {
    const [openCreate, setOpenCreate] = useState(false);
    

    return(
        <div>
            <div className={openCreate ? 'content open' : 'content'}>
                <div className="content__header">
                    <div className="header__search">
                        <input type="text" placeholder="Search"/>
                        <img width={30} src="./img/search.png" alt="search"/>
                    </div>
                    <div className="header__buttons">
                        <div className="button" onClick={() => setOpenCreate(!openCreate)}>
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
                    
                        {dataMemos.map((obj) => (
                            <Memo 
                                id={obj.id}
                                title={obj.titleMemo}
                                text={obj.textMemo}
                                theme={obj.themeMemo}
                            />
                        ))}
                       
                    </div>
                </div> 
            </div> 
            <Create 
                open={openCreate} 
                setOpen={setOpenCreate}
            /> 
        </div>
    );
}

export default Items;

