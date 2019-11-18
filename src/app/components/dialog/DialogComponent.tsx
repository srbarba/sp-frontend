import React from 'react';

interface DialogProps {
  title: string;
  message: string;
  show: boolean;
  handleClose: () => void;
}

export const DialogComponent = ({
  title,
  message,
  show,
  handleClose
}: DialogProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className={(show && 'modal fade show') || 'modal fade'}
        role="dialog"
        style={
          (!show && { pointerEvents: 'none', display: 'block' }) || {
            display: 'block'
          }
        }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClose}
                data-dismiss="modal">
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (show && 'modal-backdrop fade show') || 'modal-backdrop fade'
        }
        style={(!show && { pointerEvents: 'none' }) || {}}
      />
    </React.Fragment>
  );
};
