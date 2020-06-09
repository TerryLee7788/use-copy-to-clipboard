import React, { useState, useRef, useCallback } from 'react'

const useCopyToClipboard = () => {
    const [copyText, setCopyText] = useState('')
    const inputRef = useRef()
    const copy = useCallback((text, opts = {}) => {
        setCopyText(text)
        const {
            message
        } = opts
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    inputRef.current.select()
                    inputRef.current.setSelectionRange(0, text.length)
                    document.execCommand('copy')
                    resolve(message || '複製成功')
                }, 100)
            }
            catch (error) {
                reject('Oops, unable to copy')
            }
        })
    }, [setCopyText])
    const CopyToClipboardComponent = () => (
        <div style={{
            position: 'absolute',
            left: '-999999px',
            zIndex: '-1000',
            opacity: 0
        }}>
            <input
                type="text"
                value={copyText}
                onChange={() => {}}
                ref={inputRef}
            />
        </div>
    )
    return {
        copy,
        CopyToClipboardComponent
    }
}

export default useCopyToClipboard