/*
Copyright 2013-2016 Brian Rollins (me  at brianrollins.com)
This is a work-in-progress. If you have any suggestions or additions, please contact the author.
Released under a Creative Commons Attribution 4.0 International License
http://creativecommons.org/licenses/by/4.0/
*/
var logLevel = 4; //Set your log level (0 - 4).
/*
** Log Levels:
** 0 = No logging
** 1 = Errors only
** 2 = Errors and Warnings
** 3 = All messages are logged (Counts are disabled)
** 4 = Full functionality
*/

//Init Styles
var mStyle = "color:#000;font-size:12px;"; //Master Style
/*
** Define your style with styler(color, background-color, font-size)
** Colors can be named colors or hex values (black or #00000 or #000 will work).
** Font sizes need a unit of measure (px, em, pt, etc).
*/
var infoStyle = mStyle+styler('','#DCDCDC',''),
	fxnStyle = mStyle+styler('','#8FBC8F',''),
	valStyle = mStyle+styler('','#FFE4B5',''),
	errorStyle = mStyle+styler('#fff','#FA8072',''),
	warnStyle = mStyle+styler('','#FFA500','');

//Style builder.
function styler(color, bg, size) {
	s = "";
	s += (color!=='') ? "color:"+color+";" : "";
	s += (bg!=='') ? "background-color:"+bg+";" : "";
	s += (size!=='') ? "font-size:"+size+";" : "";
	return s;
}

//CLog itself.
var clog = {
	info: function(p){
		if(logLevel >= 3){	console.info("%cInfo: "+p, infoStyle);}
	},
	fxn: function(theFxn,passedArgs){
		if(logLevel >= 3){
			args = "";
			len = passedArgs.length;
			for(i=0;i<len;i++){
				args += passedArgs[i];
				args += (i!=len-1) ? ", " : "";
			}
			console.log("%cFunction: "+theFxn+"("+args+")", fxnStyle);
		}
	},
	val: function(l){
		if(logLevel >= 3){console.log("%c"+l + " = " + eval(l), valStyle);} //Todo: Get rid of eval.
	},
	error: function(p){
		if(logLevel >= 1){console.error("%cError: "+p, errorStyle);}
	},
	warn: function(p){
		if(logLevel >= 2){ console.warn("%cWarning: "+p, warnStyle); }
	},
	clear: function() {
		if(logLevel >= 1){console.clear();}
	},
	count: function(x) {
		if(logLevel >=4) {console.count(x);}
	}
};
