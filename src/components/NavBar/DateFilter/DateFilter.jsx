import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { toggleDateFilter } from "../../../redux/actions/actions";
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
    // const {earlier, later} = useSelector(state => state.dateRange);
    // console.log("earlier: ", earlier);
    // console.log("later: ", later);


    return (
<></>
        // <DateFilterDiv onChange={(e) => console.log()}>
        //      <DateFilterPicker name="earlier" defaultValue={earlier} />  {/* max & min? */}
        //      <DateFilterPicker name="later"   defaultValue={later}/>
        //      <DateFilterToggle name="clicky"  />
        // </DateFilterDiv>

    )
}