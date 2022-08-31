const data = [
    {
        title: "Todo 1",
        desc: "This is my first Todo",
        completed: true,
      },
    
      {
        title: "Todo 2",
        desc: "This is my second Todo",
        completed: true,
      },
    
      {
        title: "Todo 3",
        desc: "This is my third Todo",
        completed: true,
      },
    
      {
        title: "Todo 4",
        desc: "This is my fourth Todo",
        completed: true,
      },
    
      {
        title: "Todo 5",
        desc: "This is my fifth Todo",
        completed: true,
      },
]

function getData (){

  return data;
}
function setData (inData)
{
  data.push(inData);
  getData();
}
module.exports = {
  getData,
  setData,
}