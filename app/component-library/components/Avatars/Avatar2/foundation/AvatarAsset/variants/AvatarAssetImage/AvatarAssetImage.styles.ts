// Third party dependencies.
import { StyleSheet, ImageStyle } from 'react-native';

// External dependencies.
import { Theme } from '../../../../../../../../util/theme/models';

// Internal dependencies.
import { AvatarAssetImageStyleSheetVars } from './AvatarAssetImage.types';

/**
 * Style sheet function for AvatarAssetImage component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: AvatarAssetImageStyleSheetVars;
}) => {
  const { vars } = params;
  const { style, size } = vars;
  return StyleSheet.create({
    image: Object.assign(
      {
        width: Number(size),
        height: Number(size),
      } as ImageStyle,
      style,
    ) as ImageStyle,
  });
};

export default styleSheet;