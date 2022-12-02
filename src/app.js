import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  @api link = 'https://google.com';

copyText = function() {
    console.log(`Entry ${this.link}!`);
    this.doCopy();
};

doCopy = function() {
    let content = this.link;
    let inp = this.template.querySelector('.my-class');
    inp.disabled = false;
    //inp.value = JSON.stringify(content);
    inp.value = content;
    inp.select();
    document.execCommand('copy');
    inp.disabled = true;

    console.log(`copied ${this.link}`);
};
}
