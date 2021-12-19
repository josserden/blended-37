import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useLocalStorage from "../../hooks/hooks";

export default function Form({ onSubmit }) {
  const [dessert, setDessert] = useLocalStorage("dessert", "");
  const [calories, setCalories] = useLocalStorage("calories", "");
  const [fat, setFat] = useLocalStorage("fat", "");
  const [carbs, setCarbs] = useLocalStorage("carbs", "");
  const [protein, setProtein] = useLocalStorage("protein", "");

  const inputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "dessert":
        setDessert(value);
        break;

      case "calories":
        setCalories(value);
        break;

      case "fat":
        setFat(value);
        break;

      case "carbs":
        setCarbs(value);
        break;

      case "protein":
        setProtein(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CLICK");
    onSubmit({ dessert, calories, fat, carbs, protein });
    reset();
  };

  const reset = () => {
    setDessert("");
    setCalories("");
    setFat("");
    setCarbs("");
    setProtein("");
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Dessert"
          defaultValue="Frozen yoghurt"
          type="text"
          name="dessert"
          value={dessert}
          onChange={inputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Calories"
          defaultValue="159"
          type="number"
          name="calories"
          value={calories}
          onChange={inputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="fat"
          defaultValue="6"
          type="number"
          name="fat"
          value={fat}
          onChange={inputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Carbs"
          defaultValue="24"
          type="number"
          name="carbs"
          value={carbs}
          onChange={inputChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Protein"
          defaultValue="4"
          type="number"
          name="protein"
          value={protein}
          onChange={inputChange}
        />
      </div>

      <Button variant="contained" type="submit">
        Add
      </Button>
    </Box>
  );
}
