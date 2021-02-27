import React, { useState, useEffect } from 'react'

import { ModalWrapper } from './style'

import api from '../../services/api'

import { v4 as uuidv4 } from 'uuid'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ReplyAllIcon from '@material-ui/icons/ReplyAll';

export default function Modal({ data }) {

	const [actionData, setActionData] = useState([])
	const [pagination, setPagination] = useState(0)

	const [dataToPaginate, setDataToPaginate] = useState([])


	const closeModal = {

		main() {

			document
				.querySelector('.modal-overlay')
				.classList
				.remove('active')

			setPagination(0)
		},

		sub() {
			document
				.querySelector('.modal-2')
				.classList
				.remove('active')

			setPagination(0)	
		}
	}

	const getData = async (data, page) => {
		
		try {

			const response = await api.get(data[page].resourceURI)

			if (response.statusText !== 'OK') {
				throw new Error('Error requesting data...') 
			} else {
			
				setActionData(response.data.data.results)

				setDataToPaginate(data)
			}

		} catch(error) {
			console.error(error)
		}
	}	



	const handleActionData = (data, event) => {

		if (data.length === 0) {
			alert(`${event.currentTarget.textContent} Not Found`)
		} else {
			
			getData(data, pagination)

			document
				.querySelector('.modal-2')
				.classList
				.add('active')
		}

	}	

	useEffect(() => {
		getData(dataToPaginate, pagination)
	}, [pagination])

	return (
		<>
			<ModalWrapper className='modal-overlay'>

				<div className='close-btn'>
					<button onClick={() => closeModal.main()}>X</button>
				</div>

				<div className='main-section'>
					<header>
						<div>
							<h2>{data.title}</h2>
						</div>
					</header>

					<div className='main-container'>
						<div>
							<div className='image-container'>
								<img  src={data.image} alt={data.title}/>
							</div>

							<div className='info-container'>
								<div>
									<small>{data.pages || ''}</small>
								
								</div>
								<div className='text-container'>
									<h2>Description:</h2>
									<p>{data.description || 'Description Not Found'}</p>
								</div>
							</div>

						</div>

						<div className='actions-container'>
							<button id='charactersOrComicsAction' onClick={(event) => handleActionData(data.characters || data.comics, event)} >{data.typeOfData}</button>
							<button><a href={data.detailsLink} target='_blank' rel="noopener noreferrer" >Details</a></button>
						</div>		
					</div>
					
				</div>

			</ModalWrapper>


				<ModalWrapper className='modal-overlay modal-2'>

					{actionData.map(value => {
						
						const notAvailableImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'
						
						let image = value.thumbnail !== null ? `${value.thumbnail.path}/portrait_uncanny.${value.thumbnail.extension}`
							: notAvailableImage

						return (
							<div key={uuidv4()} style={{width: '100%',height: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
								<div className='close-btn'>
									<button onClick={() => closeModal.sub()}><ReplyAllIcon fontSize='large'/></button>
								</div>


								<div className='main-section'>
									<header>
										<div>
											<h2>{value.name || value.title}</h2>
										</div>
									</header>

									<div className='main-container'>
										<div>
											<div className='image-container'>
												<img  src={image} alt={value.name} />
											</div>

											<div className='info-container'>
												
												<div className='text-container'>
													<h2>Description:</h2>
													<p>{value.description || 'Description Not Found'}</p>
												</div>
											</div>

										</div>		
									</div>

									<div className='actions-container'>
										<button>
											<a href={value.urls[0].url} target='_blank' rel="noopener noreferrer">Details</a>
										</button>

									</div>		

									<div id='pagination-group'>
										<button 
											onClick={
												() => setPagination(pagination - 1)
											} 
											disabled={pagination <= 0}
										>
											<ArrowBackIosIcon fontSize='large'/>
										</button>

										<button 
											onClick={
												() => setPagination(pagination + 1)
											} 
											disabled={pagination >= dataToPaginate.length - 1}
										>
											<ArrowForwardIosIcon fontSize='large'/>
										</button>
									</div>
								</div>

								
							</div>
							
						)
						
					})}



				</ModalWrapper>

			


		</>
	)
	
	
}