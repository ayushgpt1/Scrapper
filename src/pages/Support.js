import React from "react";
import VictimSupport from "../components/VictimSupport";
import {
  Container,
  Box,
  Typography,
  Paper,
  Divider,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import SmsIcon from "@mui/icons-material/Sms";

const Support = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Support
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="body1" paragraph>
          Welcome to the support page. Here you can find crucial resources and
          assistance for victims of violence and human trafficking. Our goal is
          to provide you with the necessary help and connect you with the right
          resources.
        </Typography>

        <Box sx={{ marginY: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Helplines
          </Typography>
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href="tel:18007997233"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        National Domestic Violence Hotline
                      </a>
                    }
                    secondary={
                      <a
                        href="tel:18007997233"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        1-800-799-7233
                      </a>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href="tel:18883737888"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        National Human Trafficking Hotline
                      </a>
                    }
                    secondary={
                      <a
                        href="tel:18883737888"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        1-888-373-7888
                      </a>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SmsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <a
                        href="sms:741741"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Crisis Text Line
                      </a>
                    }
                    secondary={
                      <a
                        href="sms:741741"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Text HOME to 741741
                      </a>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ marginY: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Resources for Reducing Violence and Human Trafficking
          </Typography>
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                <strong>Educational Programs:</strong> Learn about prevention
                strategies and support programs in your community.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Legal Assistance:</strong> Find organizations that offer
                legal support and advocacy for victims.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Community Outreach:</strong> Join local groups working
                to raise awareness and combat violence and trafficking.
              </Typography>
              <Button
                variant="contained"
                color="white"
                sx={{ marginTop: 2, backgroundColor: "#333", color: "white" }}
                href="https://globalfundforchildren.org/initiatives/combatting-child-trafficking-in-india/"
                target="_blank" // Optional: Opens the link in a new tab
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Box>

        <VictimSupport />
      </Paper>
    </Container>
  );
};

export default Support;
