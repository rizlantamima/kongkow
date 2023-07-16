export const appUsingFirebase = () => process.env.REACT_APP_BACKEND_IMPLEMENTATION.toUpperCase().trim() === 'FIREBASE'

export const appBaseUrlRest = process.env.REACT_APP_BACKEND_REST_BASE_URL;