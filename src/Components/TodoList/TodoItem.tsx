import {CloseCircleOutlined} from '@ant-design/icons';
import {Checkbox} from 'antd';
import classnames from 'classnames';
import './TodoItem.less';
import {TodoItemType} from '../../types';
import {ChangeMethods, TodoStatus} from '../../enums';
type Props = {
    todoItem: TodoItemType;
    editItem: (
        id: number,
        type: ChangeMethods,
        options?: {
            status: TodoStatus;
        }
    ) => void;
};

export default function TodoItem({todoItem, editItem}: Props) {
    return (
        <div className={classnames('todo-item', {checked: todoItem.status === TodoStatus.DONE})}>
            <Checkbox
                className="todo-item-status"
                onChange={() =>
                    editItem(todoItem.id, ChangeMethods.CHANGE_STATUS, {
                        status: todoItem.status
                    })
                }
            />
            <div className="todo-item-content" title={todoItem.text}>
                {todoItem.text}
            </div>
            <div className="delete-item">
                <CloseCircleOutlined onClick={() => editItem(todoItem.id, ChangeMethods.DELETE)} />
            </div>
        </div>
    );
}
