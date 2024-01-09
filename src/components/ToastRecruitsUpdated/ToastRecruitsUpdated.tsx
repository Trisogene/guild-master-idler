import { Box, Button } from "@mui/joy";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setModalIsOpen } from "../../redux/ui/uiSlice";

const ToastRecruitsUpdated = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
      }}
    >
      <Button
        fullWidth
        color="primary"
        onClick={() => {
          dispatch(setModalIsOpen(true));
          toast.dismiss("recruitsUpdated");
        }}
      >
        New Recruits Available
      </Button>
    </Box>
  );
};

export default ToastRecruitsUpdated;
