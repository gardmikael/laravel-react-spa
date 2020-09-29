let { useEffect } = require('react')

function useDocumentTitle (title) {
	useEffect(() => {
		document.title = `Laravel React SPA | ${title}`
	}, [title])
}

export default useDocumentTitle
