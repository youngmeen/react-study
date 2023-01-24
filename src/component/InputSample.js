import React, {useRef, useState} from "react";

const InputSample = () => {
    // const [text, setText] = useState('');

    // const onChange = (e) => {
    //     setText(e.target.value);
    // }
    //
    // const onReset = () => {
    //     setText('');
    // }

    // input 형태 관리
    //
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e) => {
        //inputs[name] = value
        //이렇게 직접 대입하면 에러가 터진다.
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder={'값 입력'} ref={nameInput}/>
            <input name="nickname" onChange={onChange} value={nickname} placeholder={'이름 (닉네임)'}/>
            <button onClick={onReset}>초기화</button>
            <div style={{marginTop: '2em'}}>
                <b>값 : {name}</b>
                이름 (닉네임) : {nickname}
            </div>
        </div>
    )
}

export default InputSample;