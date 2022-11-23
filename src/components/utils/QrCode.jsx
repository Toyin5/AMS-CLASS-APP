import React from 'react'
import QRCode from 'react-qr-code'

function QrCode({ ...props }) {
    return (
        <QRCode
            value={props.url}
            size={props.size}
            fgColor={props.color}
            level='L' //| 'M' | 'Q' | 'H' // defaults to 'L'

        />
    )
}

export default QrCode