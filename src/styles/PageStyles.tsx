import { Box, styled } from "@mui/joy";

export const PageHeader = styled(Box)(({ theme }) => ({
  height: 80,
  width: "100%",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));

export const PageBody = styled(Box)(({ theme }) => ({
  minHeight: "calc(100% - 280px)",
  maxHeight: "calc(100% - 280px)",
  overflowY: "auto",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));

export const PageBottom = styled(Box)(({ theme }) => ({
  minHeight: "200px",
  maxHeight: "200px",
  // overflowY: "auto",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));
