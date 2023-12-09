import { Box, styled } from "@mui/joy";

export const PageHeader = styled(Box)(({ theme }) => ({
  minHeight: 40,
  maxHeight: 40,
  width: "100%",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));

export const PageBody = styled(Box)(({ theme }) => ({
  minHeight: "calc(50% - 32px)",
  maxHeight: "calc(50% - 32px)",
  overflowY: "auto",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));

export const PageBottom = styled(Box)(({ theme }) => ({
  minHeight: "calc(50% - 32px)",
  maxHeight: "calc(50% - 32px)",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  bgcolor: "background.level1",
}));
