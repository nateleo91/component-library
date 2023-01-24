import React from 'react'
import { storiesOf } from '@storybook/react'
import './Voucher.css'
import Voucher from './Voucher'

storiesOf('Voucher', module)
    .add('Voucher', () => <Voucher
        type='voucher'
    />)
    .add('Voucher Large', () => <Voucher
        type='voucher-lg'
    />)