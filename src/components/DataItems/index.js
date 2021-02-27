import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import ComicsProvider from '../../providers/ComicsProvider'
import CharactersProvider from '../../providers/CharactersProvider'

import Cards from '../Cards'

import { FooterWrapper } from './style'

import Loader from 'react-loader-spinner'

export default function DataItems({ isComics }) {

	const [offset, setOffset] = useState(0)
	const [pages, setPages] = useState(1)
	const [limit, setLimit] = useState(0)
	const [total, setTotal] = useState(0)
	const [results, setResults] = useState([])

	const [loading, setLoading] = useState(true)

	
	const getData = async (offset) => {	
		const path = window.location.search.replace(/^\?query=/, '')

		try {
			const response = await api.get(
				isComics ? 
					(path !== '' ? `/comics?title=${path}` : '/comics') 
				: 	
					(path !== '' ? `/characters?name=${path}` : '/characters'), offset)
			
			
			if (response.status === 200) {
				
				setResults(response.data.data.results) 	
				setLimit(response.data.data.limit)
				setTotal(response.data.data.total)
				
			} else {
				throw new Error('Error requesting data...')
			}
		
		} catch(error) {
			console.error(error)
		}

		setLoading(false)
		
	}

	const HandlePages = {
		numberOfPages: Math.floor(total / limit),

		submit(event) {
			event.preventDefault()

			HandlePages.set(event.currentTarget.id)
		},

		set(value) {

			if (value === 'next') {
				
				if ( pages <= HandlePages.numberOfPages ) {
					setOffset(offset + 60)

					setPages(pages + 1)	
				}

			} else {

				if (pages > 1) {

					setOffset(offset - 60)

					setPages(pages - 1)
				}
				
			
			}
			
		},

		get(value) {

			const offsetParam = {
				params: {
					"offset": value 
				}
			}

			getData(offsetParam)

		},

		cleanup() {
			setPages(1)
			setOffset(0)
		}
	}

	// Side effect when page changes
	useEffect(() => {

		HandlePages.get(offset)

	}, [ offset ])

	// Side effect when the user toggle the type of data comic/character
	useEffect(() => {

		HandlePages.cleanup()
		HandlePages.get(offset)

	}, [ isComics ])

	// Side effect when searching for comics/characters
	useEffect(() => {

		HandlePages.cleanup()
		HandlePages.get(offset)
	
	}, [window.location.search])

	return (
		<>
			<ComicsProvider data={ results } >
			<CharactersProvider data={ results }>

				{(loading ? 
					<Loader type="ThreeDots" color="#115aad" 
						height={100} 
						width={100}
						style={{textAlign: 'center'}}
					/> 
				: 
					<Cards isComics={ isComics } />
				)} 
				

				<FooterWrapper style={{display: loading ? 'none' : '' }}>
	     			<form>
						
						<button id='previous'

						 onClick={(event) => HandlePages.submit(event)} 
						 disabled={pages === 1}

						 >Previous Page</button>
						
						<button id='next' 

						onClick={(event) => HandlePages.submit(event)} 
						disabled={pages > HandlePages.numberOfPages}

						>Next Page</button>
					</form>
	     		</FooterWrapper>

	     	</CharactersProvider>
			</ComicsProvider>
		</>
	)
}