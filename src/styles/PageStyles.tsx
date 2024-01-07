import { Box, Card, styled } from "@mui/joy";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  gap: theme.spacing(1),
  overflow: "hidden",
}));

export const PageBody = styled(Card)(({ theme }) => ({
  // height: "calc(50% - 24px)",
  overflowY: "auto",
}));

export const PageBottom = styled(Card)(({ theme }) => ({
  // height: "calc(50% - 24px)",
}));
