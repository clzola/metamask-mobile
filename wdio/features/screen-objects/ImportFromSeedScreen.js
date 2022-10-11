import {
  IMPORT_FROM_SEED_SCREEN_TITLE_ID,
  IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID,
  IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID,
} from '../testIDs/Screens/ImportFromSeedScreen.testIds';
import Selectors from '../helpers/Selectors';
import Gestures from '../helpers/Gestures';

class ImportFromSeed {

  get screenTitle() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_TITLE_ID);
  }

  get seedPhraseInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_SEED_PHRASE_INPUT_ID);
  }

  get newPasswordInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_NEW_PASSWORD_INPUT_ID);
  }

  get confirmPasswordInput() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_CONFIRM_PASSWORD_INPUT_ID);
  }

  get importButton() {
    return Selectors.getElementByPlatform(IMPORT_FROM_SEED_SCREEN_SUBMIT_BUTTON_ID);
  }

  async verifyScreenTitle() {
    await expect(this.screenTitle).toBeDisplayed();
  }

  async typeSecretRecoveryPhrase(phrase) {
    await Gestures.typeText(this.seedPhraseInput, phrase);
  }

  async typeNewPassword(newPassword) {
    await Gestures.typeText(this.newPasswordInput, newPassword);
  }

  async typeConfirmPassword(confirmPassword) {
    await Gestures.typeText(this.confirmPasswordInput, confirmPassword);
  }

  async clickImportButton() {
    await Gestures.waitAndTap(this.screenTitle);
    await Gestures.waitAndTap(this.importButton);
  }
}

export default new ImportFromSeed();