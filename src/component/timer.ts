let clockStr:string;

class Clock {
    el: Element;
    constructor(element:Element) {
        this.el = element;
        setInterval(() => this.run(), 1000)
        
    }
    run() {
        const time = new Date();
        let hours = time.getHours().toString();
        let minutes = time.getMinutes().toString();

        if (parseInt(hours) <= 12) {
            if(minutes.length <= 1){
                clockStr = ' AM ' + hours + ' : 0' + minutes;
            } else {
                clockStr = ' AM ' + hours + ' : ' + minutes;
            }
        } else {
            if(minutes.length <= 1){
                clockStr = ' AM ' + hours + ' : 0' + minutes;
            } else {
                clockStr = ' AM ' + hours + ' : ' + minutes;
            }
            clockStr = ' PM ' + hours + ' : ' + minutes;
        }
        if(this.el){
            this.el.innerHTML = clockStr;
    }
}
}

export default Clock;