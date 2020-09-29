import React from 'react'
import { Link } from 'react-router-dom'

function GuestNav () {
	return (
		<div className="w-full px-6 mx-auto flex items-center justify-between">
			<ul className="list-reset flex pt-4">
				<li className="px-2">
					<Link
						to=""
						className="no-underline text-gray-700 uppercase font-thin"
		  			>
						Laravel React SPA
					</Link>
				</li>
	  		</ul>

			<ul className="list-reset flex pt-4">
				<li className="px-4 py-2">
					<Link
						to="/login"
						className="no-underline font-medium text-grey-darker"
					>
						Logg inn
					</Link>
				</li>

				<li className="px-4 py-2 bg-red-500 rounded-lg">
					<Link
						to="/register"
						className="no-underline text-white font-semi-bold"
		  			>
						Registrer
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default GuestNav
