import { Box, Card, styled } from "@mui/joy";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: theme.spacing(1),
  overflow: "hidden",
}));

export const PageHeader = styled(Card)(({ theme }) => ({
  maxHeight: 32,
  minHeight: 32,
  width: "100%",
  borderRadius: theme.vars.radius.md,
}));

export const PageBody = styled(Card)(({ theme }) => ({
  height: "calc(50% - 24px)",
  overflowY: "auto",
}));

export const PageBottom = styled(Card)(({ theme }) => ({
  height: "calc(50% - 24px)",
}));
