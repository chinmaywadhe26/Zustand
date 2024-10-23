import React from 'react'
import { useState } from 'react'
import { Box, TextField, FormControl,InputLabel, Select, Button, MenuItem   } from '@mui/material';
import useHabitStore from '../store/store';




const AddHabitForm = () => {
    const [name, setName] = useState("")
    const [freq, setFreq] = useState<"daily" | "weekly">("daily")
    const {habits, addHabit} = useHabitStore()
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if(name.trim()){
        addHabit( name, freq);
        setName("")
      }
  }
   
    return (
         <form onSubmit={handleSubmit}>
             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField 
              label="Habit name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter habit'
              fullWidth
              />
                <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={freq}
            label="Frequency"
            onChange={(e) => setFreq(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
            </Box>
         </form> 
  )
}

export default AddHabitForm
