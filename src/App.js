import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const saveExpenseData = (expenseFormData) => {
        console.log(expenseFormData);
        setExpenses((prevExpenses) => [expenseFormData, ...prevExpenses]);
    };
    const element = (
        <div>
            <NewExpense onSubmitExpenseForm={saveExpenseData} />
            <Expenses title="Expenses" expenses={expenses} />
        </div>
    );
    return element;
}

export default App;
