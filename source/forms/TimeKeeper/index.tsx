import { FormSwitcher } from 'Components/Form/FormStateHandler';

import EditContactForm from './states/EditForm';

const TimeKeeperForm = FormSwitcher({
  FormEdit: EditContactForm,
});

export default TimeKeeperForm;
