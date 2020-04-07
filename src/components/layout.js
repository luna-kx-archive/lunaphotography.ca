import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from 'react-flexbox-grid';

import Navigation from "../components/navigation"
import "./layout.css"

const Layout = ({ children }) => {
  return (
      <React.Fragment>
        <Grid fluid>
          <Row>
            <Navigation />
            <Col xs={6} md={3}>
                <main>{children}</main>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
