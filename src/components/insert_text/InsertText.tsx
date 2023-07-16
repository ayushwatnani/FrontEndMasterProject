import React, {useState} from 'react'
import './InsertText.css'

const InsertText = () => {
    const [text, setText] = useState<any>('');
    const [document, setDocument] = useState<any>('');
    const handleSubmit = (e: any) => {
        e.preventDefault();

    }
    return (
        <div className='body'>
            <div className="container">
                <div className="wrapper text_body">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className='textarea_box'
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    handleSubmit(e);
                                }
                            }}
                            value={text}
                            placeholder='Enter text here...'
                            rows={5}
                            onChange={(e) => setText(e.target.value)}
                            >

                        </textarea>
                    </form>
                </div>

                <div className="wrapper document_body">

                </div>
            </div>
        </div>
    )
}

export default InsertText