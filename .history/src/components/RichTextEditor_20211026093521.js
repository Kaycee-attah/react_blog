import React, { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Compressor from "compressorjs";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useTextEditorInputValue } from '../contexts/textEditorInputValueContext';
import DialogueBox from './dialogueBox';

export default function RichTextEditor() {
    const Quill = ReactQuill.Quill;
    var Font = Quill.import('formats/font');
    Font.whitelist = ['Roboto', 'Raleway', 'Monster', 'Lato', 'Rubik', 'Poppins', 'Festive'];
    Quill.register(Font, true)
    const reactQuillRef = useRef();
    const [categoriesDropdownActive, setCategoiesDropdownActive] = useState(false);
    const { setBlogTitleInputValue } = useTextEditorInputValue();
    const { image } = useTextEditorInputValue();
    const { setImage } = useTextEditorInputValue();
    const { textEditorInputValue } = useTextEditorInputValue();
    const { setTextEditorInputValue } = useTextEditorInputValue();
    const { categorySelected } = useTextEditorInputValue();
    const { setCategorySelected } = useTextEditorInputValue();
    const history = useHistory();
    const { blogTitleInputValue } = useTextEditorInputValue();


    useEffect(() => {
        document.getElementById("del-btn").addEventListener("click", function() {
            document.getElementsByClassName("popup")[0].classList.add("active");
            document.getElementsByClassName("text-editor-container")[0].classList.add("active");
        });

        document.getElementById("cancel-popup-btn").addEventListener("click", function() {
            document.getElementsByClassName("popup")[0].classList.remove("active");
            document.getElementsByClassName("text-editor-container")[0].classList.remove("active");
        });

        document.getElementById("confirm-popup-btn").addEventListener("click", function() {
            setTextEditorInputValue('');
            setBlogTitleInputValue('');
            setCategorySelected('Select a Category');
            setImage();
            document.getElementsByClassName("popup")[0].classList.remove("active");
            document.getElementsByClassName("text-editor-container")[0].classList.remove("active");
        })
    }, [])


    function handleInputChange(html) {
    
        setTextEditorInputValue(html);
        // setInputValue(html);
    };

    function handleCategoriesMenu() {
        setCategoiesDropdownActive(!categoriesDropdownActive);
    };

    function HandleClick() {
        history.push("/Article_preview");
    };

    function handleImage(e) {
        if(e.target.files[0]){
            const img = e.target.files[0];
            setImage(img);
        }
    };
    /////////////////////////
    
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
                const compre = compressedState.file;
                quill.insertEmbed(range.index, 'image', compre.name)
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
            
                [{ 'header': [1, 2, 3, false] }, {'font': Font.whitelist}],
                [{'size': []}],
                [{'color': []}, { 'background': [] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                [{ 'align': [] }],
                ['link', 'image'],
                ['video'], ['code-block'],
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }, 
    }), [imageHandler])

    const formats = [
        'header', 'font',
        'size',
        'color', 'background',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'align',
        'link', 'image',
        'video', 'code-block',
        'clean'
      ]

    return (
        <Fragment>
            <div className="text-editor-container">
                <div className="text-editor-header">
                    <div className="editor-header">
                        <div className="editor-post-title">
                            <input placeholder="Blog Title" value={blogTitleInputValue} onChange={(e) => {
                                setBlogTitleInputValue(e.target.value);
                            }} />
                        </div>
                        <div className="editor-post-category-container">
                            <div onClick={handleCategoriesMenu} className={`editor-post-category`}>
                                <span className="category-selector-text" style={{ color: categorySelected !== "Select a Category" && '#000', fontWeight: categorySelected !== "Select a Category" && '500' }}>{categorySelected}</span>
                                {categoriesDropdownActive ? <span style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <RiArrowDropUpLine size={24}/>
                                </span> : <span style={{
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <RiArrowDropDownLine  size={24}/>
                                </span>}
                            </div>
                            <div className={`editor-post-category-dropDown ${categoriesDropdownActive && 'active'}`}>
                                <ul>
                                    <li className="list" 
                                    onClick={() => {
                                        setCategorySelected('Featured');
                                        setCategoiesDropdownActive(false);
                                    }}>
                                        <b></b>
                                        <b></b>
                                        Featured
                                    </li>
                                    <li className="list" onClick={() => {
                                        setCategorySelected('Recent');
                                        setCategoiesDropdownActive(false);
                                    }}>
                                        <b></b>
                                        <b></b>
                                        Recent
                                    </li>
                                    <li className="list" onClick={() => {
                                        setCategorySelected('Trending');
                                        setCategoiesDropdownActive(false);
                                    }}>
                                        <b></b>
                                        <b></b>
                                        Trending
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="editor-post-image-container">
                            <div className="editor-post-image">
                                {image === undefined || null ? <Avatar style={{width: '100%', height: '100%'}} shape="square" icon={<UserOutlined />} size={40}/> : <img src={image.name} alt="" /> }
                            </div>  
                            <div className="editor-post-image-btn">
                                <label >
                                    <span>Select Image</span>
                                    <input id="filer" className="file" onChange={handleImage} type="file"/>
                                </label>
                            </div> 
                            <div className="preiview-btn" >
                                <button  onClick={HandleClick}>See preiview</button>    
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="text-editor-wrapper">
                    <div className="text-editor">
                    <ReactQuill 
                            
                            ref={reactQuillRef}
                            value={textEditorInputValue}
                            onChange={handleInputChange}
                            theme='snow'
                            modules={modules} 
                            formats={formats}
                            placeholder="type post here"
                    />
                    
                    </div>
                    
                </div>
                <div className="text-editor-action-buttons-container">
                    <div className="text-editor-action-buttons">
                        <button id="del-btn" className="del-btn">Delete</button>
                        <button>Save</button>
                        <button>Publish</button>
                    </div>
                </div>
            </div>
            <DialogueBox />
        </Fragment>
    )
}
