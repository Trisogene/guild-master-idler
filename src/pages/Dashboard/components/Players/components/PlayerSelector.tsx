import { Avatar, Box, Button, Tooltip } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { JOBS } from "../../../../../config/config";
import { T_ReduxState } from "../../../../../config/store.d";
import { setPlayersFilter } from "../../../../../redux/ui/uiSlice";

const PlayerSelector = () => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: T_ReduxState) => state.ui.players.currentFilter
  );
  return (
    <Box sx={{ display: "flex", gap: 0.5, p: 0.5 }}>
      {Object.values(JOBS).map((job) => (
        <Tooltip key={job.id} title={job.label} placement="top">
          <Button
            sx={{ p: 0, m: 0, height: "100%" }}
            onClick={() => dispatch(setPlayersFilter(job.id))}
            variant="plain"
            disabled
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar
                src={job.icon}
                sx={{
                  opacity: filters[job.id] ? 1 : 0.25,
                }}
              />
            </Box>
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

export default PlayerSelector;
