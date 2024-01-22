import React from 'react'
import ButtonList from './ButtonList'
import VideoConatiner from './VideoContainer'
const MainConatiner = () => {
    return (
        <div className='col-span-11'>
            <ButtonList />
            <VideoConatiner />
        </div>
    )
}

export default MainConatiner