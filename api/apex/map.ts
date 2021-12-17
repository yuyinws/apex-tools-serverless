// const { _axios } = require('../../utils/axios')
import { _axios } from '../../utils/axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// const axios = require('axios')
export default async (request: VercelRequest, res: VercelResponse) => {
  const response = await _axios('get', 'maprotation', {
    version: 2,
    auth: 'GSeDL50Cguz8rSWbKuBT',
  })
  res.json({
    status: response.status,
    data: response.data,
  })
}
