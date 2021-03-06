function Snippet(){
	this.htmlStrings = [];
	this.choiceNext = [];
	this.choiceConsequences = [];
	this.choiceIsOutside = [];
	
	this.addChoiceHtmlString = function(index, body){
		var string = "<span class='choice' id='" + index + "'>" + body + "</span>";
		this.htmlStrings.push(string);
	}
}

Snippet.prototype.addHtmlChoice = function(next, consequences, isOutside, body){

	this.choiceNext.push(next);
	this.choiceConsequences.push(consequences);
	this.choiceIsOutside.push(isOutside);
	
	if((this.choiceNext.length === this.choiceConsequences.length) && (this.choiceConsequences.length === this.choiceIsOutside.length)){
		var index = this.choiceNext.length-1;
		this.addChoiceHtmlString(index, body);
	}
	else{
		//Throw error
	}
}

Snippet.prototype.getChoiceParameters = function(index){
	return {next: this.choiceNext[index],
			consequences: this.choiceConsequences[index],
			isOutside: this.choiceIsOutside[index]};
}

Snippet.prototype.add = function(string){
	this.htmlStrings.push(string);
}

Snippet.prototype.addToWord = function(string){
	var prevString = this.htmlStrings.pop();
	this.htmlStrings.push(prevString + string);
}

Snippet.prototype.startParagraph = function(){
	this.htmlStrings.push("<p>");
}

Snippet.prototype.endParagraph = function(){
	this.htmlStrings.push("</p>");
}


Snippet.prototype.getHtml = function(){
	var body = "";
	this.htmlStrings.forEach(function(string){
		body += string + ' ';
	});
	return body;
}

export default Snippet;