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
            width: 16,
            height: 16,
          }),
        }),
      },
    },
    JoyCard: {
      defaultProps: {
        variant: "soft",
        size: "sm",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "sm" && {
            padding: theme.spacing(0.5),
            userSelect: "none",
            border: `1px solid ${theme.palette.background.level2}`,
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
            // background: theme.palette.background.level2,
          }),
        }),
      },
    },
    JoyBadge: {
      defaultProps: {
        size: "sm",
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
