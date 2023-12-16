import { Badge, Typography } from "@mui/joy";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { LINKS } from "../../config/LINKS";
import { setPage } from "../../lib/redux/navigation/navigation_slice";
import { T_ReduxState } from "../../lib/redux/store.d";

interface I_NavigatorProps {
  currentPage: string;
}

const Navigator = ({ currentPage }: I_NavigatorProps) => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: T_ReduxState) => state.navigation.notifications
  );
  const onChangeHandler = (_: any, value: any) => {
    dispatch(setPage(Object.values(LINKS)[value].id));
  };

  return (
    <Tabs
      orientation="vertical"
      defaultValue={0}
      sx={{ bgcolor: "transparent", userSelect: "none" }}
      onChange={onChangeHandler}
      value={Object.values(LINKS).findIndex((link) => link.id === currentPage)}
    >
      <TabList
        tabFlex={1}
        disableUnderline
        sx={{
          p: 0.5,
          fontSize: 12,
          justifyContent: "center",
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
          <Badge
            badgeInset="10%"
            key={link.label}
            badgeContent={notifications?.[link.id] || null}
          >
            <Tab disableIndicator>
              <Typography>{link.label}</Typography>
            </Tab>
          </Badge>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Navigator;
