/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */

import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated Title !!!');
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    );
}

export default ExpenseItem;
