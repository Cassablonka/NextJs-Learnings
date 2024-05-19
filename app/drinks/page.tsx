import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"

export default async function Drinks() {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch drinks')
  }

  const data = await response.json()
  
  return (
    <DrinksList drinks={data.drinks}/>
  );
}
