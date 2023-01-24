import React from "react";

const HelloOptionRender = ({color, name, isSpecial}) => {
    return (
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            <div>안녕하세요 {name}</div>
        </div>
    )
}

HelloOptionRender.defaultProps = {
    name: '이름없음'
}

export default HelloOptionRender;