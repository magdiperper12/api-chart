async function getfun(){
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data =await response.text();
    const table = data.split("\n").slice(1);//to split the data into lines and remove the first line
    table.forEach( (ele)=>{//to rerepeat the function at all the element in the table
     let columns =ele.split(",");//to split by ,
     let year = columns[0];
     xlables.push(year);//to but the year variable in xlable variable
     let temp = columns[1];
     ylable.push(parseFloat(temp) + 14);//to convert from string to number
    
    })
}

const xlables = [];
const ylable = [];

 async function getchart(){//the chart template from chartjs 
    await getfun();//to dont wait for download the data first
    const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xlables,
                datasets: [{
                    label: 'Global avarage tempreture C° every year',
                    data: ylable,
                    borderWidth: 1,
                    backgroundColor:'blue',
                    fontColor:"blue"
                }]
            },
            options: {
                scales: {
                    y: {
                       min:13,
                       max:16,
                       ticks: {
                        callback: function(value) {
                            return value +"°" ;
                        }
                    }
                }
            }
        }
    }
)};
    getchart();//call back chart function