declare namespace RocketCoffee {
  export interface IProduct {
    id: string
    name: string
    description: string
    price: number
  }

	export interface ICoffeeMenu {
		drinks:IProduct[]
		brunch:IProduct[]
	}
}
