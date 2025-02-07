import React, { FC } from 'react';
import { useBoolean } from '@td-design/rn-hooks';
import { useTheme } from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import Svg, { Image, ClipPath, Circle } from 'react-native-svg';
import Modal from '../Modal';
import Flex from '../../flex';
import Box from '../../box';
import Text from '../../text';
import SvgIcon from '../../svg-icon';
import { Theme } from '../../theme';
import { TipProps } from '../type';
import helpers from '../../helpers';

const { px } = helpers;
const TipContainer: FC<TipProps> = ({ title, content, img, height }) => {
  const theme = useTheme<Theme>();
  const [visible, { setFalse }] = useBoolean(true);

  return (
    <Modal
      position="center"
      visible={visible}
      maskClosable={false}
      onClose={setFalse}
      bodyContainerStyle={{
        marginHorizontal: theme.spacing.x3,
        backgroundColor: theme.colors.transparent,
      }}
    >
      <Box backgroundColor="background" borderRadius="x1" overflow="hidden">
        {img && (
          <Flex justifyContent="center">
            <Svg width="100%" height={height}>
              <ClipPath id="clip">
                <Circle r={300 + height} cx="50%" cy={-300} />
              </ClipPath>
              <Image
                href={img}
                width="100%"
                height={height}
                clipPath="url(#clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </Svg>
          </Flex>
        )}
        <Box marginBottom="x3">
          {title && (
            <Flex justifyContent="center" marginVertical="x3">
              <Text variant="h1" color="gray500">
                {title}
              </Text>
            </Flex>
          )}
          {typeof content === 'string' ? (
            <Flex justifyContent="center">
              <Text variant="p1" color="gray500">
                {content}
              </Text>
            </Flex>
          ) : (
            content
          )}
        </Box>
      </Box>
      <Flex justifyContent="center" marginTop="x3">
        <TouchableOpacity activeOpacity={0.5} onPress={setFalse}>
          <SvgIcon name="closecircleo" color={theme.colors.gray400} size={px(32)} />
        </TouchableOpacity>
      </Flex>
    </Modal>
  );
};
export default TipContainer;
