/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import FetchSample from './FetchSample.jsx'



function CustomBlockControls( {attributes, setAttributes} ) {

    let [value, setValue] = useState('default')

    function onChangeSelectField( newValue ) {
        setAttributes( { selectField: newValue } );
    }     

    function onChangeToggleField( newValue ) {
        setAttributes( { toggleField: newValue } );
    }

    return (
        <InspectorControls>
            
            <PanelBody title={ __( 'Select User' ) }>
                <FetchSample />
            </PanelBody>

        </InspectorControls>
    )
}

export default CustomBlockControls