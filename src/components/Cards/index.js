import React, { useContext, useState } from 'react'

import { CardWrapper } from './style'
 
import { v4 as uuidv4 } from 'uuid'

import { ComicsContext } from '../../providers/ComicsProvider'
import { CharactersContext } from '../../providers/CharactersProvider'

import Modal from '../Modal'

export default function Cards({ isComics }) {

	const comicsData = useContext(ComicsContext)
	const charactersData = useContext(CharactersContext)

	const [modalData, setModalData] = useState({})

	const sendToModal = (data) => {
	
		if (isComics) {


			setModalData({
				title: `${data.title} | Comic`,
				description: data.description,
				image: `${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`,
				pages: `${data.pageCount} pages`,

				characters: data.characters.items,
				stories: data.stories.items,
				detailsLink: data.urls[0].url,

				// To use in the button on Modal
				typeOfData: 'Characters'

			})
		} else {
			
			setModalData({
				title: `${data.name} | Character`,
				description: data.description,
				image: `${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`,

				comics: data.comics.items,
				stories: data.stories.items,
				detailsLink: data.urls[0].url,

				// To use in the button on Modal
				typeOfData: 'Comics'				
			})
		}

		document
			.querySelector('.modal-overlay')
			.classList
			.add('active')
	}

	return (
		<>
			<CardWrapper>
				{( isComics ? comicsData : charactersData).map(value => {

					const imageElement = `${value.thumbnail.path}/portrait_uncanny.${value.thumbnail.extension}` 


						return (
							(value.comics ?

								<article key={uuidv4()} onClick={() => sendToModal(value)}>
									<div>
			     						<img src={imageElement} alt={value.name} />
			     					</div>

			     					<div>
				     					<h2>{value.name}</h2>
				     				</div>	
			     				</article>
			     			:

			     				<article key={uuidv4()} onClick={() => sendToModal(value)} >
			     					<div>
		     							<img src={imageElement} alt={value.title} />
		     						</div>
		     						<div>
		     							<h2>{value.title}</h2>	
		     						</div>
		     					</article>
		     				)
						)
					
	     			
	     		})}
			</CardWrapper>

			<Modal data={ modalData }/>
			
		</>
	)
}