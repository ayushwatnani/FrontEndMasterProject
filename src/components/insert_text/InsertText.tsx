import React, { useState } from 'react'
import './InsertText.css'

const InsertText = () => {
    const [text, setText] = useState<any>('');
    const [document, setDocument] = useState<any>('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        insertTextInDocument();
        setText('');
    }

    const insertTextInDocument = () => {
        const newDoc = `<p class="paragraph-highlight-class">${text}</p>  `
        // setDocument((doc: any) => {
        //     let d = doc + newDoc;
        //     return d;
        // })
        setDocument(document + newDoc);
        removeHighlightAfterTime();
    }

    const removeHighlightAfterTime = () => {
        setTimeout(() => {
            setDocument((doc: any) => {
                let d = doc.replace(`class="paragraph-highlight-class"`, '')
                return d;
            })
        }, 2000)
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
                    <p className="para">Document</p>
                    {document ? (
                        <div
                            className="document-body"
                            dangerouslySetInnerHTML={{
                                __html: document,
                            }}>

                        </div>
                    ) : (
                        <div>
                            added content will show here
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InsertText