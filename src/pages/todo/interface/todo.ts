export interface IForm {
    toDo: string;
}

export interface ITodo {
    text: string;
    id: number;
    category: 'TO_DO' | 'DOING' | 'DONE';
}
