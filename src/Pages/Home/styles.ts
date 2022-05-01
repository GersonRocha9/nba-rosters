import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.background};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.COLORS.text};
  font-family: ${(props) => props.theme.FONTS.bold};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${(props) => props.theme.COLORS.text};
  font-family: ${(props) => props.theme.FONTS.regular};
`;

export const TeamList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  height: 19%;
`;

export const TeamButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
`;

export const TeamName = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${(props) => props.theme.COLORS.text};
  font-family: ${(props) => props.theme.FONTS.medium};
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const PlayerList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  height: 55%;
  padding: 0 20px;
`;

export const PlayerButton = styled.TouchableOpacity`
  padding: 2px;
  width: 97%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const PlayerText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${(props) => props.theme.COLORS.text};
  font-family: ${(props) => props.theme.FONTS.medium};
  margin-top: 10px;
  text-align: center;
  width: 20%;
`;
