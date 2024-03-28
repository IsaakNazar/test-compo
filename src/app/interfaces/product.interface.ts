export interface Product {
  name: string
  price: string
  discountPrice: string
  discount: number
  description: string
  amountInPackage: number
  images: string[]
  total: number
  details: {
    supplierCode: string
    raekCode: string
    vendorCode: string
    brand: string
    manufacturerCode: string
    etmCode: string
    part: string
  }
}
