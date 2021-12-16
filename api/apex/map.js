const { _axios } = require('../../utils/axios')

// const axios = require('axios')
module.exports = async (req, res) => {
  const response = await _axios('get', 'maprotation', {
    version: 2,
    auth: 'GSeDL50Cguz8rSWbKuBT',
  })
  res.json({
    status: response.status,
    data: response.data,
  })
}
