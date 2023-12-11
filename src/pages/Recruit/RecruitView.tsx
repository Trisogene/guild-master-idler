import { Box, Grid } from "@mui/joy";
import { useSelector } from "react-redux";
import RecruitCard from "../../components/Cards/RecruitCard";
import RecruitInfo from "../../components/Info/RecruitInfo/RecruitInfo";
import RecruitTimer from "../../components/RecruitTimer/RecruitTimer";
import {
  Page,
  PageBody,
  PageBottom,
  PageHeader,
} from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const Recruit = () => {
  const recruits = useSelector((state: T_ReduxState) => state.recruit.recruits);
  const currentSelectedRecruit = useSelector(
    (state: T_ReduxState) => state.recruit.currentlySelectedRecruit
  );

  return (
    <Page className="Recruit">
      <PageHeader
        className="Recruit-header"
        sx={{
          display: "flex",
          gap: 1,
          overflow: "hidden",
        }}
      ></PageHeader>

      <PageBody
        className="Recruit-body"
        sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Box className="Recruit-body-timer-container">
          <RecruitTimer />
        </Box>

        <Grid container spacing={1}>
          {Object.values(recruits).map((recruit) => (
            <Grid xs={6} key={recruit.id}>
              <RecruitCard
                key={recruit.id}
                recruit={recruit}
                isSelected={recruit.id === currentSelectedRecruit}
              />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom className="Recruit-bottom">
        {currentSelectedRecruit && recruits[currentSelectedRecruit] ? (
          <RecruitInfo recruit={recruits[currentSelectedRecruit]} />
        ) : (
          <>??</>
        )}
      </PageBottom>
    </Page>
  );
};

export default Recruit;
