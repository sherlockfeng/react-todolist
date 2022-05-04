import {TodoStatus} from './enums';

export type TodoItemType = {
    id: number;
    status: TodoStatus;
    text: string;
};
