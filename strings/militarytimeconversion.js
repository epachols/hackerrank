const timeConversion = (s) => {
    let milString = "";
    if (s.startsWith(12)) {
        if (s.endsWith("AM")) {
            milString = s.replace(s.slice(0,2), ("00"))
        } else {
            milString = s
        }
    } else if (s.endsWith("PM")) {
        milString = s.replace(s.slice(0,2), ((parseInt(s.slice(0, 2))+12)).toString())
    } else {
        milString = s
    }
     
    return(console.log(milString.slice(0, 8))) 
}

timeConversion("12:45:54PM");