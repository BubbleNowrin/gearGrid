import React from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const UpdateUserInfoBtn = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Button
      sx={{
        background: "#3B82F6 !important",
        color: "#ffffff",
        fontSize: "12px",
        paddingY: "8px",
        "&:hover": {
          background: "#e2e2e2 !important",
          color: "#3B82F6",
        },
      }}
      type="submit"
    >
      {isLoading ? (
        <CircularProgress sx={{ color: "#ffffff" }} size={24} />
      ) : (
        "Update"
      )}
    </Button>
  );
};

export default UpdateUserInfoBtn;
