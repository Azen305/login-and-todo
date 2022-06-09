import React, { useState } from 'react'
var num = 0;
const Todo = () => {



    const [items, setItems] = useState('');
    const [editItems, setEditItems] = useState('');


    const [itemList, setItemList] = useState([]);
    function addItems() {
        setItemList((prev) => { return [...prev, items] })
        setItems('')
    }

    function edit(a) {
        console.log(a);
        num = a
        console.log(itemList[a]);
        setItems(itemList[a]);
        setEditItems(itemList[a]);

    }
    function doneEdit() {
        console.log("ok");
        console.log(num)
        console.log(editItems);
        setItemList((prev) => { prev[num] = editItems; console.log(prev); return [...prev] })


    }

    return (
        <>
            <div>
                <div>
                    <input type="text" value={items} onChange={(e) => { setItems(e.target.value) }} />
                    <button onClick={() => { addItems() }}>Add</button>
                </div>
            </div>
            <div>
                <ul>
                    {itemList.map(function (i, index) {
                        return <li key={index} onClick={() => { edit(index) }}>{i}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Edit Part</h2>
                <input type="" value={editItems} onChange={(e) => { setEditItems(e.target.value) }} />
                <button onClick={() => { doneEdit() }}>Save</button>
            </div>
        </>
    )
}

export default Todo