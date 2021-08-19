import cheerio, { CheerioAPI, Cheerio, Element, Node } from 'cheerio'
import ParseDonos from './ParseDonos'
export default class ParseData {
  private static readonly PROGRESS = '.mospace-heroarea--donations-target-amount-number'
  private static readonly DONATIONS = '.post-donation-info--left'
  private static readonly DONATION_FROM = "post-donation-info--from-name"
  private static readonly DONATION_AMOUNT = "post-donation-info--amount"
  raw: string
  $: CheerioAPI | undefined
  donations: Array<IDonation> | undefined
  constructor(data: string) {
    this.raw = data
  }
  public run(): void {
    this.loadRaw()
    if (this.$ === undefined) throw new Error('Error loading raw to parsed.')
    const progress = this.progress()
    console.log(`Progress: ${progress}`)
    const donos = this.$('div').children(ParseData.DONATIONS).text()
    console.log(donos)
  }
  private loadRaw(): void {
    if (!this.raw) throw new Error('Missing raw got data!')
    this.$ = cheerio.load(this.raw)
  }
  private progress(): string {
    if (this.$ === undefined) throw new Error('Error loading raw to parsed.')
    return this.$('div').children(ParseData.PROGRESS).first().text()
  }
  private sortDonos(donos: Cheerio<Element>) {
    let arr: any = []
    const f = donos.each(function(i, elem) {
      arr[i] = cheerio(this)
    })
    return arr
  }

}