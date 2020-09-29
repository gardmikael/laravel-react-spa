import React from 'react'
import GuestNav from '../components/guest-nav'

function Welcome () {
	return (
		<div className="flex flex-col min-h-screen">
			<GuestNav />
			<div className="flex flex-1 flex-col items-center justify-center">
				<h1 className="text-indigo text-2xl p-2 font-thin uppercase">Bygg din App</h1>
				<div className="flex items-center">
					<img src='/images/icons/popcorn.svg' className="h-24" />
				</div>
			</div>
		</div>
	)
}

export default Welcome
