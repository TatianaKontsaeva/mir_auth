import { requestAuth } from './authorization'

const authentication = async (data) =>
  await requestAuth({ url: `login`, data, method: 'post' })

export { authentication }
 

//получить профиль
// import  {getProfile } from './authorization'

// const getUser = async (data) =>
//   await getProfile({ url: `login`, data, method: 'get' })

// export { getUser }
