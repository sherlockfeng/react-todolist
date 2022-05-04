import {useState, ChangeEvent, useRef} from 'react';
import {Input, Button} from 'antd';
import './TodoContent.less';
import {TodoItemType} from '../types';
import {TodoStatus, ChangeMethods} from '../enums';
import TodoList from './TodoList/TodoList';

function TodoContent() {
    const [todoLit, setTodoList] = useState<TodoItemType[]>([]);
    const [inputValue, setInputValue] = useState('');
    const id = useRef(1);

    const addTodoItem = () => {
        if (!inputValue) {
            return;
        }
        id.current++;
        setTodoList([
            ...todoLit,
            {
                id: id.current,
                status: TodoStatus.UNDO,
                text: inputValue
            }
        ]);
        setInputValue('');
    };

    const editItem = (
        id: number,
        type: ChangeMethods,
        options?: {
            status: TodoStatus;
        }
    ) => {
        if (type === ChangeMethods.DELETE) {
            const findIndex = todoLit.findIndex(item => item.id === id);
            if (findIndex !== -1) {
                todoLit.splice(findIndex, 1);
                setTodoList([...todoLit]);
            }
            return;
        }
        if (type === ChangeMethods.CHANGE_STATUS) {
            const findIndex = todoLit.findIndex(item => item.id === id);
            if (findIndex !== -1) {
                if (options?.status === TodoStatus.DONE) {
                    todoLit[findIndex].status = TodoStatus.UNDO;
                } else {
                    todoLit[findIndex].status = TodoStatus.DONE;
                }
                setTodoList([...todoLit]);
            }
            return;
        }
    };

    return (
        <div className="todo-content">
            <TodoList todoItems={todoLit} editItem={editItem} />
            <div></div>
            <div className="todo-input">
                <span className="title">任务：</span>
                <Input.Group compact>
                    <Input
                        className="input"
                        placeholder="安排新的任务吧^_^"
                        onPressEnter={addTodoItem}
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setInputValue(e.currentTarget.value);
                        }}
                    />
                    <Button type="primary" onClick={addTodoItem}>
                        Submit
                    </Button>
                </Input.Group>
            </div>
        </div>
    );
}

export default TodoContent;
