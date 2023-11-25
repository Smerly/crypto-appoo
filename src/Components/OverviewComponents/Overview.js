import { GraphBox, GraphRow, OverviewTitle } from 'Components/OverviewComponents/overview.style'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import CoinList from 'Components/CoinListComponent/CoinList';

function Overview() {
    return (
        <div>
            <OverviewTitle> Overview </OverviewTitle>
            <GraphRow>
                <GraphBox>
                    <LineGraph /> 
                </GraphBox>
                <GraphBox>
                    <BarGraph />
                </GraphBox>
            </GraphRow>
            <CoinList />
        </div>
    )
}

export default Overview;