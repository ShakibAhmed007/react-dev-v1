/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const NewExpense = (props) => {
    // Approach 1
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleEventHandler = (event) => {
        setTitle(event.target.value);
    };
    const amoutEventHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateEventHandler = (event) => {
        setDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseFormData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
        };
        props.onSubmitExpenseForm(expenseFormData);
        // clear value after submission
        setTitle('');
        setAmount('');
        setDate('');
    };
    // End Approach 1

    // Approach 2
    // Whenever need to update state depends on prev state
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleEventHandler1 = (event) => {
        setUserInput((prevState) => ({ ...prevState, title: event.target.value }));
    };
    const amoutEventHandler1 = (event) => {
        setUserInput((prevState) => ({ ...prevState, amount: event.target.value }));
    };
    const dateEventHandler1 = (event) => {
        setUserInput((prevState) => ({ ...prevState, date: event.target.value }));
    };
    const submitHandler1 = (event) => {
        event.preventDefault();
        console.log(userInput);
    };
    // End Approach 2

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleEventHandler} />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} onChange={amoutEventHandler} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateEventHandler} />
                    </div>
                    <div>
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );

    // for approach 2
    // return (
    //     <div>
    //         <form onSubmit={submitHandler1}>
    //             <div>
    //                 <div>
    //                     <label>Title</label>
    //                     <input type="text" onChange={titleEventHandler1} />
    //                 </div>
    //                 <div>
    //                     <label>Amount</label>
    //                     <input type="number" onChange={amoutEventHandler1} />
    //                 </div>
    //                 <div>
    //                     <label>Date</label>
    //                     <input type="date" onChange={dateEventHandler1} />
    //                 </div>
    //                 <div>
    //                     <button type="submit">Add Expense</button>
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
    // );
};

export default NewExpense;
