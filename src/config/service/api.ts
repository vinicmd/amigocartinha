import axios from 'axios'
import { envConfig } from '../env'

export const api = axios.create({
  baseURL: envConfig.api,
  timeout: 5000
})
