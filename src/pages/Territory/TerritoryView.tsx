import { Card, Grid } from "@mui/joy";
import Territory from "../../components/Territory/Territory";
import { TERRITORIES } from "../../config/config";

const TerritoryView = () => {
  return (
    <Card sx={{ minHeight: "100%" }}>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
          gap: 1,
        }}
      >
        {Object.values(TERRITORIES).map((territory) => (
          <Territory key={territory.id} territory={territory} />
        ))}
      </Grid>
    </Card>
  );
};

export default TerritoryView;
