import axios from 'axios'
const baseUrl = '/api'

export const getAllSmalls = () => {
  return axios.get(`${baseUrl}/small/`)
}

export const getSingleSmall = id => {
  return axios.get(`${baseUrl}/small/${id}`)
}

export const getAllLarge = () => {
  return axios.get(`${baseUrl}/large/`)
}

export const getSingleLarge = id => {
  return axios.get(`${baseUrl}/large/${id}`)
}