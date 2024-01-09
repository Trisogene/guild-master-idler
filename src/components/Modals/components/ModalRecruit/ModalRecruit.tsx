import { Box, Divider, Grid, ModalDialog, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { T_ReduxState } from "../../../../config/store.d";
import Recruit from "./components/Recruit";

const ModalRecruit: React.FC = () => {
  const recruits = useSelector((state: T_ReduxState) => state.recruit.recruits);
  const dispatch = useDispatch();

  const selectedPlayer = useSelector(
    (state: T_ReduxState) => state.ui.recruit.selectedPlayer
  );

  return (
    <ModalDialog variant="soft" sx={{ minWidth: "70%", minHeight: "70%" }}>
      <Box sx={{ minWidth: "100%", minHeight: 500 }}>
        <Typography fontSize="lg" sx={{ textAlign: "center" }}>
          Recruits
        </Typography>
        <Divider />
        <Box>
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
        </Box>
      </Box>
    </ModalDialog>
  );
};

export default ModalRecruit;
