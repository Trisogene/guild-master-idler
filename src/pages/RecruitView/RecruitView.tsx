import { Box, Card, Grid } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecruitInfo from "../../components/RecruitInfo/RecruitInfo";
import RecruitTimer from "../../components/RecruitTimer/RecruitTimer";
import { T_ReduxState } from "../../config/store.d";
import { updateRecruits } from "../../redux/recruit/recruitSlice";
import { Page } from "../../styles/PageStyles";
import Recruit from "./components/Recruit";

const RecruitView = () => {
  const recruits = useSelector((state: T_ReduxState) => state.recruit.recruits);
  const dispatch = useDispatch();

  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.recruit.selectedPlayer
  );

  useEffect(() => {
    if (recruits && Object.keys(recruits).length === 0) {
      dispatch(updateRecruits());
    }
  }, [dispatch, recruits]);

  return (
    <Page className="Recruit">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: 220,
        }}
      >
        <Card variant="soft" size="sm">
          <Box>
            <RecruitTimer />
          </Box>
        </Card>
        <Card
          variant="soft"
          size="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            gap: 2,
            flexGrow: 1,
          }}
        >
          <Grid
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 1,
            }}
          >
            {Object.values(recruits).map((recruit) => (
              <Recruit
                key={recruit.id}
                recruit={recruit}
                isSelected={recruit.id === selectedPlayer}
              />
            ))}
          </Grid>
        </Card>
      </Box>

      <Card variant="soft" size="sm" sx={{ flexGrow: 1 }}>
        {selectedPlayer && recruits[selectedPlayer] ? (
          <RecruitInfo recruit={recruits[selectedPlayer]} />
        ) : (
          <></>
        )}
      </Card>
    </Page>
  );
};

export default RecruitView;
