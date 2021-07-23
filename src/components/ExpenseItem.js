import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div>
            <div> Date {new Date().toDateString()}</div>
            <div>
                {' '}
                <h2>Car Insurance</h2>
                <div>10000 TK</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
