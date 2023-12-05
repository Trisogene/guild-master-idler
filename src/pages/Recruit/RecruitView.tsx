import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import RecruitCard from "../../components/Cards/RecruitCard";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel/LinearProgressWithLabel";
import { T_ReduxState } from "../../types/types.d";

const Recruit = () => {
  const recruits = useSelector((state: T_ReduxState) => state.recruit.recruits);

  return (
    <Box
      id="Recruit"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 1,
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: -8,
          zIndex: 2,
          minWidth: "100%",
          // minHeight: 50,
          bgcolor: "black",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: 1,
        }}
      >
        <Box sx={{ textAlign: "center", fontSize: 12 }}>
          Time before new recruits
        </Box>
        <LinearProgressWithLabel timerId={"recruit"} />
      </Box>

      {Object.values(recruits).map((recruit) => (
        <RecruitCard key={recruit.id} player={recruit} />
      ))}
    </Box>
  );
};

export default Recruit;
