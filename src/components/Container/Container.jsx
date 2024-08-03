import React from 'react'

function Container({children}) { // container accepts properties as a children
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container