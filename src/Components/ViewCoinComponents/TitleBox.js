import copyLinkIcon from 'images/copy-link-icon.png'
import { OpenLinkIcon, LinkPageBox, LinkPageRef, TitleSquare, TitleBoxWrapper  } from 'Pages/ViewCoin/ViewCoin.style'

function TitleBox(props) {
    const { name, homepage, symbol } = props
    return (
        <TitleBoxWrapper>
            <TitleSquare>
                <h2 className='text-2xl'>{name}</h2>
                <h2 className='text-gray-400'>({symbol})</h2>
            </TitleSquare>
            <LinkPageBox>
                <LinkPageRef href={homepage} target="_blank" >
                    <OpenLinkIcon src={copyLinkIcon}  />
                </LinkPageRef>
                {homepage}
            </LinkPageBox>
        </TitleBoxWrapper>
    )
}

export default TitleBox