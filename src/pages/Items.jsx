import { useEffect, useState } from 'react';
import axios from 'axios';

import Memo from '../components/Memo';
import Create from './Create';
import Edit from './Edit';
import Content from '../components/Content';

function Items() {
    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedMemo, setSelectedMemo] = useState({});
    const [searchTitle, setSearchTitle] = useState('');
    const [memoArr, setMemoArr] = useState([]);

    // подгружение один раз данных с сервера mokapi при помощи хукка useEffect
    useEffect(() => {
        fetch("https://61966553af46280017e7e045.mockapi.io/memo")
            .then ((response) => response.json())
            .then((memoFromServer) => setMemoArr(memoFromServer))
            .catch((err) => {
                console.log("ERROR", err)
            });
    }, []);

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

    // функция которая с помощью метода filter возвращает отфильтрованные данные
    // сначала мы переводим название в нижний регистр, потом c помощью includes узнаем есть ли совпадение с тем что мы вводим в поиск
    const searchMemosByTitle = memoArr.filter(memo => {
        return memo.title.toLowerCase().includes(searchTitle.toLowerCase())
    });
    
    const contentMemos = searchMemosByTitle.map((item) => {
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
                memoPicture={item.picture}
            />
        );
    });

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
                            setSearchTitle={setSearchTitle}
                        />
                    }
                </div>
            }
            
        </div>
    );
}

export default Items;

