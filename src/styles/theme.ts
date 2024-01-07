import { extendTheme } from "@mui/joy";
import { AvatarOwnerState } from "@mui/joy/Avatar"; // Import the AvatarOwnerState type

type ExtendedOwnerState = AvatarOwnerState & {
  size?: "sm" | "md" | "lg" | "xl";
};

export const theme = extendTheme({
  components: {
    JoyAvatar: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ExtendedOwnerState }) => ({
          ...(ownerState.size === "sm" && {
            width: 16,
            height: 16,
          }),
          ...(ownerState.size === "md" && {
            width: 24,
            height: 24,
          }),
          ...(ownerState.size === "lg" && {
            width: 42,
            height: 42,
          }),
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState && {
            userSelect: "none",
            boxShadow: theme.shadow.md,
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
