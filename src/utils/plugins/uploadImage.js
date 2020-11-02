import React from 'react';

import { EditorState, AtomicBlockUtils } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

class UploadImage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { url:"" };
    }

    // https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf

    handleChange = (e) => {
        const {handleChange, editorState} = this.props;

		const imgPath = URL.createObjectURL(e.target.files[0]);
		const newEditorState = this.insertImage(editorState, imgPath);
        handleChange(newEditorState);
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

    render() {
        return (
            <>
                <label htmlFor='upload-img' className='mb-0 RichEditor-styleButton'>
					<i>Upload</i>
					<FontAwesomeIcon className='ml-2' icon={faFileImage} size='lg' />
				</label>

				<input id='upload-img' className='d-none' onChange={this.handleChange} type='file' />
            </>
        )
    }
}

export default UploadImage;