import { useEffect, useState } from 'react';
import axios from 'axios';

import Memo from '../components/Memo';
import Create from './Create';
import Edit from './Edit';
import Content from '../components/Content';

// import { dataMemos } from '../dataMemos';

function Items() {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedMemo, setSelectedMemo] = useState({});
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
    
    
    // редактирование заметки
    const editMemo = (updatedMemo) => {
        axios.put(`https://61966553af46280017e7e045.mockapi.io/memo/${updatedMemo.id}`, updatedMemo)
            .then((response) => {
                console.log('Memo edited: ', response.data);
                fetchMemos();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // создание заметки
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
                    console.log("Memo deleted: ", response.data);
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
                toggleOpenEdit={() => toggleOpenEdit()}
                handleSelectMemo={() => handleSelectMemo(item)}
                dateMemo={item.date}
            />
        );
    });

    const toggleOpenCreate = () => {
        setOpenCreate(true);
    };
    const toggleHideCreate = () => {
        setOpenCreate(false);
    };

    const toggleOpenEdit = () => {
        setOpenEdit(true);
    };
    const toggleHideEdit = () => {
        setOpenEdit(false);
    };

    // функция, которая заполняет форму данными из заметки
    const handleSelectMemo = (contentMemos) => {
        setSelectedMemo(contentMemos);
    };


    return(
        <div>
            {openEdit ?
                <Edit 
                    toggleHideEdit={toggleHideEdit}
                    editMemo={editMemo}
                    selectedMemo={selectedMemo}
                /> 
                :
                <div>
                    {openCreate ?
                        <Create 
                            toggleHideCreate={toggleHideCreate}
                            addMemoToContent={addMemoToContent}
                        /> 
                        :
                        <Content
                            toggleOpenCreate={toggleOpenCreate}
                            contentMemos={contentMemos}
                        />
                    }
                </div>
            }
            
        </div>
    );
}

export default Items;

