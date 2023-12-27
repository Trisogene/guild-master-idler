import { Grid } from "@mui/joy";
import Territory from "../components/Territory/Territory";
import { TERRITORIES } from "../config/config";
import { Page, PageBody, PageBottom, PageHeader } from "../styles/PageStyles";

const TerritoryView = () => {
  return (
    <Page>
      <PageHeader></PageHeader>
      <PageBody>
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
      </PageBody>
      <PageBottom></PageBottom>
    </Page>
  );
};

export default TerritoryView;
