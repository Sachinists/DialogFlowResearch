module.exports = class Response {
    constructor(speech, text, t){
        this.speech = speech;
        this.displayText = text;
        this.source = t;
    }
}