var $ = require('jquery');
global.jQuery = $;
require('bootstrap')
var React = require('react');

var BootstrapButton = React.createClass({
  render() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

var BootstrapModal = React.createClass({
  componentDidMount() {
    $(React.findDOMNode(this)).modal({backdrop: 'static', keyboard: false, show: false});
  },
  componentWillUnmount() {
    $(React.findDOMNode(this)).off('hidden', this.handleHidden);
  },
  close() {
    $(React.findDOMNode(this)).modal('hide');
  },
  open() {
    $(React.findDOMNode(this)).modal('show');
  },
  render() {
    var confirmButton = null;
    var cancelButton = null;

    if (this.props.confirm) {
      confirmButton = (
        <BootstrapButton
          onClick={this.handelConfirm}
          className="btn-primary">
          {this.props.confirm}
        </BootstrapButton>
      );
    }

    if (this.props.cancel) {
      cancelButton = (
        <BootstrapButton
          onClick={this.handleCancel}
          className="btn-default">
          {this.props.cancel}
        </BootstrapButton>
      );
    }

    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleCancel}>&times;</button>
              <h3>{this.props.title}</h3>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              {cancelButton}
              {confirmButton}
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleConfirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }
});

var Example = React.createClass({
  handleCancel() {
    if (confirm('Are you sure you want to cancel?')) {
      this.refs.modal.close();
    }
  },
  render() {
    var modal = null;
    modal = (
      <BootstrapModal
        ref="modal"
        confirm="OK"
        cancel="Cancel"
        onCancel={this.handleCancel}
        onConfirm={this.handleConfirm}
        title="Hello, Bootstrap!">
        This is a React component powered by jQuery and Bootstrap!
      </BootstrapModal>
    );
    return (
      <div className="example">
        {modal}
        <BootstrapButton onClick={this.openModal} className="btn-default">Open Modal</BootstrapButton>
      </div>
    );
  },
  openModal() {
    this.refs.modal.open();
  },
  closeModal() {
    this.refs.modal.close();
  }
});

module.exports = Example;
