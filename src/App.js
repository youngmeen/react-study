import './App.css';
import Hello from "./component/Hello";
import Wrapper from "./component/Wrapper";
import HelloOptionRender from "./component/HelloOptionRender";
import Counter from "./component/Counter";
import InputSample from "./component/InputSample";
import UserList from "./component/User/UserList";
import UserListUseRef from "./component/User/UserListUseRef";
import {useRef, useState} from "react";
import CreateUser from "./component/User/CreateUser";

function App() {
    // const name = 'react';
    // const style = {
    //     backgroundColor: 'black',
    //     color: 'aqua',
    //     fontSize: 24,
    //     padding: '1rem'
    // }
    // const User = [
    //     {
    //         'id': 1,
    //         'nickname': 'zone',
    //         'email': 'zone@gmail.com'
    //     },
    //     {
    //         'id': 2,
    //         'nickname': 'com',
    //         'email': 'com@gmail.com'
    //     },
    //     {
    //         'id': 3,
    //         'nickname': 'company',
    //         'email': 'company@gmail.com'
    //     }
    // ]
    //
    // const nextId = useRef(4);
    // const onCreate = () => {
    //     nextId.current += 1;
    // };
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const {username, email} = inputs;
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([
        {
            'id': 1,
            'username': 'zone',
            'email': 'zone@gmail.com',
            'active': true
        },
        {
            'id': 2,
            'username': 'com',
            'email': 'com@gmail.com',
            'active': false
        },
        {
            'id': 3,
            'username': 'company',
            'email': 'company@gmail.com',
            'active': false
        }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers([...users, user]);

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers((
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user
            )
        ))
    };

    return (
        <Wrapper>
            {/*/!*props ??? ?????? ??? *!/*/}
            {/*<Hello name="props ??? ?????? ???" color="red" size="14px"/>*/}
            {/*<Hello/>*/}
            {/*<HelloOptionRender name="??????" isSpecial/>*/}
            {/*<div style={style}>{name}~</div>*/}
            {/*<div className='gray-box'></div>*/}
            {/*useState ??? ????????????*/}
            {/*<Counter/>*/}
            {/*input ????????????*/}
            {/*<InputSample/>*/}
            {/*????????? ????????????*/}
            {/*<UserList/>*/}
            {/*????????? ref ?????????*/}
            <CreateUser
                userName={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserListUseRef users={users} onRemove={onRemove} onToggle={onToggle}/>
        </Wrapper>
    );
}

export default App;
