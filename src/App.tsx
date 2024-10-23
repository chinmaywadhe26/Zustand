import AddHabitForm from "./components/AddHabitForm"
import useHabitStore from "./store/store"
import { Container, Box, Typography } from "@mui/material"
import HabitList from "./components/habitList"
function App() {
  const store = useHabitStore()
  console.log(store)

  return (
    <> 
    <Container>
    <Box>
    <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm/>
        <HabitList/>
    </Box>

    </Container>
    
    </>
  )
}

export default App
