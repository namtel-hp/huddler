import React, { Component } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

export default class EventActivity extends Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.showSidebar || this.props.size !== "small" ? (
          <Collapsible
            direction="horizontal"
            open={this.props.showSidebar}
            style={{
              height: "100vh",
              position: "sticky",
              top: "0",
            }}
          >
            <Box
              width="medium"
              background="darkTwo"
              align="center"
              justify="center"
              style={{
                height: "100vh",
                position: "sticky",
                top: "0",
              }}
            >
              Sidebar
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="darkTwo"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() =>
                  this.props.setShowSidebar(!this.props.showSidebar)
                }
              />
            </Box>
            <Box fill background="light-2" align="center" justify="center">
              Sidebar
            </Box>
          </Layer>
        )}
      </React.Fragment>
    );
  }
}