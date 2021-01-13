import React, { Component } from "react";
import { Box } from "grommet";
import EventActivity from "./EventActivity";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import { connect } from "react-redux";
import EventForm from "../EventForm/EventForm";

const mapStateToProps = (state) => ({
  events: state.events,
});

class EventDashboard extends Component {
  render() {
    const { events } = this.props;

    return (
      <Box direction="row" background="darkOne">
        <Box
          flex
          align="center"
          justify="center"
          pad={{ bottom: "large" }}
          style={{ paddingTop: "90px" }}
        >
          <EventList events={events} />
        </Box>
        <EventActivity
          size={this.props.size}
          showSidebar={this.props.showSidebar}
          setShowSidebar={(this.props.setShowSidebar, (<EventForm />))}
          content={this.props.sidebar}
        />
      </Box>
    );
  }
}

export default connect(mapStateToProps)(EventDashboard);
