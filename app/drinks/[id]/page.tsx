import Image from "next/image"
import Link from "next/link"

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleDrinksPage = async ({params}: any) => {
  const res = await fetch(url+params.id)
  const data = await res.json()
  const title = data?.drinks[0]?.strDrink
  const img = data?.drinks[0]?.strDrinkThumb
  
  return (
    <div>
      <Link href='/drinks' className="btn btn-success mb-8">Back to Drinks</Link>
      <Image src={img} width={300} height={300} alt="drink-img" priority className="my-6 w-1/5 rounded-lg"/>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default SingleDrinksPage
