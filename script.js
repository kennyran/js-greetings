var name = prompt("Enter your name please.", "name")
var today = new Date()
var hrs = today.getHours();
    document.writeln("<b>")
    document.writeln("<b>");
    if (hrs <= 12) 
        document.write("Good Morning" +name+'1');
        else if (hrs <= 18)
        document.write("Good Afternoon "+name+'!');
        else
        document.write("Good Evening "+name+'!');
        document.writeln("<br />")