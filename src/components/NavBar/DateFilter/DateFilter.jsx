import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleDateFilter, updateDateFilter } from "../../../redux/actions/actions";
import { DateFilterPicker } from "./DateFilterPicker";
import { DateFilterToggle } from "./DateFilterToggle";

const DateFilterDiv = styled.form`
        display:flex;
        align-items:center;
        /* max-width: 100px; */

        /* position: absolute; */
        position: absolute;
        left: 10px;
        top: 11px;
`

export const DateFilter = () => {
    const {earlier, later} = useSelector(state => state.dateRange);
    const dispatch = useDispatch();
    // console.log("earlier: ", earlier);
    // console.log("later: ", later);


    return (

        <DateFilterDiv >
             <DateFilterPicker defaultValue={earlier} 
                    onChange={(e) => dispatch(updateDateFilter( e.target.value, 'earlier'))} /> 
             <DateFilterPicker defaultValue={later} 
                    onChange={(e) => dispatch(updateDateFilter( e.target.value, 'later'))}/>
             <DateFilterToggle onClick={() => dispatch(toggleDateFilter())} />
        </DateFilterDiv>

    )
}