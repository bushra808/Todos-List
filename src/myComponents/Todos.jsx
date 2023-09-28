import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            sno: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Todos;
