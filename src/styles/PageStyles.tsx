import { Box, Card, styled } from "@mui/joy";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: theme.spacing(1),
  overflow: "hidden",
}));

export const PageHeader = styled(Card)(({ theme }) => ({
  height: 32,
  maxHeight: 32,
  minHeight: 32,
  width: "100%",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.vars.radius.md,
  background: theme.palette.background.level1,
}));

export const PageBody = styled(Card)(({ theme }) => ({
  height: "100%",

  overflowY: "auto",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  background: theme.palette.background.level1,
}));

export const PageBottom = styled(Card)(({ theme }) => ({
  height: "100%",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  background: theme.palette.background.level1,
}));
