import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>{new Date().toDateString()}</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">10000 TK</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
