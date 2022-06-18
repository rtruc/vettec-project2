import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleDateFilter, updateDateFilter } from "../../../redux/actions/actions";
import { DateFilterPicker } from "./DateFilterPicker";
import { DateFilterToggle } from "./DateFilterToggle";
import { CheckBox, CheckBoxDiv } from "../../Task/CheckBox";


const DateFilterDiv = styled.form`
        display: flex;
        align-items: center;

        /* margin: 0px 0px; */

        position: absolute;
        left: 10px;
        top: 2px;
`

const DateFilterPickerColumn = styled.div`
    display: flex;
    flex-direction: column;
`


export const DateFilter = () => {
    const { earlier, later } = useSelector(state => state.dateRange);
    const dispatch = useDispatch();

    return (
        <DateFilterDiv >
            <DateFilterPickerColumn>
                <DateFilterPicker required defaultValue={later}
                    onChange={(e) => dispatch(updateDateFilter(e.target.value, 'later'))} />
                <DateFilterPicker required defaultValue={earlier}
                    onChange={(e) => dispatch(updateDateFilter(e.target.value, 'earlier'))} />
            </DateFilterPickerColumn>
            <CheckBoxDiv onClick={() => dispatch(toggleDateFilter())} />
        </DateFilterDiv>

    )
}