import { reactive, ref } from 'vue'

interface Product {
  id: string
  name: string
  description: string
  price: number
}

/*interface CoffeeMenu {
	drinks:Product[]
	brunch:Product[]
}*/

export let loading = ref(true)

export let drinks = reactive<Product[]>([])
export let brunch = reactive<Product[]>([])

const API_URL = import.meta.env.VITE_API_URL
export async function populateProducts() {
  const drinksResponse = await fetch(`${API_URL}drinks`)
  const drinksJSON = await drinksResponse.json()
  drinks = drinksJSON as Product[]

  const brunchResponse = await fetch(`${API_URL}brunch`)
  const brunchJSON = await brunchResponse.json()
  brunch = brunchJSON as Product[]

  setTimeout(() => {
    loading.value = false
  }, 2500)
}
