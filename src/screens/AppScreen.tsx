import assetsJson from "assets-json";
import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import styled from "styled-components/native";
import LottieView from 'lottie-react-native';

import { pushTransition } from "./styles/animation";

interface IProps {
  componentId: string;
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const NavigateButton = styled.Button``;

const Text = styled.Text``;

class AppScreen extends Component<IProps> {
  public render() {
    return (
      <Container>
        <Text>Hello World</Text>
        <LottieView
          style={{
            width: 200,
            height: 200
          }}
          source={assetsJson.selected_number1}
          autoPlay={true}
          loop={true}
          duration={1000}
        />
      </Container>
    );
  }
}

export default AppScreen;
