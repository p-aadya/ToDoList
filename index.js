var arr_list=["book","pen","notebook"]

function createtask()
{
  let task=document.getElementById("add-task").value
  arr_list.push(task)
  show()
}

//display list
function show()
{
  let data="";
  for(var i=0;i<arr_list.length;i++)
  {
 data+='<tr>'
 data+='<td>'+arr_list[i]+'</td>'
 data+='<td><button class="btn btn-danger" onclick="deletetask('+i+')">Delete</button></td>'
 data+='<td><button class="btn btn-success" onclick="updatedata('+i+')">Update</button></td>'
 data+='</tr>'
  }
  document.getElementById("mytodo-task").innerHTML=data
}

function deletetask(id)
{
  arr_list.splice(id,1)
  show()
}

function updatedata(id)
{
  document.getElementById("updateform").style.display="block"
  document.getElementById("update-task").value=arr_list[id];
  document.getElementById("updateform").onsubmit=function()
  {
    let task=document.getElementById("update-task").value
    arr_list.splice(id,1,task)
    show()
  }
}