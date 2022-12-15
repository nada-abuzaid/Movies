import { Image, TouchableOpacity } from "react-native";
import { Svg, Text } from "react-native-svg";
import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

import { IMAGE_URL, DEFAULT_COVER } from "@env";
import { useNavigation } from "@react-navigation/native";

export const ImageCard = ({ uri, index, height, width, id, check = true }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          id: id,
        });
      }}
    >
      {check ? (
        <MovieImage
          source={{
            uri: `${IMAGE_URL}${uri}`,
          }}
          resizeMode="cover"
          width={width}
          height={height}
        />
      ) : (
        <MovieImage
          source={{
            uri: DEFAULT_COVER,
          }}
          resizeMode="cover"
          width={width}
          height={height}
        />
      )}

      <Svg style={{ position: "absolute", left: -35, top: 160 }}>
        {index && (
          <Text
            fill={colors.main}
            stroke={colors.activeTab}
            fontSize={80}
            fontWeight="bold"
            x={25}
            y={60}
          >
            {index}
          </Text>
        )}
      </Svg>
    </TouchableOpacity>
  );
};

const MovieImage = styled(Image)`
  border-radius: 16px;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
