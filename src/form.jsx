import React from "react";

function MyForm(){
    const floors = [];
    for (let floor=3; floor<=27; floor++ ){
        floors.push(floor);
    }
    console.log(floors);

    const rooms = [];
    for (let room = 1; room <= 10; room++){
        rooms.push(room);
    }
    console.log(rooms);


    return (
        <form action="">
            <label>
                <p>Выберите башню (А или Б):</p>
                <select name="selectTower">
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
            </label>
            <label>
                <p>Выберите этаж (3-27): </p>
                <select name="selectTower">
                    {floors.map(floor =>{return (<option value={floor}>{floor}</option>)})}
                </select>
            </label>
            <label>
                <p>Выберите переговорную (1-10): </p>
                <select name="selectTower">
                    {rooms.map(room => {return (<option value={room}>{room}</option>)})}
                </select>
            </label>
        </form>
    )
}

export default MyForm;