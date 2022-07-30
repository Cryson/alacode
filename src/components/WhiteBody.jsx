import styled, {css} from 'styled-components';
import { breakpoints, mqMin } from '../style/mq';

export const WhiteBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 0;
  ${mqMin(breakpoints.lg)} {
    padding: 40px;
  }

  ${(props) => props.skill ? css`
    padding: 40px 20px;
  ` : ''}
  
  p {
    flex: 1 1 100%;
    margin-bottom: 1em;
    line-height: 2;
    font-weight: 700;
  }
  .texts {
    width: 100%;
    padding-top: 40px;
  }
`;