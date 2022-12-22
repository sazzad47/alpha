import React, { useState } from "react";
import { Avatar, Grid, IconButton, TextField, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { SideMenuProps } from "..";
import { useTheme } from "next-themes";
import { SidebarGroupProps } from ".";

interface Props {
  setState: Function;
  setGroupBarState: Function;
}

const contacts = [
  { id: 1, name: "Siam Ahmed" },
  { id: 2, name: "Imran Hossen" },
  { id: 3, name: "Saiful Islam" },
  { id: 4, name: "Amir Hamza" },
  { id: 5, name: "Zakir Hossen" },
  { id: 6, name: "Shamsul Haque" },
  { id: 7, name: "Mir Ali" },
  { id: 8, name: "Mahmudul Hasan" },
  { id: 9, name: "Moin Ali" },
  { id: 10, name: "Sakib Al Hasan" },
];
interface ParticipantsProps {
  id: number;
  name?: string;
}
const AddParticipants = ({ setState, setGroupBarState}: Props) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [contactList, setContactList] = useState<ParticipantsProps[]>(contacts);
  const [participants, setParticipants] = useState<ParticipantsProps[]>([]);

  const handleAddParticipant = (contact: ParticipantsProps) => {
    let id = contact.id;
    setParticipants((prevParticipants: ParticipantsProps[]) => [
      ...prevParticipants,
      contact,
    ]);
    setContactList((contactList) =>
      contactList.filter((contact) => contact.id !== id)
    );
  };
  const handleRemoveParticipant = (contact: ParticipantsProps) => {
    let id = contact.id;
    setParticipants(
      participants.filter((participant) => participant.id !== id)
    );
    setContactList((contactList) => [...contactList, contact]);
  };

  return (
    <Grid className="absolute w-full h-full flex flex-col">
      <Grid className="relative text-lg text-textDark h-[20vh] bg-[#34b483] dark:bg-[#66814b33] flex items-center justify-center">
        <IconButton
          onClick={() =>
            setState((prevState: SideMenuProps) => ({
              ...prevState,
              showMainBar: true,
            }))
          }
          
          className="focus:outline-none absolute left-2 text-inherit"
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        Add group participants
      </Grid>
      <Grid
        className={`flex flex-col ${
          participants.length ? "h-[60vh]" : "h-[80vh]"
        }`}
      >
        <Grid className="h-[20vh] max-h-[30vh] overflow-y-auto flex flex-col items-center justify-center w-full px-5 py-5">
          <Grid className="w-full flex flex-wrap gap-3">
            {participants.map((contact, i) => (
              <Grid
                className="p-2 bg-bgButton dark:bg-bgButtonDark flex items-center gap-2"
                key={i}
              >
                <Avatar className="w-[20px] h-[20px]" />
                <Typography className="p-0 text-sm">{contact.name} </Typography>
                <IconButton
                  onClick={() => handleRemoveParticipant(contact)}
                  size="small"
                  className="focus:outline-none bg-transparent"
                >
                  <CloseIcon className="text-sm" />
                </IconButton>
              </Grid>
            ))}
          </Grid>
          <TextField
            placeholder="Type contact name"
            fullWidth
            autoFocus
            sx={{
              input: { color: currentTheme === "dark" ? "#fff" : "#000" },
              "& label.Mui-focused": {
                color: currentTheme === "dark" ? "#fff" : "#000",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: currentTheme === "dark" ? "#fff" : "#000",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: currentTheme === "dark" ? "#fff" : "#000",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: currentTheme === "dark" ? "#fff" : "#000",
              },
              "& .MuiInput-underline:hover:after": {
                borderBottomColor: currentTheme === "dark" ? "#fff" : "#000",
              },
            }}
            variant="standard"
            className="bg-inherit focus:outline-none focus:border-b-2"
          />
        </Grid>
        <Grid className={`w-full h-auto overflow-y-auto`}>
          {contactList.map((contact, i) => (
            <Grid
              key={i}
              onClick={() => handleAddParticipant(contact)}
              className="w-full px-3 py-3 cursor-pointer flex items-start justify-between hover:bg-bgButton dark:hover:bg-bgButtonDark "
            >
              <Grid className="flex items-center gap-2">
                <Avatar src="/user.jpg" className="w-[50px] h-[50px]" />
                <Typography className="p-0">{contact.name}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        className={`${
          participants.length ? "flex" : "hidden"
        } min-h-[20vh] w-full text-textDark bg-[#34b483] dark:bg-[#66814b33] items-center justify-center`}
      >
        <IconButton
          onClick={() =>
            setGroupBarState((prevState: SidebarGroupProps) => ({
              ...prevState,
              showCreateGroupBar: true,
            }))
          }
          className="focus:outline-none text-textDark"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AddParticipants;
