import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  components: {
    JoyAvatar: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            width: 16,
            height: 16,
          }),
          ...(ownerState.size === "md" && {
            width: 24,
            height: 24,
          }),
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState && {
            userSelect: "none",
            boxShadow: theme.shadow.sm,
          }),
        }),
      },
    },
    JoyButton: {
      defaultProps: {
        color: "neutral",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            fontSize: 12,
            minHeight: 24,
          }),
        }),
      },
    },
    JoyBadge: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            padding: 0,
            margin: 0,
          }),
        }),
      },
    },
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState && {
            border: `1px solid ${theme.palette.background.level2}`,
          }),
        }),
      },
    },
  },
});
