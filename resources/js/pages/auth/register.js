import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { register } from '../../api/auth'
import useInputValue from '../../components/input-value'

function Register () {
	let history = useHistory()
	let { setCurrentUser, setToken } = useAuth()
	let email = useInputValue('email')
	let firstName = useInputValue('first_name')
	let lastName = useInputValue('last_name')
	let password = useInputValue('password')
	let passwordConfirmation = useInputValue('password_confirmation')

	const handleSubmit = e => {
		e.preventDefault()

		register({
			first_name: firstName.value,
			last_name: lastName.value,
			email: email.value,
			password: password.value,
			password_confirmation: passwordConfirmation.value
		}).then(({user, token}) => {
			setCurrentUser(user)
			setToken(token)
			history.push('/home')
		}).catch(error => {
			error.json().then(({errors}) => {
				;[email, firstName, lastName, password].forEach(({parseServerError}) => parseServerError(errors))
			})
		})
	}

	return (
		<div className="flex justify-center items-center w-full flex-col py-4 min-h-screen bg-gray-200">
			<div className="p-8 flex flex-col items-center">
				<div>
					<Link to="/" >
						<img width="48" className="align-middle mx-2" alt="laravel" title="laravel" src="/images/icons/popcorn.svg" />
					</Link>
				</div>
				<div className="text-2xl leading-loose">
					Registrer ny konto
				</div>
				<div className="text-gray-800">
					<span className="text-gray-700">Eller&nbsp;<Link to="/login" className="underline">logg inn</Link></span>
				</div>
			</div>

			<div className="bg-white border rounded border-grey-light w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/4 px-8 py-4 shadow">
				<form onSubmit={handleSubmit} method="POST">


					<div className="mb-4 mt-2">
						<label className="block text-gray-700 text-sm mb-1 font-bold" htmlFor="first-name">
							Fornavn
						</label>
						<input
							type="text"
							id="first-name"
							name="first_name"
							className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100 ${firstName.error ? 'border-red-500' : ''}`}
							required
							autoFocus
							{...firstName.bind}
						/>
						{ firstName.error && <p className="text-red-500 text-xs pt-2">{firstName.error}</p> }
					</div>

					<div className="mb-4 mt-2">
						<label className="block text-gray-700 text-sm mb-1 font-bold" htmlFor="last-name">
							Etternavn
						</label>
						<input
							type="text"
							id="last-name"
							name="last_name"
							className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100 ${lastName.error ? 'border-red-500' : ''}`}
							required
							autoFocus
							{...lastName.bind}
						/>
						{ lastName.error && <p className="text-red-500 text-xs pt-2">{lastName.error}</p> }
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
							Epostadresse
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100 ${email.error ? 'border-red-500' : ''}`}
							required
							{...email.bind}
						/>
						{ email.error && <p className="text-500 text-xs pt-2">{ email.error }</p> }
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
							Passord
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100  ${password.error ? 'border-red-500' : ''}`}
							minLength={6}
							required
							{...password.bind}
						/>
						{ password.error && <p className="text-red-500 text-xs pt-2">{ password.error }</p> }
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-confirmation">
							Bekreft passord
						</label>
						<input
							type="password"
							id="password-confirmation"
							name="password_confirmation"
							className={`appearance-none border rounded w-full py-1 px-3 bg-gray-100 ${password.error ? 'border-red-500' : ''}`}
							required
							{...passwordConfirmation.bind}
						/>
					</div>

					<div className="mb-4">
						<button className="border rounded p-2 text-white bg-red-500 w-full font-bold hover:bg-red-600">
							Registrer
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
