export const productsLoader = async () => {
  const res = await fetch('https://product-back.vercel.app/')
  if (!res.ok) {
    throw 'Failed to fetch products'
  }
  return await res.json()
}
