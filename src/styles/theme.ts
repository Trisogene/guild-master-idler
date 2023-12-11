import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  components: {
    JoyAvatar: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            width: 24,
            height: 24,
          }),
        }),
      },
    },
    JoyCard: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            padding: theme.spacing(0.5),
            borderRadius: theme.vars.radius.md,
            userSelect: "none",
            border: `1px solid ${theme.palette.background.level3}`,
            background: theme.palette.background.level1,
            overflow: "hidden",
            gap: theme.spacing(0.5),
          }),
        }),
      },
    },
    JoyCardContent: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState && {
            padding: theme.spacing(0.25),
          }),
        }),
      },
    },
    JoyChip: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            borderRadius: theme.vars.radius.md,
            background: theme.palette.background.level2,
          }),
        }),
      },
    },
    JoyButton: {
      defaultProps: {
        size: "sm",
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
  },
});
