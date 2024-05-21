import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IForm, ITodo } from './interface/todo';

const toDoState = atom<ITodo[]>({
    key: 'toDo',
    default: []
});

function TodoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            {
                text: toDo,
                id: Date.now(),
                category: 'TO_DO'
            },
            ...oldToDos
        ]);
        setValue('toDo', '');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register('toDo', {
                        required: '입력해 주세요'
                    })}
                    placeholder="할일을 입력 해 주세요"
                />
                <button>Add</button>
            </form>

            <br />
            <br />
            <br />

            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
                <li>asdf</li>
            </ul>
        </div>
    );
}

export default TodoList;
