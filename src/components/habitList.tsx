import { Box, Paper, Grid , Button, Typography, LinearProgress} from "@mui/material";
import useHabitStore, {Habit} from "../store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DeleteIcon from "@mui/icons-material/Delete"
const HabitList: React.FC = () => {
    const {habits, removeHabit, toggleHabbit}  = useHabitStore()
    const today = new Date().toISOString().split("T")[0];
    const getStreak = (habit: Habit) => {
      let streak = 0;
      const currentDate = new Date()
      while(true){
        const dateString = currentDate.toISOString().split("T")[0]
        if(habit.completedDates.includes(dateString)){
          streak++;
          currentDate.setDate(currentDate.getDate()-1)
        }else{
          break;
        }
      }
      return streak
    }
    return(
<Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() +
                  habit.frequency.slice(1)}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? "success" : "primary"
                  }
                  // onClick={() => toggleHabit(habit.id, today)}
                  startIcon={<CheckCircleIcon />}
                  onClick={() => toggleHabbit(habit.id, today)}
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  // onClick={() => removeHabit(habit.id)}
                  startIcon={<DeleteIcon />}
                  onClick={() => removeHabit(habit.id)}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Current Streak: {getStreak(habit)} days
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(getStreak(habit) / 30) * 100}
              sx={{ mt: 1 }}
            />
          </Box>
        </Paper>
      ))}
    </Box>
    )
}

export default HabitList