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
          minWidth: 400,
          maxWidth: 400,
        }}
      >
        <Card size="sm">
          <Box>
            <RecruitTimer />
          </Box>
        </Card>
        <Card
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
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: 2,
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

      <Card size="sm" sx={{ flexGrow: 1 }}>
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
