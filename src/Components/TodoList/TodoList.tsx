import {TodoItemType} from '../../types';
import {ChangeMethods, TodoStatus} from '../../enums';
import TodoItem from './TodoItem';

type Props = {
    todoItems: TodoItemType[];
    editItem: (
        id: number,
        type: ChangeMethods,
        options?: {
            status: TodoStatus;
        }
    ) => void;
};

function TodoList({todoItems, ...restProps}: Props) {
    return (
        <div className="todo-list">
            {todoItems.map(item => (
                <TodoItem todoItem={item} key={item.id} {...restProps} />
            ))}
        </div>
    );
}

export default TodoList;
