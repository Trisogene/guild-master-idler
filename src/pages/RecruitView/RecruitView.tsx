import { Card, Grid } from "@mui/joy";
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
    <Page>
      <Card size="sm" variant="soft">
        <RecruitTimer />
      </Card>
      <Card
        variant="soft"
        size="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "50%",
          overflowY: "auto",
        }}
      >
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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

      <Card variant="soft" size="sm" sx={{ height: "50%" }}>
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
