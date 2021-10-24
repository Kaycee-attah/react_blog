import React, { useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Compressor from "compressorjs";

export default function RichTextEditor() {
    const [text, setText] = useState('');
    const reactQuillRef = useRef();

    // function handleInputChange(html) {
    
    //     setContent(html);
    //     setInputValue(html);
    // }
    ///////////////////////////
    
    function fileCompressed(file) {
        return new Promise((resolve, reject) => {
            new Compressor(file,{
                file: 'File',
                quality: 0.5,
                maxHeight: 640,
                maxWidth: 640,
                success(file) {
                    return resolve({
                        success: true,
                        file: file
                    })
                },
                error(error) {
                    return resolve({
                        success: false,
                        message: error.message
                    })
                }
            })
        })
    };
    
    const imageHandler = useCallback(
        () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = async function() {
              const file = input.files[0];
              const compressedState = await fileCompressed(file);
              if(compressedState.success) {
                let quill = reactQuillRef.current.getEditor();
                const range = quill.getSelection(true);
                quill.setSelection(range.index + 1);
                quill.insertEmbed(range.index, 'image', compressedState.file)
                    // const { v4: uuidv4 } = require('uuid');
                    // const genId = uuidv4();
                    // console.log(genId);
                    // const uploadTask = storage.ref(`ContentImages/${genId}`).put(compressedState.file);
                    // uploadTask.on('state_changed', 
                    // (snapshot) => {
                    //     //progress
                    //     const progressTransferred = Math.round((snapshot.bytesransferred / snapshot.totalBytes) * 100);
                        
                    // }, 
                    // (error) => {
                    //     //error
                    //     console.log(error);
                        
                    // }, 
                    // () => {
                    //     // complete
                    //     storage.ref('ContentImages').child
                    //     (genId).getDownloadURL().then(url => {
                    //         let quill = reactQuillRef.current.getEditor();
                    //         const range = quill.getSelection(true);
                    //         quill.setSelection(range.index + 1);
                    //         quill.insertEmbed(range.index, 'image', url)
                    //     })
                    // });
                } 
            } // react thing
        },
        [],
    )
    
    
    const modules = useMemo(() => ({
        toolbar: {
            container: [
            
                [{ 'header': [1, 2, false] }, {'font': []}],
                [{'size': []}],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['video'], ['code-block']
            ],
            handlers: {
                image: imageHandler
            }
        }, 
    }), [imageHandler])

    const formats = [
        'header', 'font',
        'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'video', 'code-block'
      ]

    return (
        <div className="text-editor-container">
            <div className="text-editor-header">
                RichTextEditor
            </div>
            <div className="text-editor-wrapper">
                <div className="text-editor">
                   <ReactQuill 
                        ref={reactQuillRef}
                        value={text}
                        onChange={() => console.log('')}
                        theme='snow'
                        modules={modules} 
                        formats={formats}
                   />
                </div>
            </div>
        </div>
    )
}
