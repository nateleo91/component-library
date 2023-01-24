import React from 'react'
import './Voucher.css'

const Voucher = (props) => {
    let classList = ''
    let types = ['voucher', 'voucher-lg', 'redeem', 'redeem-lg']
    if (types.includes(props.type)) {
        classList += ` input-${props.type}`
    }
    return <form>
        <input className={classList} placeholder='Voucher Code'></input>
           <button>Redeem</button></form>
}

export default Voucher
