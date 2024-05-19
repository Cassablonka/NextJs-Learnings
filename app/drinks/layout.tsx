
const DrinksLayout = ({children}: any) => {
  return (
    <div>
      <div className="mockup-code mb-8 max-w-xl">
        <pre data-prefix='$'>
            <code>npx create-next-app@latest pfm</code>
        </pre>
      </div>
      {children}
    </div>
  )
}

export default DrinksLayout
