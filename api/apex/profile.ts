import { _axios } from '../../utils/axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { auth } from '../../utils/config'

export default async (request: VercelRequest, res: VercelResponse) => {
  const { platform, player } = request.query
  const params = {
    version: '5',
    platform: platform,
    player: player,
    auth: auth,
  }
  const response = await _axios('get', 'bridge', params)
  res.json({
    status: response.status,
    data: response.data,
  })
}
