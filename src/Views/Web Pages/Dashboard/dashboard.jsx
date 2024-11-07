import React, {useEffect} from "react";
import Card from '../../Components/Dasboard/card'
import {useDispatch, useSelector}from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {getBugs} from '../../../Controllers/Redux/bugSlice'

export default ()=>{
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.bugs)
    const browserHistory = useNavigate();
    let highCount = 0
    let medCount = 0
    let lowCount = 0
    if(bugs!=undefined){
        highCount = filterBugs(1);
        medCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function redirect(){
        browserHistory('/viewbugs')
    }

    function filterBugs(priority){
        return bugs.filter((bug)=>{return bug.priority == priority})
    }

    useEffect(()=>{
        dispatch(getBugs())
    }, [bugs == undefined])

    return(
        <div className="page-container">
            <Card priority="1" count={highCount.length} clicked={redirect}/>
            <Card priority="2" count={medCount.length} clicked={redirect}/>
            <Card priority="3" count={lowCount.length} clicked={redirect}/>
        </div>
        
    )
}