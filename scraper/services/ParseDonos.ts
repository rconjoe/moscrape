import cheerio, { CheerioAPI, Cheerio, Element, Node } from 'cheerio'
export default class ParseDonos {
  private static readonly DONATIONS = '.js-post-content'
  private static readonly DONATION_FROM = "post-donation-info--from-name"
  private static readonly DONATION_AMOUNT = "post-donation-info--amount"
  donos: Cheerio<Node>
  $: CheerioAPI | undefined
  constructor(donos: Cheerio<Node>) {
    this.donos = donos
  }
  public run(): void {
    if (this.$ === undefined) throw new Error('Error loading raw to parsed.')
    const donos = this.$('<div class=post-donation-info>')
    donos.each
    console.log(donos)
  }

}