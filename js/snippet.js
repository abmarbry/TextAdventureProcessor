function Snippet(){
	this.htmlStrings = [];
	this.choiceNext = [];
	this.choiceConsequences = [];
	this.choiceIsOutside = {};
	
	this.addChoiceHtmlString = function(index, body){
		var string = "<span class='choice' id='" + index + "'>" + body + "</span>";
		this.htmlStrings.push(string);
	}
}

Snippet.prototype.addHtmlChoice = function(next, consequences, isOutside, body){
	this.choiceNext.push(next);
	this.choiceConsequences.push(consequences);
	this.choiceIsOutside = isOutside;
	//TO DO LATER: Handle if somehow they don't have the same length
	var index = this.choiceNext.length-1;
	this.addChoiceHtmlString(index, body);
}

Snippet.prototype.getChoiceParameters = function(index){
	return {next: this.choiceNext[index],
			consequences: this.choiceConsequences[index],
			isOutside: this.choiceIsOutside};
}

Snippet.prototype.add = function(string){
	this.htmlStrings.push(string);
}

Snippet.prototype.addBreak = function(){
	this.htmlStrings.push("<br><br>");
}


Snippet.prototype.getHtml = function(){
	var body = "";
	this.htmlStrings.forEach(function(string){
		body += string + ' ';
	});
	return body;
}

export default Snippet;