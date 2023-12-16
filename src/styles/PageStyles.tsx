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
  minHeight: 40,
  maxHeight: 40,
  width: "100%",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.vars.radius.md,
  background: theme.palette.background.level1,
}));

export const PageBody = styled(Card)(({ theme }) => ({
  minHeight: "calc(50% - 32px)",
  maxHeight: "calc(50% - 32px)",
  overflowY: "auto",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  background: theme.palette.background.level1,
}));

export const PageBottom = styled(Card)(({ theme }) => ({
  minHeight: "calc(50% - 32px)",
  maxHeight: "calc(50% - 32px)",
  border: `1px solid ${theme.palette.background.level2}`,
  borderRadius: theme.spacing(1),
  background: theme.palette.background.level1,
}));
