import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Tutor } from "./tutor";

interface TutorProfileProps {
  tutor: Tutor;
  open: boolean;
  onClose: () => void;
}

const TutorProfile: React.FC<TutorProfileProps> = ({ tutor, open, onClose }) => {
  const renderStars = (rating: number) => {
    return (
      <Box>
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarIcon key={index} color="primary" />
          ) : (
            <StarBorderIcon key={index} color="disabled" />
          )
        )}
      </Box>
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {tutor.name}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">Meeting ID: {tutor.meetingid}</Typography>
        <Typography variant="subtitle1">Description:</Typography>
        <Typography variant="body2" gutterBottom>
          {tutor.description}
        </Typography>

        <Typography variant="subtitle1">Rating:</Typography>
        {renderStars(tutor.rating)}

        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Tips:
        </Typography>
        <Typography variant="body2" gutterBottom>
          {tutor.tips}
        </Typography>

        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Notes:
        </Typography>
        <List>
          {tutor.notes.map((note, index) => (
            <ListItem key={index}>
              <ListItemText primary={note} />
            </ListItem>
          ))}
        </List>

        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Tests:
        </Typography>
        <List>
          {tutor.tests.map((test, index) => (
            <ListItem key={index}>
              <ListItemText primary={test} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default TutorProfile;
