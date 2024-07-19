import React from 'react'

const Toast = ({ title, message, smallMessage, show, icon }) => {
    return (
        <div className="toast-container position-fixed top-0 end-0 p-3">
            <div id="liveToast" className={`toast ${show ? "show" : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {icon}
                    <strong className="me-auto">{title}</strong>
                    <small>{smallMessage}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Toast