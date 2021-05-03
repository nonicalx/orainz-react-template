import React from 'react'
import {Header} from '../exporter'

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export  {Layout}
