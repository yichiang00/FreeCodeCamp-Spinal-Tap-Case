
function spinalCase(str) {

  str=str.replace(/\W/g,"-");
  str=str.replace(/" "/g,"-");
  str=str.replace(/[_]/g,"");
  var result=str.match(/[A-Z]/g);
  var temp=[];
  for (var i = 0; i < str.length; i++) {
  var foundtemp=false;
  for (var j = 0; j < result.length; j++) {
    if(str[i]===result[j]&&str[i-1]!=="-")
    {
      foundtemp=true;
    }
  }
    if(foundtemp===true)
    {
    temp.push(" "+str[i]);
    }else {
    temp.push(str[i]);
    }
  }

  str=temp.join("").trim().toLowerCase();
  str=str.replace(/\s/g,"-");
  return str;
}

spinalCase("AllThe-small Things");
