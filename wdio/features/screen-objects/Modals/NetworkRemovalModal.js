import Selectors from '../../helpers/Selectors';
import Gestures from '../../helpers/Gestures';


class NetworkRemovalModal {

get networkEducationCloseButton() {
  return Selectors.getElementByPlatform('network-education-modal-close-button');
}

async confirmNetworkSwitch(){
  await Gestures.tap(this.networkEducationCloseButton);
}
}
export default new NetworkRemovalModal();
