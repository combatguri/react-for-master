import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

type IFormData = {
    errors: {
        [key: string]: string;
        // email: {
        //   type: string | null;
        //   message: string | null;
        // };
    };
    firstName: string;
    lastName: string;
    password: string;
    passwordConfirm: string;
    email: string;
    serverError?: string;
};

const FormContainer = styled.div`
    form {
        input {
            display: flex;
        }
    }
`;

function Form() {
    const {
        register, // form validate 생성
        watch, // 상태 감시
        handleSubmit, // submit 후 함수실행
        formState: { errors }, // form Error 반환
        setError, // 특정 에러 발생
        clearErrors,
        setValue // 폼 필드 set value
    } = useForm<IFormData>({
        defaultValues: {
            email: '@gmail.com'
        }
    });

    const onValid = (data: IFormData) => {
        if (data.password !== data.passwordConfirm) {
            setError(
                'passwordConfirm',
                {
                    message: '비밀번호가 맞지 않습니다.'
                },
                {
                    shouldFocus: true
                }
            );
        }

        console.log('폼 저장 고고고');
        setValue('email', ''); // 폼 필드 set ''
        // setError("serverError", { message: "서버 에러" });
    };

    const onClearError = (): void => {
        console.log('이런?');
        clearErrors();
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onValid)}>
                <p>
                    <input
                        {...register('firstName', {
                            required: '성을 입력해 주세요',
                            validate: (value) => (value.includes('nico') ? 'no nico' : true)
                        })}
                        placeholder="성"
                    />
                    <span>{errors?.firstName?.message}</span>
                </p>
                <p>
                    <input
                        {...register('lastName', {
                            required: '이름을 입력해 주세요',
                            validate: {
                                noNico: (value) => (value.includes('nico') ? 'no nico' : true),
                                noNick: (value) => (value.includes('nick') ? 'no nick' : true)
                            }
                        })}
                        placeholder="이름"
                    />
                    <span>{errors?.lastName?.message}</span>
                </p>
                <p>
                    <input
                        {...register('password', {
                            required: '비밀번호를 입력해 주세요.',
                            minLength: {
                                value: 5,
                                message: '비밀번호가 짧습니다'
                            },
                            maxLength: {
                                value: 20,
                                message: '비밀번호가 깁니다'
                            }
                        })}
                        placeholder="비밀번호"
                    />
                    <span>{errors?.password?.message}</span>
                </p>
                <p>
                    <input
                        {...register('passwordConfirm', {
                            required: '비밀번호 확인을 입력해 주세요.',
                            maxLength: 20
                        })}
                        placeholder="비밀번호 확인"
                    />
                    <span>{errors?.passwordConfirm?.message}</span>
                </p>
                <p>
                    <input
                        {...register('email', {
                            required: '이메일을 입력해 주세요',
                            pattern: {
                                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                                message: '이메일 패턴을 지켜주세요'
                            }
                        })}
                        placeholder="이메일"
                    />
                    <span>{errors?.email?.message}</span>
                </p>
                <button>Add</button>
                <p>{errors?.serverError?.message}</p>
                <button onClick={onClearError}>에러 클리어</button>
            </form>
        </FormContainer>
    );
}

export default Form;
