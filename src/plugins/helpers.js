export default {
	handleErr: (err) => {
		if (err.response && err.response.data && err.response.status) {
			return `Error ${err.response.status}: ${err.response.data}`
		} else {
			return `Error: Could not process the response`
		}
	}
}
