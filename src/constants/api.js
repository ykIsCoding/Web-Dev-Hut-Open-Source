export const API = {
  URL: 'https://dev-hut-api.vercel.app',
  ENDPOINTS: {
    CONTRIBUTORS: '/collaborators',
    GUIDES: '/courses',
    GUIDES_BY_TECHNOLOGY: (technology) => `/courses/${technology}`,
    GUIDE_BY_IDENTIFIER: (identifier) => `/course/${identifier}`,
    LESSON_BY_IDENTIFIER: (identifier) => `/lesson/${identifier}`,
    TECHNOLOGY_BY_NAME: (name) => `/technology/${name}`,
  },
  TIMEOUT: 15000,
}
