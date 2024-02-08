import { useCompiler } from '#vue-email'

export default defineEventHandler(async event => {
	const query = getQuery(event)

	try {
		const template = await useCompiler('Hello.vue', {
			props: {
				username: query.username || 'default',
			},
		})

		if (!template) {
			throw createError({
				statusCode: 404,
				statusMessage: 'Not Found',
			})
		}

		return template
	} catch (error) {
		console.error(error)

		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
		})
	}
})
