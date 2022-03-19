function Memo(){
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
            <h3>The English International School</h3>
            <p>
                The English International School offers a British style 
                international education for boys and girls aged 3 to 18 
                years old. We have two schools: one located at West part 
                of Moscow, in a lovely residential area near Kutuzovskiy 
                Prospect, and the other in the South-West of Moscow, 
                in the prestigious residential and diplomatic area near 
                the Leninskiy Prospekt and not far from Prospekt Vernadskogo.
            </p>
            <h2 className="memo__theme">English School</h2>
        </div>
    );
}

export default Memo;