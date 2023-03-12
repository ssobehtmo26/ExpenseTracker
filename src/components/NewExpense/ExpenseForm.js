import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredamount] = useState('');
    const [entereddate, setEntereddate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredamount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEntereddate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: +enteredamount,
            date: new Date(entereddate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredamount('');
        setEntereddate('');
    }; 

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type ='text' value={enteredTitle}onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type ='number' min='0.01' step='0.01' value={enteredamount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type ='date' min='01-01-2000' max='01-01-3000' value={entereddate}onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;