import express from 'express'
import GotCampaign from './services/GotCampaign'
import ParseData from './services/ParseData'
const app = express()
app.get('/', async (req, res) => {
  try {
    const campaign = await new GotCampaign().fetch()
    const parsed = new ParseData(campaign).run()
    res.status(200).send(parsed)
  }
  catch {
    res.status(500).send('Top-level error.')
  }
})
try {
  app.listen(1337)
  console.info('Scraper listening on port 1337')
}
catch{
  console.error('Error listening on port 1337')
  }