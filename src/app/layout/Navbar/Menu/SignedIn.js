import React from "react";
import { Box, Text, Avatar, Menu } from "grommet";
import { withRouter } from "react-router-dom";
import {
  FormDown,
  ScheduleNew,
  Plan,
  Group,
  User,
  SettingsOption,
  Logout,
} from "grommet-icons";

class SignedIn extends React.Component {
  render() {
    const { history, signOut } = this.props;
    return (
      <Menu
        dropBackground="darkThree"
        items={[
          {
            label: <Box alignSelf="center">Add Event</Box>,
            onClick: () => {
              return history.push("/createEvent");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <ScheduleNew size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">My Events</Box>,
            onClick: () => {
              return history.push("/events");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Plan size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">My Network</Box>,
            onClick: () => {
              return history.push("/people");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Group size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">My Profile</Box>,
            onClick: () => {
              return history.push("/people");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <User size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">Settings</Box>,
            onClick: () => {
              return history.push("/settings");
            },
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <SettingsOption size="medium" />
              </Box>
            ),
          },
          {
            label: <Box alignSelf="center">Logout</Box>,
            onClick: () => signOut(),
            icon: (
              <Box pad={{ left: "medium", right: "small" }}>
                <Logout size="medium" />
              </Box>
            ),
          },
        ]}
      >
        <Box direction="row" gap="small" pad="small">
          <Avatar
            src="http://placeimg.com/640/480/people"
            border={{ color: "white", size: "small" }}
            size="small"
          />
          <Text>Username</Text>
          <FormDown />
        </Box>
      </Menu>
    );
  }
}

export default withRouter(SignedIn);
