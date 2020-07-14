var spData = null;
  function doData(json) {
      spData = json.feed.entry;
  }

  function drawCell(ul, val) {
      var li = $("<li/>");
      ul.append(li);
      li.append(val);
      return li;
  }
  function drawList(div, rowData) {
	  if (rowData == null) return null;
	  if (rowData.length == 0) return null;
	  var ul = $("<ul/>");
	  div.append(ul);
	  for(var c=0; c<rowData.length; c++) {
		  drawCell(ul, rowData[c]);
	  }
	  return ul;
  }

  function drawDiv(parent) {
	  var div = $("<div/>");
	  parent.append(div);
	  return div;
  }

  function readData(parent) {
      var data = spData;
      var div = drawDiv(parent);
      var rowData = [];

      for(var r=4; r<data.length; r++) {
          var cell = data[r]["gs$cell"];
          var val = cell["$t"];
          if (cell.col == 1) {
              drawList(div, rowData);
              rowData = [];
          }
          rowData.push(val);
      }
      drawList(div, rowData);
  }
  $(document).ready(function(){
      readData($("#data"));
  });

