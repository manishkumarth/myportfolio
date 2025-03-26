import React from 'react'

function Card2() {
    return (
        <div className='card-hai card border border-primary rounded' style={{width:"250px",height:"330px"}}>
            <img className='card-image rounded-2' style={{height:"100%",width:"100%"}} src="./public/img/myimg.jpg" alt="imgcard" />
            <div className='card-body cardbody' >
                <h3 className='title'>
                    hellow sir
                </h3>
                <p className='description'>Lorem it eveniet consequuntur aliquid voluptatem debitis reprehenderit adipisci tempore, repudiandae accusantium excepturi?</p>
            </div>
        </div>
    )
}

export default Card2