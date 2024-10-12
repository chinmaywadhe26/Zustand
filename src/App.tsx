import useHabitStore from "./store/store"

function App() {
  const store = useHabitStore()
  console.log(store)

  return (
    <>
    <div>hi</div>
    </>
  )
}

export default App
