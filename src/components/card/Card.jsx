import React, { useContext, useState } from 'react'
import './Card.css'
import { cardData } from '../../data'
import { ModeContext } from '../../Context/ModeContext'

const Card = () => {
    const [cardLimit1, setCardLimit1] = useState(6)
    const [cardLimit2, setCardLimit2] = useState(12)

    const clickHandler1 = () => {
        setCardLimit1(cardLimit1 == 6 ? 9 : 6)
    }
    
    const clickHandler2 = () => {
        setCardLimit2(cardLimit2 == 12 ? 16 : 12)
    }

    const{dayMode} = useContext(ModeContext)

    return (
        <>
            <div className="sec s1">
                <div className='cardContainer animate__animated animate__bounce'>

                    {

                        cardData.slice(0, 3).map((data) => (
                            <div className='card' style={{cursor:data.cursor&& 'pointer'}} key={data.id}>
                                <span className='cardId'>ID: {data.id}</span>
                                <h3>{data.card_title}</h3>
                                {data.link &&<a href={data.redirect}>{data.link_name}</a>}
                                {data.data && <span>{data.data_value}</span>}
                                {data.note && <p className='notes'>*{data.note}*</p>}
                                {data.button &&<button className='button' onClick={()=>window.location.replace(data.redirect)}>{data.button_name}</button>}
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="sec s2" style={{backgroundColor:dayMode && 'unset'}}>
                <div className='cardContainer animate__animated animate__bounce'>

                    {

                        cardData.slice(3, cardLimit1).map((data) => (
                            <div className='card ' style={{cursor:data.cursor&& 'pointer'}}>
                            <span className='cardId'>ID: {data.id}</span>
                            <h3>{data.card_title}</h3>
                            {data.link &&<a href={data.redirect}>{data.link_name}</a>}
                            {data.data  && <span>{data.data_value.length>30? data.data_value.slice(0,100)+'...': data.data_value}</span>}
                            {data.note && <p className='notes'>*{data.note}*</p>}
                            {data.button &&<button className='button' onClick={()=>window.location.replace(data.redirect)}>{data.button_name}</button>}
                        </div>
                        ))
                    }

                </div>
                <button className='secButton' onClick={clickHandler1}>{cardLimit1==9?'See Less':'See More'}</button>
            </div>
            <div className="sec s3">
                <div className='cardContainer animate__animated animate__bounce'>

                    {

                        cardData.slice(9, cardLimit2).map((data) => (
                            
                            <div className='card' style={{cursor:data.cursor&& 'pointer'}}>
                            <span className='cardId'>ID: {data.id}</span>
                            <h3>{data.card_title}</h3>
                            {data.data_type=='image' && <img src={data.data_value}/>}
                            {data.link &&<a href={data.redirect}>{data.link_name}</a>}
                            {data.data && !data.data_type=='image'&&<span>{data.data_value}</span>}
                            {data.note && <p className='notes'>*{data.note}*</p>}
                            {data.button &&<button className='button' onClick={()=>window.location.replace(data.redirect)}>{data.button_name}</button>}
                        </div>
                        ))
                    }

                </div>
                <button className='secButton' onClick={clickHandler2}>{cardLimit2==16?'See Less':'See More'}</button>
            </div>
         
        </>
    )
}

export default Card