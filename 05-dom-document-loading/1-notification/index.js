export default class NotificationMessage {
    element;
    timer;
    isActive

    constructor(message, props = {}) {
      const {duration = 1000, type = 'success'} = props;
      this.message = message;
      this.duration = duration;
      this.type = type;
      this.element = this.createElement();
    }

    createTemplate() {
      return `
        <div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
      ${this.message}
      </div>
    </div>
  </div>`;
    }

    createElement() {
      const element = document.createElement('div');
      element.innerHTML = this.createTemplate();
      return element.firstElementChild;
    }
    show(targerElement = document.body) {
      if (this.isActive) {
        this.destroy();
      }
      this.isActive = this;
      targerElement.append(this.element);
      this.timer = setTimeout(()=> this.destroy(), this.duration);
    }

    remove() {return this.element.remove();}

    destroy() {return this.remove();}
}
