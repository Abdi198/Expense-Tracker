import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
     const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmount, setEnteredAmount] = useState('');
     const [enteredDate, setEnteredDate] = useState('');
     
    const titleHandler = (event) => {
       setEnteredTitle(event.target.value); 
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSavedExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


 return (

 <form onSubmit={submitHandler}>
   <div className='new-expense__controls'>
   <div className='new-expense__control'>
       <label>Title</label>
       <input type="text" value={enteredTitle} onChange={titleHandler}/>
   </div>
   <div className='new-expense__control'>
       <label>Amount</label>
       <input type="number" min='' max='' value = {enteredAmount} onChange={amountHandler}/>
   </div>
   <div className='new-expense__control'>
       <label>Date</label>
       <input type="date" min='01-01-2019' max='12-12-2022' value = {enteredDate} onChange={dateHandler}/>
   </div>
        <div className='new-expense__button'>
            <button type='submit'>Add Expense</button>
            </div>
</div>
</form>

    )

    

}

export default ExpenseForm;