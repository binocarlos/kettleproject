const SETTINGS = {
  mount: process.env.MOUNT || '/api/v1'
}

export const mountPath = (path = '') => [SETTINGS.mount, path].join('')

export default SETTINGS