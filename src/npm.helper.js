export const

	getMergedNpmAndProjectObj = (folderNameInSrc, npmObject, projectSrcPath) => {
		let projectObject = {}
		try {
			console.debug(`${projectSrcPath}/${folderNameInSrc}/index.js`)
			projectObject = require(`${projectSrcPath}/${folderNameInSrc}/index.js`)

		} catch (error) {
			console.warn(
				`No project object found for [${folderNameInSrc}] or it couldn't be loaded.`)
		}

		const mergedObjects = Object.assign({}, npmObject, projectObject)
		return mergedObjects
	},

	sleep = ms => new Promise(resolve => { setTimeout(resolve, ms) })
