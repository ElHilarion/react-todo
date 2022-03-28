import { useEffect, useState } from 'react';
import axios from 'axios';

import Memo from '../components/Memo';
import Create from './Create';

// import { dataMemos } from '../dataMemos';

function Items() {
    const [openCreate, setOpenCreate] = useState(false);
    // const [selectedMemo, setSelectedMemo] = useState({});
    const [memoArr, setMemoArr] = useState([]);

    useEffect(() => {
        setMemoArr(JSON.parse(localStorage.getItem('contentMemos')));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('contentMemos', JSON.stringify([...memoArr]) || []);
    });

    const fetchMemos = () => {
        axios
            .get("https://61966553af46280017e7e045.mockapi.io/memo")
            .then((response) => {
                setMemoArr(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    // const editMemo = (updatedMemo) => {
    //     axios.put(`https://61966553af46280017e7e045.mockapi.io/memo/${updatedMemo.id}`, updatedMemo)
    //         .then((response) => {
    //             console.log('Memo edited: ', response.data);
    //             fetchMemos();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    const addMemoToContent = (contentMemos) => {
        axios.post("https://61966553af46280017e7e045.mockapi.io/memo", contentMemos)
            .then((response) => {
                console.log('Memo created: ', response.data);
                fetchMemos();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // удаление заметки
    const deleteMemo = (contentMemos) => {
        if(window.confirm("Do you really want to delete the memo?")){
            axios.delete(`https://61966553af46280017e7e045.mockapi.io/memo/${contentMemos.id}`)
                .then((response) => {
                    console.log("Post deleted: ", response.data);
                    fetchMemos();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    
    const contentMemos = memoArr.map((item) => {
        return(
            <Memo 
                idMemo={item.id}
                titleMemo={item.title}
                textMemo={item.text}
                themeMemo={item.theme}
                deleteMemo={() => deleteMemo(item)}
                // toggleOpenCreate={() => toggleOpenCreate()}
                // handleSelectMemo={() => handleSelectMemo(item)}
            />
        );
    });

    const toggleOpenCreate = () => {
        setOpenCreate(true);
    };
    const toggleHideCreate = () => {
        setOpenCreate(false);
    };

    // const handleSelectMemo = (contentMemos) => {
    //     setSelectedMemo(contentMemos);
    // };

    return(
        <div>
            {openCreate ?
                <Create 
                    toggleHideCreate={toggleHideCreate}
                    addMemoToContent={addMemoToContent}
                /> 
                :
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
            }
            
        </div>
    );
}

export default Items;

