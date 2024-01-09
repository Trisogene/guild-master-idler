import { Grid } from "@mui/joy";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Items from "./components/Items/Items";
import PlayerDetail from "./components/PlayerDetail/PlayerDetail";
import Players from "./components/Players/Players";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Recipes from "./components/Recipes/Recipes";

const Dashboard = () => {
  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        height: "100%",
      }}
      spacing={1}
    >
      {/* Players */}
      <Grid
        xs={12}
        sm={6}
        md={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
          spacing={1}
        >
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <Players />
          </Grid>
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <PlayerDetail />
          </Grid>
        </Grid>
      </Grid>

      {/* Items */}
      <Grid
        xs={12}
        sm={6}
        md={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
          spacing={1}
        >
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <Items />
          </Grid>
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <ItemDetail />
          </Grid>
        </Grid>
      </Grid>

      {/* Recipes */}
      <Grid
        xs={12}
        sm={12}
        md={4}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
          spacing={1}
        >
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <Recipes />
          </Grid>
          <Grid xs={6} sm={12} sx={{ height: "50%", minWidth: "100%" }}>
            <RecipeDetail />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
