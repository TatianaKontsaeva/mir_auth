import axios from 'axios'

const API_URL = 'https://content.mir.1t.ru/api/v1'

export const request = async ({ url, method, data = {} }) => {
  const token = localStorage.getItem('token')

  const headers = {
    Authorization: `Bearer ${token}`, // Добавление токена в заголовок Authorization 
  }

  const options = {
    url: `${API_URL}/${url}`,
    method,
    headers,
    data,
  }

  try {
    const response = await axios(options)
    return response.data
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка запроса:', error)
    throw error
  }
}

export const requestAuth = async ({ method, data = {} }) => {
  const response = await axios[method](`/api/auth/signin`, data)

  return response.data
}


// export const getProfile = async ({ method, data = {} }) => {
//   const response = await axios[method](`/api/profile`, data)
//   return response.data
// }

