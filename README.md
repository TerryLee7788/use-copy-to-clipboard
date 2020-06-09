## Installation
```
npm i use-copy-to-clipboard
```

## Usage
```
import useCopy from 'use-copy-to-clipboard'

const App = () => {

    const [inputValue, setInputValue] = useState('')

    const {
        copy,
        CopyToClipboardComponent
    } = useCopy()

    const handleCopyBtnClick = () => {
        copy(inputValue)
            .then((message) => {
                console.log('message: ', message)
            })
            .catch((error) => {
                console.log('error: ', error)
            })
    }
    return (
        <div>
            {/* just put this "CopyToClipboardComponent" here! */}
            <CopyToClipboardComponent/>
            <input
                type="text"
                onChange={(e) => {
                    const { value } = e.target
                    setInputValue(value)
                }}
            />
            <button onClick={handleCopyBtnClick}>Copy</button>
        </div>
    )
}
```

## Overview
##### useCopy(opts)
|Name|Description|
|--|--|
|message (default: 複製成功)|if you have customize message, just pass the "message"|