import { Box, Grid } from "@mui/joy";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Items from "./components/Items/Items";
import PlayerDetail from "./components/PlayerDetail/PlayerDetail";
import Players from "./components/Players/Players";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Recipes from "./components/Recipes/Recipes";

const Dashboard = () => {
  return (
    <Grid
      id="Dashboard"
      container
      sx={{
        width: "100%",
        height: "100%",
      }}
      spacing={1}
    >
      {/* Player */}
      <Grid
        id="Player"
        xs={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ height: "50%" }}>
          <Players />
        </Box>
        <Box sx={{ height: "50%" }}>
          <PlayerDetail />
        </Box>
      </Grid>

      {/* Items */}
      <Grid
        className="Item"
        xs={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          border: "none",
        }}
      >
        <Box sx={{ height: "50%" }}>
          <Items />
        </Box>
        <Box sx={{ height: "50%" }}>
          <ItemDetail />
        </Box>
      </Grid>

      {/* Recipes */}
      <Grid
        className="Recipe"
        xs={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          border: "none",
        }}
      >
        <Box sx={{ height: "50%" }}>
          <Recipes />
        </Box>
        <Box sx={{ height: "50%" }}>
          <RecipeDetail />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
