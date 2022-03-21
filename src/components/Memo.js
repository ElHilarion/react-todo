function Memo(props){
    return(
        <div className="memo">
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
                    <div className="delete">
                        <span>DELETE</span>
                        <img width={22} src="./img/cart.png" alt="remind"/>
                    </div>
                </div>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <h2 className="memo__theme">{props.theme}</h2>
        </div>
    );
}

export default Memo;
