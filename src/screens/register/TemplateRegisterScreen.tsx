import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title } from "../../components";
import { setStackRoot } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled.View``;

const TitleView = styled(Title)``;

class TemplateRegisterScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <TitleView>목표에 활용할 탬플릿을 선택해주세요.</TitleView>
                <GButton type="default" onPress={this.next}>완료</GButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        setStackRoot(componentId, SCREEN_IDS.ProjectScreen);
    }
}

export default TemplateRegisterScreen;
