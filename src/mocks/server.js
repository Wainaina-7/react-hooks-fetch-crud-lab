import { setupServer } from 'msw/node'
import { handlers, resetQuestions } from './handlers'

export const server = setupServer(...handlers)

// Ensure mock data is reset when tests call server.resetHandlers()
const originalResetHandlers = server.resetHandlers.bind(server)
server.resetHandlers = (...args) => {
	resetQuestions()
	return originalResetHandlers(...args)
}