/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/* 
 * External dependencies
 */
import { useState } from '@wordpress/element'
import { useEffect } from '@wordpress/element'

/*
 * Custom components
 */
import BioBox from './components/BioBox.jsx'
import WPGravatar from './components/WPGravatar.jsx'
import FetchSample from './FetchSample.jsx'
import CustomBlockControls from './CustomBlockControls.jsx'

export default function Edit( {attributes, setAttributes} ) {	
	
	return (
		<p { ...useBlockProps() }>
			<CustomBlockControls />
			
			<FetchSample attributes={attributes} />

			<WPGravatar email={"seth@flexperception.com"} />
				{/* <h3>Does user state persist? {user.name}</h3> */}
				<span>
				<select>
					<option value="grapefruit">Grapefruit</option>
					<option selected value="coconut">Coconut</option>
					<option value="lime">Lime</option>
					<option value="mango">Mango</option>
					</select>
				</span>
				{attributes.content}
		</p>
	)

}

