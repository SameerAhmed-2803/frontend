import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:12345657,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Sameer Ahmed",
        creater:"John Doe",
        priority:2,
        time:"11:09"
    }))
    data.push(new bugModel({
        _id:12345657,
        name:"Won't Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Sameer Ahmed",
        creater:"John Doe",
        priority:3,
        time:"11:09"
    }))
    data.push(new bugModel({
        _id:12345657,
        name:"No Data",
        details:"The Data keeps getting removed!!",
        steps:"Open application and reload",
        version:"V2.0",
        assigned:"Sameer Ahmed",
        creater:"John Doe",
        priority:1,
        time:"11:09"
    }))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;

}