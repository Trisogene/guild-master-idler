import { Grid } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Recruit from "../components/Recruit/Recruit";
import RecruitInfo from "../components/RecruitInfo/RecruitInfo";
import RecruitTimer from "../components/RecruitTimer/RecruitTimer";
import { T_ReduxState } from "../config/store.d";
import { updateRecruits } from "../redux/recruit/recruitSlice";
import { Page, PageBody, PageBottom, PageHeader } from "../styles/PageStyles";

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
      <PageHeader>
        <RecruitTimer />
      </PageHeader>
      <PageBody sx={{ p: 0.5, display: "flex", flexDirection: "column", g: 1 }}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))",
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
      </PageBody>

      <PageBottom>
        {selectedPlayer && recruits[selectedPlayer] ? (
          <RecruitInfo recruit={recruits[selectedPlayer]} />
        ) : (
          <></>
        )}
      </PageBottom>
    </Page>
  );
};

export default RecruitView;
