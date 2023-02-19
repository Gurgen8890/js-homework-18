function MyDate(year,month,day) {
    this.year = year;    
    this.month = month;
    this.getFullYear = function(){
        return this.year
    }
    this.setMonth = function(value){
        this.month = value;        

        }
        console.log(this.year)
    }
    this.getDay = function(){
        return this.day
    };       



let date = new MyDate(2023);
date.setMonth(10);
//console.log(date.getFullYear());
console.log(date)
//console.log(MyDate(year,month,day))
// console.log(date.setMonth())
// console.log(date.getDay())



let dt = new Date();

function formatTime(dt) {
    const date = dt.getDate();
    const month = (dt.getMonth()+1).toString().padStart(2,"0");
    const year = dt.getFullYear();
    const h = dt.getHours();
    const m = dt.getMinutes().toString().padStart(2, "0");
    return `${date}.${month}.${year}, ${h}:${m}`
}
 console.log(formatTime(dt))



 // stananq nuyn@ bayc nshvac lini shabatva or@ inch e

 function formatCurrentTime(dt) { 
    const day = dt.getDay(); // kstananq 0-ic 6 zangvaci principov
    const dayTitle = ['Sun','Mon','Tues','Wedn','Thurs','Frid','Satur']// stexcecinq zangvac@ orva orerov ev returni mej kdimenq => dayTitle[day]
    const date = dt.getDate();     
    const month = dt.getMonth();//kstanaq 0-ic 11 u nuyn@ kenenq zangvacov monthTitle hamar => monthTitle[month]
    const monthTitle = ['January','February', 'March', 'April','May','June','July','August','September','October','November','December']    
    const year = dt.getFullYear();
    const h  = dt.getHours();
    const m = dt.getMinutes().toString().padStart(2,"0");
                                                 
   return `${dayTitle[day]}, ${date} ${monthTitle[month]} ${year}, ${h}:${m}`   //stananq `Sun, 19 february 2024, @ntacik jam@`

}

console.log(formatCurrentTime(dt))

 

