import { useState } from 'react'

function List({ element, onDelete, onUpdate, allToggle }) {

    const [isComplete, setIsComplete] = useState(element.isCompleted);
    //console.log(element);
    const onClickCheckBox = (e) => {
        //console.log(e.target.checked)
        const newCheck = e.target.checked;
        setIsComplete(newCheck);
        element.isCompleted = newCheck;
        onUpdate()
    };


    const onClickDelBut = () => {
        onDelete()
    };

    return (
        <div>

            <li className={isComplete ? "completed" : ""}>
                <div className="view">
                    <input
                        className='toggle'
                        type="checkbox"
                        onClick={onClickCheckBox}
                        checked={isComplete}
                    />
                    <label htmlFor="">{element.inpValue}</label>
                    <button className='destroy' onClick={onClickDelBut}></button>
                </div>
            </li>

        </div>
    )
}

export default List;