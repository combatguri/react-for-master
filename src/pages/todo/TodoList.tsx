import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';

interface IForm {
    toDo: string;
}

interface ITodo {
    text: string;
    id: number;
    category: 'TO_DO' | 'DOING' | 'DONE';
}

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
