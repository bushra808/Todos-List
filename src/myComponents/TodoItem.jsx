import PropTypes from 'prop-types';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
      <hr />
    </>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
