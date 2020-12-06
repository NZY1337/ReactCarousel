import React from 'react';

import { EditorState, AtomicBlockUtils } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

// Firebase Storage
import { storage } from '../../firebase';

class UploadImage extends React.Component {

    // https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf

    constructor(props) {
        super(props);

        this.state = {
            imageUrl: null
        }
    }

    handleChange = (e) => {
        if (e.target.files[0]) {
            this.setState({
                imageUrl: e.target.files[0],
            })
        }
    };

    insertImage = (editorState, imgPath) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src: imgPath });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        });

        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
    }

    handleUploadToFirebaseStorage = () => {
        console.log(this.state.imageUrl)
        const uploadTask = storage.ref(`images/${this.state.imageUrl.name}`).put(this.state.imageUrl);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(this.state.imageUrl.name)
                    .getDownloadURL()
                    .then(url => {
                        this.displayUx(url)

                        this.setState({
                            imageUrl: url
                        })
                    })
            }
        )
    }

    displayUx = (url) => {
        const { handleChange, editorState } = this.props;

        const newEditorState = this.insertImage(editorState, url);

        // lifting the state from child -> parent, we need to pass the state from Parent
        handleChange(newEditorState);
    }

    render() {
        return (
            <>
                <label htmlFor='upload-img' className='mb-0 RichEditor-styleButton'>
                    <i>Upload</i>
                    <FontAwesomeIcon className='ml-2' icon={faFileImage} size='lg' />
                </label>

                <input id='upload-img' className='d-none' onChange={this.handleChange} type='file' />

                {this.state.imageUrl && <button type="button" onClick={this.handleUploadToFirebaseStorage}>Upload Img To Firebase</button>}

            </>
        )
    }
}

export default UploadImage;