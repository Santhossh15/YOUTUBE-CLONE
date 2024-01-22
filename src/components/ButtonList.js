import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Cooking"];
    return (
        <div className='flex'>
            {list.map((text) => <Button name={text} key={text} />)}
        </div>
    )
}

export default ButtonList