import { Card, Grid, Typography } from "@mui/joy";
import Territory from "../components/Territory/Territory";
import { TERRITORIES } from "../config/config";
import { Page } from "../styles/PageStyles";

const TerritoryView = () => {
  return (
    <Page>
      <Card size="sm" variant="soft" sx={{ height: "50%" }}>
        <Typography fontSize="lg">
          Territories are still working in progress
        </Typography>
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
      <Card variant="soft" sx={{ height: "50%" }} />
    </Page>
  );
};

export default TerritoryView;
