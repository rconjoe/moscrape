import got from 'got'
export default class GotCampaign {
  private static readonly URL = 'https://us.movember.com/mospace/14056397'
  public async fetch(): Promise<string> {
    const response = await got(GotCampaign.URL)
    return response.body
  }
}