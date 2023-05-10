import React, {useState, useEffect} from "react";
import {useCreateArr} from "./myhooks/useCreateArr";
import './form.css';

function MyForm(){
    const floors = useCreateArr(3, 27);
    const rooms = useCreateArr(1, 10);
    const towers = ['A', 'B'];
    const timeinterval = ['9:00 - 11:00', '12:00 - 14:00', '15:00 - 17:00', '18:00 - 20:00'];

    const [order, setOrder] = useState([]);
    const [formTower, setFormTower] = useState('A');
    const [formFloor, setFormFloor] = useState('3');
    const [formRoom, setFormRoom] = useState('1');
    const [formDate, setFormDate] = useState('');
    const [formTime, setFormTime] = useState('9:00 - 11:00');
    const [formComment, setFormComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder(prevState => [...prevState, {tower: formTower, floor: formFloor, room: formRoom, date: formDate, time: formTime, comment: formComment}]);
        console.log(order);
    }

    useEffect(()=>{
        console.log(order);
    }, [order]);

    const clearForm = () => {
        setFormTower('');
        setFormFloor('');
        setFormRoom('');
        setFormDate('');
        setFormTime('');
        setFormComment('');
    }

    return (
        <form action="" className={'myForm'} onSubmit={handleSubmit}>
            <label>
                <>Выберите башню (А или Б):</>
                <select name="selectTower" value={formTower} onChange={(e)=>setFormTower(e.target.value)}>
                    {towers.map(tower => {return (<option value={tower} key={'tower'+tower}>{tower}</option>)})}
                </select>
            </label>
            <label>
                <>Выберите этаж (3-27): </>
                <select name="selectFloor" value={formFloor} onChange={(e)=>setFormFloor(e.target.value)}>
                    {floors.map(floor =>{return (<option value={floor} key={'floor'+floor}>{floor}</option>)})}
                </select>
            </label>
            <label>
                <>Выберите переговорную (1-10): </>
                <select name="selectRoom" value={formRoom} onChange={(e)=>setFormRoom(e.target.value)}>
                    {rooms.map(room => {return (<option value={room} key={'room'+room}>{room}</option>)})}
                </select>
            </label>
            <label>
                <>Вфберите дату:</>
                <input type="date" required value={formDate} onChange={(e)=>setFormDate(e.target.value)}/>
            </label>
            <label>
                <>Выберите время:</>
                <select name="selectTimeInterval" value={formTime} onChange={(e)=>setFormTime(e.target.value)}>
                    {timeinterval.map(interval => {return (<option value={interval} key={'interval: '+interval}>{interval}</option>)})}
                </select>
            </label>
            <label for="comment">
                <>Комментарий:</>
            </label>
            <textarea id="comment" value={formComment} onChange={(e)=>setFormComment(e.target.value)}/>
            <div className={'groupRow'}>
                <button className={'clearButton'} type={'button'} onClick={clearForm}>Очистить</button>
                <button className={'submitButton'} type={'submit'}>Отправить</button>
            </div>

        </form>
    )
}

export default MyForm;