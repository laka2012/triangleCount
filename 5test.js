var t = [0,1,2,3,4,5,6,7,8,9];

var lineexcluse = [[0,6,7,2],[0,5,9,3],[1,6,5,4],[1,7,8,3],[2,8,9,4]];

var midexclude = [[5,6,7,8,9]];

var edgeexclude = [[0,8],[1,9],[2,5],[3,6],[4,7]];

var insideexclude = [[5,7],[5,8],[6,8],[6,9],[7,5],[7,9],[8,5],[8,6],[9,6],[9,7]];

var tmp = [];

for (var i = 0;i<t.length;i++) {
	var tmpRs = [i];
	var org2 = t.slice(0);
	
	var index = org2.indexOf(i);
	if (index > -1) {
		org2.splice(index, 1);
	}
	
	for (var j=0;j<org2.length;j++) {
		var tmpRs2 = tmpRs.slice(0);
		var org3 = org2.slice(0);
		
		tmpRs2.push(org2[j]);
		
		var index = org3.indexOf(org2[j]);
		if (index > -1) {
			org3.splice(index, 1);
		}
		
		for (var p=0;p<org3.length;p++) {
			var tmpRs3 = tmpRs2.slice(0);
			
			tmpRs3.push(org3[p]);
			
			
			if (!testExist(tmpRs3, tmp) 
				&& !testExist(tmpRs3, lineexcluse)
				&& !testExist(tmpRs3, midexclude)
				&& !testExist(tmpRs3, edgeexclude, 2)
				&& !testExist(tmpRs3, insideexclude, 2)) {
				tmp.push(tmpRs3);
			}
		}
	}
}

function testExist(child, root, rep) {
	if(root.length == 0) return false;
	
	var repLimt = rep || 3;
	
	var rs = [];
	
	for (var i=0; i<root.length; i++) {
		var itemArray = root[i];
		var repNum = 0;
		
		for (var j=0; j<child.length; j++) {
			var tmpVar = child[j];
			
			for (var k=0; k<itemArray.length; k++) {
				if(tmpVar == itemArray[k]) {
					repNum++;
					rs.push(tmpVar);
				}
			}
		}
		
		if(repNum == repLimt) {
			return rs;
		}
	}
	
	return false;
}

console.log(tmp);
console.log(tmp.length);

