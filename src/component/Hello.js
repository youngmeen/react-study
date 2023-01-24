import React from "react";

const Hello = (props) => {
    return (
        <div style={{marginBottom: props.margin, color: props.color, fontSize: props.size}}>Hello
            World!! {props.name}</div>
    )
}


// props 값 없을 때 defaultProps 값
Hello.defaultProps = {
    name: '이름없음',
    color: 'black',
    fontSize: 30,
    margin: 12
}

export default Hello;