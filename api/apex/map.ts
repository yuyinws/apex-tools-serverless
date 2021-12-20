import { _axios } from '../../utils/axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { auth } from '../../utils/config'

export default async (request: VercelRequest, res: VercelResponse) => {
  const response = await _axios('get', 'maprotation', {
    version: 2,
    auth: auth,
  })
  res.json({
    status: response.status,
    data: response.data,
  })
}
