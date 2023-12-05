import { Box, Tooltip } from "@mui/joy";
import { useState } from "react";
import { I_PerkIcon } from "../../types/types.d";

const PerkIcon = ({ perk }: I_PerkIcon) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  return (
    <Tooltip
      title={perk.label}
      placement="top"
      onClose={handleTooltipClose}
      open={tooltipOpen}
      enterTouchDelay={0}
    >
      <Box
        sx={{
          bgcolor: "background.level2",
          width: 30,
          height: 30,
          borderRadius: "100%",
        }}
      >
        <Box
          onClick={handleTooltipOpen}
          component={"img"}
          src={perk.img}
          loading="lazy"
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            p: 0.5,
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default PerkIcon;
