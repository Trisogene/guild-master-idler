import { Box, Grid } from "@mui/joy";
import { useSelector } from "react-redux";
import RecruitCard from "../../components/Cards/RecruitCard";
import RecruitInfo from "../../components/Info/RecruitInfo/RecruitInfo";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel/LinearProgressWithLabel";
import { PageBody, PageBottom, PageHeader } from "../../styles/PageStyles";
import { T_ReduxState } from "../../types/types.d";

const Recruit = () => {
  const recruits = useSelector((state: T_ReduxState) => state.recruit.recruits);
  const currentSelectedRecruit = useSelector(
    (state: T_ReduxState) => state.recruit.currentlySelectedRecruit
  );

  return (
    <Box
      className="Recruit"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "100%",
      }}
    >
      <PageHeader
        className="Recruit-header"
        sx={{
          display: "flex",
          alignItems: "stretch",
          bgcolor: "background.level1",
          gap: 1,
          overflow: "hidden",
        }}
      >
        <LinearProgressWithLabel timerId={"recruit"} />
      </PageHeader>

      <PageBody className="Recruit-body" sx={{ p: 1 }}>
        <Grid container spacing={1}>
          {Object.values(recruits).map((recruit) => (
            <Grid xs={12} key={recruit.id}>
              <RecruitCard
                key={recruit.id}
                recruit={recruit}
                isSelected={recruit.id === currentSelectedRecruit}
              />
            </Grid>
          ))}
        </Grid>
      </PageBody>

      <PageBottom
        className="Recruit-bottom"
        sx={{
          bgcolor: "background.level1",
        }}
      >
        {currentSelectedRecruit && recruits[currentSelectedRecruit] ? (
          <RecruitInfo recruit={recruits[currentSelectedRecruit]} />
        ) : (
          <>??</>
        )}
      </PageBottom>
    </Box>
  );
};

export default Recruit;
