import React from 'react';
import { Modal } from '@grafana/ui';
import { SaveDashboardForm } from './forms/SaveDashboardForm';
import { SaveDashboardErrorProxy } from './SaveDashboardErrorProxy';
import { useDashboardSave } from './useDashboardSave';
import { SaveDashboardModalProps } from './types';

export const SaveDashboardModal: React.FC<SaveDashboardModalProps> = ({ dashboard, onClose }) => {
  const { state, onDashboardSave } = useDashboardSave(dashboard);
  return (
    <>
      {state.error && <SaveDashboardErrorProxy error={state.error} dashboard={dashboard} onClose={onClose} />}
      {!state.error && (
        <Modal isOpen={true} title="Save dashboard" icon="copy" onDismiss={onClose}>
          <SaveDashboardForm dashboard={dashboard} onCancel={onClose} onSuccess={onClose} onSubmit={onDashboardSave} />
        </Modal>
      )}
    </>
  );
};