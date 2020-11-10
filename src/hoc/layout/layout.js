import React from 'react'
import Header from '../../components/UI/header/header'
import Footer from '../../components/UI/footer/footer'

function layout(props) {
    return (
        <div>
        <Header></Header>
        {props.children}
        <Footer></Footer>
        </div>
    )
}

export default layout
