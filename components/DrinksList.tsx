import Link from "next/link"

const DrinksList = ({drinks}: any) => {    
  return (
    <>
      <ul>
        {drinks?.map((drink:any) => {
            return <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
            </li>
        })}
      </ul>
    </>
  )
}

export default DrinksList
