import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import RecruitCard from "../../components/Cards/RecruitCard";
import ExtendedRecruitCard from "../../components/Info/RecruitInfo";
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
      id="Recruit"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "100%",
      }}
    >
      <PageHeader
        id="Recruit-header"
        sx={{
          display: "flex",
          alignItems: "stretch",
          bgcolor: "background.level1",
          gap: 1,
          overflow: "hidden",

          // p: 1,
        }}
      >
        <LinearProgressWithLabel timerId={"recruit"} />
      </PageHeader>

      <PageBody
        id="Recruit-body"
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.level1",
          gap: 1,
          p: 1,
        }}
      >
        {Object.values(recruits).map((recruit) => (
          <RecruitCard
            key={recruit.id}
            recruit={recruit}
            isSelected={recruit.id === currentSelectedRecruit}
          />
        ))}
      </PageBody>

      <PageBottom
        id="Recruit-bottom"
        sx={{
          bgcolor: "background.level1",
        }}
      >
        {currentSelectedRecruit ? (
          <ExtendedRecruitCard recruit={recruits[currentSelectedRecruit]} />
        ) : (
          <></>
        )}
      </PageBottom>
    </Box>
  );
};

export default Recruit;
