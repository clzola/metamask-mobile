import React, { useCallback, useRef } from 'react';
import { View, Image } from 'react-native';
import { createStyles } from './styles';
import { strings } from '../../../../locales/i18n';
import Text, {
  TextVariant,
} from '../../../component-library/components/Texts/Text';
import { createNavigationDetails } from '../../../util/navigation/navUtils';
import Routes from '../../../constants/navigation/Routes';
import { useTheme } from '../../../util/theme';
import ReusableModal, { ReusableModalRef } from '../ReusableModal';
import ButtonTertiary, {
  ButtonTertiaryVariant,
} from '../../../component-library/components/Buttons/ButtonTertiary';
import { ButtonBaseSize } from '../../../component-library/components/Buttons/ButtonBase';
import ButtonPrimary from '../../../component-library/components/Buttons/ButtonPrimary';
import { useDispatch } from 'react-redux';
import {
  setAutomaticSecurityChecks,
  userSelectedAutomaticSecurityChecksOptions,
} from '../../../actions/security';

/* eslint-disable import/no-commonjs, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const onboardingDeviceImage = require('../../../images/swaps_onboard_device.png');

export const createEnableAutomaticSecurityChecksModalNavDetails =
  createNavigationDetails(
    Routes.MODAL.ROOT_MODAL_FLOW,
    Routes.MODAL.ENABLE_AUTOMATIC_SECURITY_CHECKS,
  );

const EnableAutomaticSecurityChecksModal = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const modalRef = useRef<ReusableModalRef | null>(null);
  const dispatch = useDispatch();

  const dismissModal = (cb?: () => void): void =>
    modalRef?.current?.dismissModal(cb);

  const triggerClose = useCallback(
    () =>
      dismissModal(() =>
        dispatch(userSelectedAutomaticSecurityChecksOptions()),
      ),
    [dispatch],
  );

  const enableAutomaticSecurityChecks = useCallback(() => {
    dismissModal(() => {
      dispatch(userSelectedAutomaticSecurityChecksOptions());
      dispatch(setAutomaticSecurityChecks(true));
    });
  }, [dispatch]);

  return (
    <ReusableModal ref={modalRef} style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.images}>
          <Image source={onboardingDeviceImage} />
        </View>
        <Text variant={TextVariant.lHeadingLG} style={styles.title}>
          {strings('enable_automatic_security_check_modal.title')}
        </Text>
        <Text variant={TextVariant.sBodyMD} style={styles.description}>
          {strings('enable_automatic_security_check_modal.description')}
        </Text>
      </View>
      <View style={styles.actionButtonWrapper}>
        <ButtonPrimary
          label={strings(
            'enable_automatic_security_check_modal.primary_action',
          )}
          onPress={enableAutomaticSecurityChecks}
          style={styles.actionButton}
        />
        <ButtonTertiary
          label={strings(
            'enable_automatic_security_check_modal.secondary_action',
          )}
          size={ButtonBaseSize.Md}
          onPress={triggerClose}
          variant={ButtonTertiaryVariant.Normal}
        />
      </View>
    </ReusableModal>
  );
};

export default React.memo(EnableAutomaticSecurityChecksModal);
