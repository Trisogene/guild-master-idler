import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import { LINKS } from "../../config/LINKS";
import useNavigation from "../../lib/hooks/useNavigation";

const Navigator = () => {
  const { changePage } = useNavigation();

  const onChangeHandler = (_: any, value: any) => {
    changePage(Object.values(LINKS)[value].id);
  };

  return (
    <Tabs
      aria-label="tabs"
      defaultValue={0}
      sx={{ bgcolor: "transparent" }}
      onChange={onChangeHandler}
    >
      <TabList
        tabFlex={1}
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: "xl",
          bgcolor: "background.level1",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "background.level3",
          },
        }}
      >
        {Object.values(LINKS).map((link) => (
          <Tab key={link.label} disableIndicator>
            {link.label}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Navigator;
