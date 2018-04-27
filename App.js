import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import localConfig from "gitlabapp/config/local.config.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  state = {
    projectList: undefined
  };

  getProjectList = async () =>
    (await fetch(
      `http://seowonmqtt.iptime.org:11180/api/v4/projects?private_token=${
        localConfig.private_token
      }`
    )).json();

  componentDidMount() {
    this.getProjectList().then(projectList => {
      this.setState({ projectList });
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>{JSON.stringify(this.state.projectList)}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
